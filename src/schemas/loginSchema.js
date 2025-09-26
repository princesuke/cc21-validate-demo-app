import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("รูปแบบอีเมล์ไม่ถูกต้อง").min(1, "กรุณากรอกอีเมล์"),
  password: z
    .string()
    .min(1, "กรุณากรอกรหัสผ่าน")
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว"),
});
