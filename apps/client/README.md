# React + TypeScript + Vite

# React + TypeScript + Vite for ToDo App
This template has been updated to support a ToDo application with features such as user authentication, task management, and board organization. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules tailored for this application.
To get started with the new features, ensure you have the necessary modules installed and follow the setup instructions below.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## New Features Setup

### Modules and Functions

Before starting the development server, make sure to install the following dependencies:

```sh
npm install react-router-dom @reduxjs/toolkit react-redux
```

These modules will help in managing routing within the application, as well as state management for the ToDo tasks and user authentication.

### Running the Application

To run the application in development mode with hot module replacement, use the following command:

```sh
npm run dev
```

This will start the React application with Vite, allowing you to develop and test new features in real-time.

### Building for Production

When you are ready to build the application for production, use the following command:

```sh
npm run build
```

This will create an optimized production build of your ToDo application.

For more detailed instructions on how to use the new features, refer to the documentation in the `docs` directory.
