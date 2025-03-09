"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, updateTaskStatus } from "../services/tasks";
import TaskStatusButton from "./TaskStatusButton";


export default function TaskList() {
    const { data: tasks, isLoading } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });
  
    if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  
    return (
    <div className="container mx-auto p-4">
        <ul className="mt-4 space-y-2">
        {tasks?.map((task: any) => (
            <li key={task.id} className="border p-3 flex justify-between items-center rounded shadow-md">
            <div className="flex items-center gap-2">
                {/* <div className="w-20 text-center px-2 py-1 text-xs font-semibold bg-gray-200 rounded"> */}
                <div className={`w-20 text-center px-2 py-1 text-xs font-semibold bg-blue-200 rounded ${task.status === "Done" ? "bg-green-200" : ""}`}>
                {task.status}
                </div>
                <div className={`flex-1 ${task.status === "Done" ? "line-through text-gray-500" : ""}`}>
                {task.name}
                </div>
            </div>

                <TaskStatusButton taskId={task.id} status={task.status} />
            </li>
        ))}
        </ul>
    </div>
    );
}