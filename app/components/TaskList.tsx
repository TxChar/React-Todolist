"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasks, updateTaskStatus } from "../services/tasks";

export default function TaskList() {
  const queryClient = useQueryClient();
  const { data: tasks, isLoading } = useQuery({ queryKey: ["tasks"], queryFn: getTasks });

  //  เพิ่ม Mutation สำหรับอัปเดตสถานะ Task
const updateStatusMutation = useMutation({
mutationFn: ({ taskId, status }: { taskId: string; status: string }) =>
    updateTaskStatus(taskId, status),
onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["tasks"] }); //  รีโหลด Task List
},
});

if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

return (
    <div className="container p-4">
        <ul className="mt-4 space-y-2">
            {tasks?.map((task: { id: string; name: string; status: string }) => (
            <div key={task.id} className="border p-3 flex justify-between items-center rounded shadow-md ">
                <div className={task.status === "Done" ? "line-through text-red-500" : ""}>
                {task.name}
                </div>
                {/* <div className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded">
                {task.status}
                </div> */}
                <div className="flex gap-2">
                <button
                    onClick={() => {
                        const newStatus = task.status === "Done" ? "Pending" : "Done"; //  Toggle status
                        updateStatusMutation.mutate({ taskId: task.id, status: newStatus });
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                    >
                    {task.status === "Done" ? "Undo" : "Done"}
                    </button>
                </div>
            </div>
            ))}
        </ul>
    </div>
);
}
