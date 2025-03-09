"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../services/tasks";

interface TaskDeleteButtonProps {
  taskId: string;
}

export default function TaskDeleteButton({ taskId }: TaskDeleteButtonProps) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); //รีโหลด Task List หลังจากลบ Task
    },
  });

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this task?")) {
          deleteMutation.mutate(taskId);
        }
      }}
      className="px-3 py-1 bg-red-500 text-white rounded"
    >
      Delete
    </button>
  );
}
