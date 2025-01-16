# Project Structure

This project follows a feature-based architecture with shared components and utilities. Here's an overview of the main directories:

## Core Directories

### `features/`
Contains feature-specific code organized into self-contained modules. Each feature has its own:
- `components/` - React components specific to the feature
- `services/` - API calls and business logic
- `types/` - TypeScript types and interfaces
- Other feature-specific code (hooks, utils, etc.)

Example features:
- `auth/` - Authentication and user management
- `landing/` - Landing page and related components

### `layouts/`
Contains layout components that define the overall structure of pages:
- `MainLayout/` - Main application layout with navigation
- `Navbar/` - Global navigation component

### `shared/`
Contains code shared across multiple features:
- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `utils/` - Utility functions and helpers
- `constants/` - Global constants and configuration
- `config/` - Application configuration files

## Best Practices

1. **Feature Organization**
   - Keep feature-specific code within its feature directory
   - Only move code to `shared/` when it's used by multiple features

2. **Component Structure**
   - Use index files for clean exports
   - Keep components focused and single-responsibility
   - Use proper TypeScript types

3. **Code Organization**
   - Group related code together in feature modules
   - Keep shared code minimal and well-documented
   - Use proper naming conventions for clarity

4. **State Management**
   - Keep state close to where it's used
   - Use React Context for global state when needed
   - Consider using state management libraries for complex state

5. **API Integration**
   - Use service layers to handle API calls
   - Keep API logic separate from components
   - Handle errors consistently

## Adding New Features

When adding a new feature:
1. Create a new directory in `features/`
2. Follow the established structure (components, services, types)
3. Export public API through feature's index.ts
4. Keep feature-specific code contained within the feature directory
