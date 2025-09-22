# AI Coding Agent Instructions for `launch-veb-site`

## Overview
The `launch-veb-site` project is a web-based application designed to showcase a landing page with interactive elements. The project structure includes HTML, CSS, JavaScript, and image assets. The primary goal is to ensure a responsive and visually appealing user interface.

## Project Structure
- **Root Directory**:
  - `index.html`: Entry point for the application.
  - `json.js`: Contains JavaScript logic for handling JSON data.
  - `main.py`: Placeholder for Python-based backend logic (if applicable).
  - `package.json`: Node.js project metadata and dependencies.
- **`launch-veb-site/` Directory**:
  - `index.html`: Main HTML file for the landing page.
  - `css/style.css`: Stylesheet for the landing page.
  - `icon/`: Contains SVG icons used in the UI.
  - `img/`: Contains image assets for the landing page.
  - `js/app.js`: JavaScript logic for interactive elements.

## Developer Workflows
### Build and Run
- **Install Dependencies**:
  ```bash
  npm install
  ```
- **Run the Application**:
  Open `launch-veb-site/index.html` in a browser to view the landing page.

### Debugging
- Use browser developer tools to inspect and debug HTML, CSS, and JavaScript.
- For JSON-related logic, refer to `json.js`.

## Project-Specific Conventions
- **CSS Classes**:
  - Follow the BEM (Block Element Modifier) methodology for naming classes.
  - Example: `block__element--modifier`.
- **JavaScript**:
  - Use ES6+ syntax.
  - Keep functions modular and reusable.
- **HTML**:
  - Ensure semantic tags are used (e.g., `<header>`, `<main>`, `<footer>`).

## Integration Points
- **External Dependencies**:
  - Node.js dependencies are listed in `package.json`.
- **Cross-Component Communication**:
  - JavaScript in `js/app.js` interacts with DOM elements defined in `index.html`.
  - JSON data handling logic in `json.js` can be integrated with `app.js` if needed.

## Examples
### Adding a New Icon
1. Place the SVG file in `icon/`.
2. Reference it in `index.html`:
   ```html
   <img src="icon/new-icon.svg" alt="New Icon">
   ```

### Adding a New JavaScript Function
1. Define the function in `js/app.js`:
   ```javascript
   function newFeature() {
       console.log('New feature added!');
   }
   ```
2. Call the function in the appropriate event listener.

---
This document is a living guide. Update it as the project evolves to ensure AI agents remain productive.