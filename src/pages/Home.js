import StatsCards from "../components/StatsCards";
import ProgressSection from "../components/ProgressSection";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div className="page-content">
      <StatsCards />
      <ProgressSection />
      <div className="toolbar">
        <SearchBar />
        <Filters />
      </div>
      <TaskList />
    </div>
  );
}
