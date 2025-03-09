import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-xl">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
}
