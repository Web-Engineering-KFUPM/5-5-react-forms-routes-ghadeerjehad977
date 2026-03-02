import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const nextErrors = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    {/*Form validations*/}
    if (!email.trim()) nextErrors.email = "Email is required";
      else if (!(email.includes("@") && email.endsWith(".com")))
        nextErrors.email = "Enter a valid email address";
      {errors.email && <p className="error">{errors.email}</p>}

      // Password validation
      if (!password.trim()) nextErrors.password = "Password is required";
      {errors.password && <p className="error">{errors.password}</p>}

      // Gender validation
      if (!gender) nextErrors.gender = "Please select your gender";
      {errors.gender && <p className="error">{errors.gender}</p>}

     alert(`Regiteration submit: ${email}`);
     setErrors(nextErrors);
      if (Object.keys(nextErrors).length > 0) return;
      alert(`User Registered: ${email})`);

      
  };

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
        </div>
        <div className="form-row">
           <label htmlFor="password">Password</label>
        <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        </div>

        <fieldset className="form-row">
          <legend>Gender</legend>
        <label className="radio">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          /> Male
        </label>
        </fieldset>

          <button type="submit" disabled={!email || !password || !gender}>Register</button>
        <button type="submit" className="btn">Register</button>
      </form>

      <div className="card info">
        <h3>Why Register?</h3>
        <ul className="list">
          <li>📘 Access course materials & assignments</li>
          <li>💬 Join the discussion forum</li>
          <li>🎓 Track your progress & get certified</li>
        </ul>
      </div>
    </section>
  );
}
