export interface Project {
  id?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  title: string;
  description: string;
  longDescription: string[];
  category: 'Residential' | 'Commercial' | 'Cultural' | 'Industrial';
  location: string;
  year: string;
  image: string;
  imageAlt?: string;
  gallery: string[];
  tags: string[];
  links: { text: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "the-obsidian-pavilion",
    title: "The Obsidian Pavilion",
    description: "A minimalist residential retreat nestled in the high desert, featuring floor-to-ceiling glass and locally sourced volcanic stone.",
    longDescription: [
      "The Obsidian Pavilion is a masterclass in desert modernism. Situated on a rugged outcrop in Joshua Tree, the residence is designed to disappear into the landscape while providing a sanctuary for its inhabitants.",
      "The structure utilizes a steel frame with expansive glazing, allowing for unobstructed views of the desert floor. Locally sourced volcanic stone provides thermal mass, keeping the interior cool during the day and warm at night.",
      "Sustainability is at the core of the design, with a greywater recycling system and integrated solar panels that provide 100% of the home's energy needs."
    ],
    category: "Residential",
    location: "Joshua Tree, CA",
    year: "2024",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Minimalist black stone house in a desert landscape",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Sustainable", "Minimalist", "Desert Modern"],
    links: [
      { text: "Architectural Digest Feature", url: "https://example.com/ad-feature" },
      { text: "Project Documentation", url: "https://example.com/obsidian-docs" }
    ]
  },
  {
    slug: "lumina-corporate-hub",
    title: "Lumina Corporate Hub",
    description: "A vertical garden office complex designed to redefine the workspace with biophilic design elements.",
    longDescription: [
      "Lumina Corporate Hub represents the future of the urban workplace. By integrating nature directly into the office environment, we've created a space that enhances productivity and well-being.",
      "The building features a series of cascading sky gardens that provide outdoor breakout spaces for employees. These gardens also act as natural air filters, improving indoor air quality.",
      "The facade is wrapped in a high-performance smart glass that adjusts its transparency based on the sun's position, significantly reducing cooling loads."
    ],
    category: "Commercial",
    location: "Singapore",
    year: "2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    imageAlt: "Modern glass office building with vertical gardens",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Biophilic", "LEED Platinum", "Smart Building"],
    links: [
      { text: "Sustainability Report", url: "https://example.com/lumina-sustainability" }
    ]
  },
  {
    slug: "ether-museum-of-art",
    title: "Ether Museum of Art",
    description: "A cultural landmark featuring a parametric facade that mimics the movement of light.",
    longDescription: [
      "The Ether Museum of Art is a testament to the power of computational design. Its complex, undulating facade was generated using custom algorithms to optimize for both aesthetics and structural integrity.",
      "Inside, the museum features a series of interconnected galleries that flow seamlessly into one another. The use of translucent materials creates an ethereal atmosphere, where light and shadow play a central role.",
      "The museum serves as a new cultural anchor for the city, providing a space for both traditional and digital art forms."
    ],
    category: "Cultural",
    location: "Bilbao, Spain",
    year: "2025",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Futuristic museum with a white undulating parametric facade",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Parametric", "Cultural", "Iconic"],
    links: [
      { text: "Virtual Tour", url: "https://example.com/ether-tour" }
    ]
  },
  {
    slug: "nexus-logistics-center",
    title: "Nexus Logistics Center",
    description: "A state-of-the-art industrial facility utilizing automated robotics and modular construction.",
    longDescription: [
      "Nexus Logistics Center is a prototype for the next generation of industrial architecture. By prioritizing efficiency and scalability, we've created a facility that can adapt to the rapidly changing needs of global trade.",
      "The design utilizes a modular construction system that allowed for a significantly faster build time. The facility is fully automated, with a fleet of robotics handling all sorting and distribution tasks.",
      "Despite its industrial nature, the project includes high-quality amenities for the human staff, including a rooftop garden and a naturally lit canteen."
    ],
    category: "Industrial",
    location: "Rotterdam, Netherlands",
    year: "2024",
    image: "https://images.unsplash.com/photo-1541888086925-0c13d4f47852?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541888086925-0c13d4f47852?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    ],
    tags: ["Automation", "Modular", "Industrial"],
    links: [
      { text: "Case Study", url: "https://example.com/nexus-case-study" }
    ]
  }
];
