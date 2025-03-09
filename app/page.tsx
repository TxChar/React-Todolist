import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      
      {/* ✅ ทำให้ช่อง Add Task และ Task List เท่ากัน */}
      <div className="max-w-2xl w-full mx-auto">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

