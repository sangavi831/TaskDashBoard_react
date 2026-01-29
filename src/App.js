import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-task" element={<AddTaskPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/task/:id" element={<TaskDetails />} />
              </Routes>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
