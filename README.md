#  Task Dashboard

A modern, fully-featured task management application built with React. Manage your tasks efficiently with a clean and intuitive interface.

##  Features

-  **Create, Read, Update, Delete Tasks** - Full CRUD operations
-  **Priority Levels** - Set tasks as High, Medium, or Low priority
-  **Search Functionality** - Real-time search through all tasks
-  **Filter by Priority** - View tasks filtered by priority level
-  **Progress Tracking** - Visual progress bar showing task completion percentage
-  **Persistent Storage** - All data is saved to a json-server API
-  **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Beautiful gradient backgrounds and smooth animations
-  **Sidebar Navigation** - Easy navigation between Home, Add Task, and About pages

##  Tech Stack

- **Frontend Framework**: React 19
- **Routing**: React Router v7
- **State Management**: Context API + useReducer Hook
- **Backend**: json-server (Mock API)
- **Styling**: Custom CSS3
- **Build Tool**: Create React App

##  Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Instructions

1. **Clone or navigate to the project directory:**
   ```bash
   cd "C:\Users\sangavi\OneDrive\Documents\Desktop\CT task\Task dashboard\project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   This will start both:
   - React dev server on `http://localhost:3000`
   - json-server API on `http://localhost:3500`

##  Usage

### Home Page
View all your tasks with statistics:
- **Total Tasks**: Count of all tasks
- **Completed**: Count of finished tasks
- **Pending**: Count of incomplete tasks
- **Progress Bar**: Visual representation of completion percentage
- **Search Bar**: Find tasks by text
- **Priority Filter**: View tasks by priority level

### Add Task Page
Create new tasks:
1. Click on **"➕ Add Task"** in the sidebar
2. Enter the task description
3. Select a priority level (High, Medium, Low)
4. Click **"Add Task"** button
5. You'll be redirected to the home page

### Task Management
Each task shows:
-  Checkbox to mark as complete/incomplete
- Priority badge (color-coded)
- Task description
- Delete button

**Priority Colors:**
-  **Red** = High Priority
-  **Amber** = Medium Priority
-  **Green** = Low Priority

### About Page
Learn more about the application and its features.

## Project Structure

```
project/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── api/
│   │   └── taskApi.js           # API calls to json-server
│   ├── components/
│   │   ├── About.js             # About page component
│   │   ├── AddTaskForm.js       # Task form (legacy)
│   │   ├── ErrorBoundary.js     # Error handling
│   │   ├── Filters.js           # Priority filter component
│   │   ├── Header.js            # Header navigation
│   │   ├── ProgressSection.js   # Progress bar component
│   │   ├── SearchBar.js         # Search component
│   │   ├── SideBar.js           # Sidebar navigation
│   │   ├── StatsCards.js        # Statistics cards
│   │   ├── TaskDetails.js       # Task detail view
│   │   ├── TaskItem.js          # Individual task item
│   │   └── TaskList.js          # Task list container
│   ├── Context/
│   │   └── TaskContext.js       # Context API setup
│   ├── pages/
│   │   ├── Home.js              # Home page
│   │   └── AddTaskPage.js       # Add task page
│   ├── Reducer/
│   │   └── taskReducer.js       # useReducer logic
│   ├── App.js                   # Main app component
│   ├── App.css                  # App styling
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles
├── dummy-api/
│   └── db.json                  # json-server database
├── package.json                 # Project dependencies
└── README.md                    # This file
```

##  API Endpoints

All endpoints are hosted at `http://localhost:3500/tasks`

- **GET /tasks** - Fetch all tasks
- **GET /tasks/:id** - Fetch a specific task
- **POST /tasks** - Create a new task
- **PATCH /tasks/:id** - Update a task
- **DELETE /tasks/:id** - Delete a task

##  Styling

The application uses a modern design with:
- **Color Scheme**: Dark header, light gray background, purple accents
- **Sidebar**: Dark navigation with active link highlighting
- **Cards**: White cards with subtle shadows and hover effects
- **Forms**: Styled input fields with focus states
- **Animations**: Smooth transitions and hover effects

##  Available Scripts

### `npm start`
Starts only the React development server on port 3000.

### `npm run server`
Starts only the json-server API on port 3500.

### `npm run dev`
Starts both the React dev server and json-server concurrently.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm test`
Runs the test suite in interactive watch mode.

##  State Management

The app uses **Context API** with **useReducer** for state management:

```javascript
// Context provides:
- tasks: Array of task objects
- search: Search query string
- priority: Selected priority filter
- loading: Loading state
- error: Error messages
- dispatch: Function to dispatch actions
```

**Actions:**
- `SET_TASKS` - Set all tasks
- `ADD_TASK` - Add a new task
- `UPDATE_TASK` - Update an existing task
- `DELETE_TASK` - Delete a task
- `SET_SEARCH` - Update search query
- `SET_PRIORITY` - Update priority filter
- `LOADING` - Set loading state
- `ERROR` - Set error state

##  Task Object Structure

```javascript
{
  id: number,           // Unique identifier
  text: string,         // Task description
  completed: boolean,   // Completion status
  priority: string      // 'high' | 'medium' | 'low'
}
```

##  Troubleshooting

### Port 3000 already in use
```bash
taskkill /F /IM node.exe    # Windows
# or
npm cache clean --force
```

### Module not found errors
```bash
npm install
```

### json-server not starting
Ensure port 3500 is available and the `dummy-api/db.json` file exists.


