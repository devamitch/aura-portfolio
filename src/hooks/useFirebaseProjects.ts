import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { collection, getDocs, query, orderBy, addDoc, getDocFromServer, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { Project as ProjectData, projects as initialProjects } from '../data/projects';

export type Project = ProjectData & { id: string };

const PROJECTS_COLLECTION = 'projects';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration. ");
    }
  }
}

export function useFirebaseProjects() {
  const queryClient = useQueryClient();

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      try {
        const q = query(collection(db, PROJECTS_COLLECTION));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
          console.log('Seeding database with initial projects...');
          const seedPromises = initialProjects.map(project => 
            addDoc(collection(db, PROJECTS_COLLECTION), project)
          );
          await Promise.all(seedPromises);
          
          const reQ = query(collection(db, PROJECTS_COLLECTION));
          const reSnapshot = await getDocs(reQ);
          return reSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
        }

        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
      } catch (error) {
        handleFirestoreError(error, OperationType.LIST, PROJECTS_COLLECTION);
        return [];
      }
    },
  });

  const addProject = useMutation({
    mutationFn: async (newProject: Omit<Project, 'id'>) => {
      try {
        const docRef = await addDoc(collection(db, PROJECTS_COLLECTION), newProject);
        return { id: docRef.id, ...newProject };
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, PROJECTS_COLLECTION);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const updateProject = useMutation({
    mutationFn: async (updatedProject: Project) => {
      try {
        const { id, ...data } = updatedProject;
        const docRef = doc(db, PROJECTS_COLLECTION, id);
        await updateDoc(docRef, data);
        return updatedProject;
      } catch (error) {
        handleFirestoreError(error, OperationType.UPDATE, `${PROJECTS_COLLECTION}/${updatedProject.id}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const deleteProject = useMutation({
    mutationFn: async (id: string) => {
      try {
        const docRef = doc(db, PROJECTS_COLLECTION, id);
        await deleteDoc(docRef);
        return id;
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, `${PROJECTS_COLLECTION}/${id}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  return {
    projects,
    isLoading,
    error,
    addProject,
    updateProject,
    deleteProject,
  };
}
