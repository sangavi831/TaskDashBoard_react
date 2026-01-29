export default function About() {
  return (
    <div className="page-content">
      <div className="about-container">
        <h1>About Task Dashboard</h1>
        <div className="about-card">
          
          <p>
            A modern task management dashboard built with React, Context API,
            and the useReducer hook. Manage your tasks efficiently with a clean
            and intuitive interface.
          </p>
        </div>
          <div className="about-card">
          <h3> Features</h3>
          <ul>
            <li> Create, read, update, and delete tasks</li>
            <li> Set task priorities (High, Medium, Low)</li>
            <li> Search tasks in real-time</li>
            <li> Filter tasks by priority</li>
            <li> Track task progress with visual progress bar</li>
            <li> Persistent data with json-server API</li>
          </ul>
        </div>

        <div className="about-card">
          <h3> Technologies Used</h3>
          <div className="tech-stack">
            <span>React 19</span>
            <span>React Router v7</span>
            <span>Context API</span>
            <span>useReducer Hook</span>
            <span>json-server</span>
            <span>CSS3</span>
          </div>
        </div>

        <div className="about-card">
          <h3> Developer</h3>
          <p>Created for efficient task management.</p>
        </div>
      </div>
    </div>
  );
}
