import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "กรุณากรอกอีเมล์").email("รูปแบบอีเมล์ไม่ถูกต้อง"),
  password: z
    .string()
    .min(1, "กรุณากรอกรหัสผ่าน")
    .min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว"),
  day: z.coerce
    .number()
    .min(1, "วันต้องอยู่ระหว่าง 1 ถึง 31")
    .max(31, "วันต้องอยู่ระหว่าง 1 ถึง 31"),
  age: z.coerce.number().min(13, "ต้องมีอายุเกิน 13"),
});
