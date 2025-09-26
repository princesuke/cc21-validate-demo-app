import React, { useState } from "react";
import { loginSchema } from "../schemas/loginSchema";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    day: "",
    age: "",
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
    //เราจะเอา formData ไปเช็ค กับschema ว่า ถูกหมดไหม หรือ มีอะไร ผิดอ่ะเปล่า
    const result = loginSchema.safeParse(formData);
    if (result.success) {
      alert("ส่งข้อมูลเรียบร้อยแล้ว");
      // เครีย key errors เพื่อซ่อนข้อความแสดง errors ของแต่ละฟิลด์
      setErrors({});
    } else {
      //เอาฟิล ที่ errors ว่าตัวไหนบ้าง เซ็ตกลับไปที่ setErrors
      //เพื่อแสดงข้อความ errors ตามแต่ละจุด
      //   console.log(result.error);
      const { fieldErrors } = result.error.flatten();
      console.log(fieldErrors);
      setErrors(fieldErrors);
    }
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
              value={formData.email}
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
              value={formData.value}
              className={styles.input}
              onChange={handleChange}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password[0]}</p>
            )}
          </div>
          <div>
            <label>Day:</label>
            <br />
            <input
              type="number"
              name="day"
              value={formData.day}
              className={styles.input}
              onChange={handleChange}
            />
            {errors.day && <p className={styles.error}>{errors.day[0]}</p>}
          </div>
          <div>
            <label>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              value={formData.age}
              className={styles.input}
              onChange={handleChange}
            />
            {errors.age && <p className={styles.error}>{errors.age[0]}</p>}
          </div>

          <button className="mt-4" type="submit">
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}
