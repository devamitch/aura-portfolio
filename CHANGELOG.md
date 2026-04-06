# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-04-06

### Added
- **Interactive Maps**: Added a Google Maps embed to the `DetailScreen` for each project location.
- **SEO Fields**: Integrated `metaTitle` and `metaDescription` fields in the `AdminScreen` and implemented dynamic metadata updates in the `DetailScreen`.
- **Timeline Filtering**: Added a year range filter ("From" and "To") to the `HomeScreen` and `ProjectsScreen`.
- **Global Search**: Implemented a real-time keyword search bar on the `ProjectsScreen`.
- **Scroll to Top**: Added a smooth "Scroll to Top" button to the main portfolio pages.
- **Project Resources**: Added a dedicated section for external links and technical materiality tags in the `DetailScreen`.

### Changed
- **Admin Dashboard**: Refined the project form with automated slug generation and enhanced tag management.
- **Project Cards**: Updated cards to display completion years alongside categories for better context.
- **Styling**: Improved the visual hierarchy and typography across all screens for a more premium feel.

### Fixed
- **Slug Generation**: Fixed an issue where slugs were not being correctly updated for new projects.
- **Filtering Logic**: Optimized the project filtering and sorting performance using `useMemo`.

## [1.1.0] - 2026-04-05

### Added
- **AI Design Insights**: Integrated Google's Gemini AI to generate project summaries.
- **PWA Support**: Added a manifest file and service worker configuration for offline access.
- **Firebase Integration**: Migrated project data to Firestore for real-time synchronization.

### Changed
- **Animations**: Replaced basic CSS transitions with Framer Motion and GSAP for a more cinematic experience.

## [1.0.0] - 2026-04-01

### Initial Release
- Core portfolio functionality with Home, Projects, and Detail screens.
- Basic project management through a local data file.
- Responsive design with Tailwind CSS.
