"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskStatus } from "../services/tasks";

interface TaskStatusButtonProps {
  taskId: string;
  status: string;
}

export default function TaskStatusButton({ taskId, status }: TaskStatusButtonProps) {
  const queryClient = useQueryClient();

  const updateStatusMutation = useMutation({
    mutationFn: ({ taskId, status }: { taskId: string; status: string }) =>
      updateTaskStatus(taskId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); //รีโหลด Task List
    },
  });

    return (
    <button
        onClick={() => {
        const newStatus = status === "Done" ? "Pending" : "Done"; //Toggle status
        updateStatusMutation.mutate({ taskId, status: newStatus });
        }}
        className="px-3 py-1 bg-blue-500 text-white rounded"
    >
        {status === "Done" ? "Undo" : "Done"}
    </button>
    );
}
