"use client";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/tasks";

export default function TaskList() {
  const { data: tasks, isLoading, error } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading tasks</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">My Todo List</h1>
      <ul className="mt-4 space-y-2">
        {tasks?.map((task: { id: string; name: string; status: string }) => (
          <li key={task.id} className="border p-3 flex justify-between items-center rounded shadow-md">
            {/* <span className={task.status === "Done" ? "line-through text-gray-500" : ""}> */}
            <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">
              {task.name}
            </span>
            <span className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
