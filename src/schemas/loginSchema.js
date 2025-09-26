import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("รูปแบบอีเมล์ไม่ถูกต้อง"),
  password: z.string().min(1, "กรุณากรอกรหัสผ่าน"),
});
