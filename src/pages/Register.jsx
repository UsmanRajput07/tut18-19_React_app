import React, { useState } from "react";

export default function Register() {
  // hooks variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //    function defination
  const Registerdata = () => {
    let payload = {
      username: username,
      email: email,
      password: password,
    };
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          alert("register succesfully");
        }
      })
      .catch((err) => console.log(err));
  };

  // return area
  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        id="username"
      ></input>
      <input
        type="eamil"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        id="email"
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        id="password"
      ></input>
      <button type="button" id="Button" onClick={Registerdata}>
        Submit
      </button>
    </div>
  );
}
