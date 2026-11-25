first-app/
├── node_modules/ # Dependencies and libraries installed with npm/yarn/pnpm
├── public/ # Raw static files (favicon, robots.txt)
│ ├── index.html # Single HTML page of the application (SPA)
│ ├── favicon.ico
│ ├── manifest.json
│ └── robots.txt
├── src/ # Main source code of the React application
│ ├── App.js # Root component that builds the user interface
│ ├── App.css # Specific styles for the App component
│ ├── main.js # JavaScript entry point (mounts React into the DOM)
│ └── index.css # Global styles of the application
├── .gitignore # Files ignored by Git (e.g., node_modules)
└── package.json # List of dependencies, scripts, and metadata

How it works:
• Automatic injection. When you start the app, Webpack combines all your JavaScript files (index.js, App.js, etc.) into one optimized file (a bundle) and automatically inserts the <script> tag into the <body>.
• Loading order. The browser loads this injected script, which runs src/index.js. That file finds <div id="root"></div> and displays your <App /> component inside it.
• Why it is necessary. Browsers cannot read React's JSX syntax directly. The build step translates your code into standard JavaScript before adding it to the HTML page.
