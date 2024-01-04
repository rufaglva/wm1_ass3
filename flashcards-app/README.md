# Flashcards App - React + TypeScript + Vite

This template provides a structured and minimal setup for a Flashcards application using React, TypeScript, and Vite. The project includes features like Hot Module Replacement (HMR) and ESLint rules for code quality.

## Project Structure

The project structure is organized to enhance maintainability and scalability. Here's an overview:

- **`src` Directory**: Contains the main source code for the React application.
  - **`app` Folder**: Holds the main App component and routing configurations.
  - **`components` Folder**: Contains reusable React components.
  - **`hooks` Folder**: Includes custom React hooks, such as `useFetch` for handling data fetching.
  - **`types` Folder**: Defines TypeScript types used throughout the application.
  - **`app` Folder**: Manages the main App component and routing configurations.

- **`public` Directory**: Stores static assets, such as HTML files and images.

- **`json` Directory**: Includes a sample JSON file (`Flashcards.json`) with initial flashcard data.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**:


   git clone https://github.com/your-username/flashcards-app.git


2. **Install Dependencies**:


   cd flashcards-app
   npm install


3. **Run the Development Server**:


   npm run dev


   This will start the development server, and you can access the app at `http://localhost:3000`.

## Customization and Extension

### ESLint Configuration

The ESLint configuration is set up to enforce code quality. If you are developing a production application, consider the following:

- Configure the top-level `parserOptions` property in `.eslintrc.js` to include type-aware lint rules:


  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },


- Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Application Features

- **Flashcards Management**: Create, edit, and remove flashcards with ease.
- **Status Tracking**: Mark flashcards as "Want To Learn," "Noted," or "Learned."
- **Sorting and Filtering**: Sort and filter flashcards based on various criteria.
- **Responsive Design**: The app is designed to work seamlessly on different devices.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and submit a pull request.

Feel free to reach out if you have any questions or need assistance. Happy coding!