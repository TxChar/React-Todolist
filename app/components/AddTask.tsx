"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/tasks";

export default function AddTask() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // รีโหลด Task List
      setName(""); // เคลียร์ช่องกรอก
    },
  });

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter task name"
        className="border p-2 flex-1 rounded shadow-sm"
      />
      <button
        onClick={() => {
          if (!name.trim()) return; // ห้ามเพิ่ม Task ว่าง
          mutation.mutate({ name });
        }}
        className="px-4 py-2 bg-green-500 text-white rounded shadow-md"
      >
        Add
      </button>
    </div>
  );
}
