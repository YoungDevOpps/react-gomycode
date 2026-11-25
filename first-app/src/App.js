import logo from "./logo.svg";
import "./App.css";

function App() {
  const treeContent = `first-app/
├── node_modules/ # Dependencies and libraries installed with npm/yarn/pnpm
├── public/       # Raw static files (favicon, robots.txt)
│   ├── index.html    # Single HTML page of the application (SPA)
│   ├── favicon.ico   # Small icon displayed in the browser tab
│   ├── manifest.json # Configuration file for installing the app (PWA)
│   └── robots.txt    # Rules telling search engines which pages to crawl
├── src/          # Main source code of the React application
│   ├── App.js        # Root component that builds the user interface
│   ├── App.css       # Specific styles for the App component
│   ├── main.js       # JavaScript entry point (mounts React into the DOM)
│   └── index.css     # Global styles of the application
├── .gitignore    # Files ignored by Git (e.g., node_modules)
└── package.json  # List of dependencies, scripts, and metadata`;

  return (
    <div className="container">
      <section className="card">
        <h2>Project Structure</h2>
        <pre className="code-block">
          <code>{treeContent}</code>
        </pre>
      </section>

      <section className="card">
        <h2>How it works</h2>
        <ul>
          <li>
            <strong>Automatic injection.</strong> When you start the app,
            Webpack combines all your JavaScript files (index.js, App.js, etc.)
            into one optimized file (a <em>bundle</em>) and automatically
            inserts the <code>&lt;script&gt;</code> tag into the{" "}
            <code>&lt;body&gt;</code>.
          </li>
          <li>
            <strong>Loading order.</strong> The browser loads this injected
            script, which runs <code>src/index.js</code>. That file finds{" "}
            <code>&lt;div id="root"&gt;&lt;/div&gt;</code> and displays your{" "}
            <code>&lt;App /&gt;</code> component inside it.
          </li>
          <li>
            <strong>Why it is necessary.</strong> Browsers cannot read React's
            JSX syntax directly. The build step translates your code into
            standard JavaScript before adding it to the HTML page.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
