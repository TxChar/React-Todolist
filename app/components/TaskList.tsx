"use client";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/tasks";

export default function TaskList() {
const { data: tasks, isLoading, error } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
if (error) return <p className="text-center text-red-500">Error loading tasks</p>;

return (
    <div className="container">
        <ul className="mt-4 space-y-2">
            {tasks?.map((task: { id: string; name: string; status: string }) => (
            <div key={task.id} className="border p-3 flex justify-between items-center rounded shadow-md max-w-xl">
                <div className={task.status === "Done" ? "line-through text-red-500" : ""}>
                {task.name}
                </div>
                <div className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">
                {task.status}
                </div>
            </div>
            ))}
        </ul>
    </div>
);
}
