import React, { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";

export default function LoginForm1() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);

  const styles = {
    input: "border border-gray-300 rounded-md",
    error: "text-red-500",
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    // set กลับ เข้าไปใน formData
    //email ก็ไป email
    //password ก็ไปที่ password
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    const result = loginSchema.safeParse(formData);
    // console.log(result);
    if (result.success) {
      alert("ส่งข้อมูลเรียบร้อย");
      setErrors({});
    } else {
      //   console.log(result.error);
      const error = result.error;
      const { fieldErrors } = error.flatten();
      setErrors(fieldErrors);

      //   const mapped = Object.entries(fieldErrors).reduce(
      //     (prev, [key, value]) => {
      //       prev[key] = value?.[0];
      //       return prev;
      //     },
      //     {}
      //   );

      //   console.log(mapped);

      //   {email: 'รูปแบบอีเมล์ไม่ถูกต้อง', password: 'กรุณากรอกรหัสผ่าน'}
      //   console.log(mapped);
      //   setErrors(mapped);
    }

    // const { email, password } = formData;

    // // console.log(email.includes("@"));

    // const errors = {};
    // if (!email) {
    //   errors.email = "กรุณากรอกอีเมล์";
    // } else if (!email.includes("@")) {
    //   errors.email = "รูปแบบอีเมล์ไม่ถูกต้อง";
    // }

    // if (!password) {
    //   errors.password = "กรุณากรอกรหัสผ่าน";
    // } else if (password.length < 6) {
    //   errors.password = "รหัสผ่านต้องอย่างน้อย 6 ตัว";
    // }

    // // ให้ดักว่า ต้องมี @  แล้วแสดง error ว่า  รูปแบบอีเมล์ไม่ถูกต้อง
    // // ให้ดักเพิ่มว่า ถ้าน้อยกว่า 6 ตัว  แล้วแสดง error ว่า รหัสผ่านต้องอย่างน้อย 6 ตัว

    // setErrors(errors);

    // if (Object.keys(errors).length === 0) {
    //   alert("ส่งข้อมูลเรียบร้อย!");
    // }

    // ให้ alert ว่า ส่งข้อมูลเรียบร้อย ต้อง เครียที่มันแสดงออกด้วย
  };

  return (
    <div>
      <h1 className="font-bold pb-4">Login Form</h1>

      <div className="text-left">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <br />
            <input
              type="text"
              name="email"
              className={styles.input}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email[0]}</p>}
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              className={styles.input}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password[0]}</p>
            )}
          </div>

          <button className="mt-4" type="submit">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}
