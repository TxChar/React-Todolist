import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getTasks = async () => {
  console.log("Fetching tasks from:", API_URL); // ตรวจสอบ URL
  const response = await axios.get(`${API_URL}/tasks/`);
  console.log("Tasks received:", response.data); // ตรวจสอบข้อมูลที่ได้รับ
  return response.data;
};


// เพิ่ม Task
export const createTask = async (task: { name: string }) => {
  const response = await axios.post(`${API_URL}/tasks/create`, task);
  return response.data;
};

// อัปเดตสถานะ Task
export const updateTaskStatus = async (taskId: string, status: string) => {
  console.log("Updating Task ID:", taskId, "New Status:", status); //Debug
  const response = await axios.patch(`${API_URL}/tasks/status/${taskId}`, {
    status, //ส่งค่า status ไปด้วย
  });
  return response.data;
};

// // ลบ Task
export const deleteTask = async (taskId: string) => {
  console.log("Deleting Task ID:", taskId); //Debug ดูว่าค่า taskId ถูกต้องไหม
  const response = await axios.delete(`${API_URL}/tasks/delete/${taskId}`);
  return response.data;
};

