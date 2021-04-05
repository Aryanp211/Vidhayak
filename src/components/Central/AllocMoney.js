import React, { Component } from "react";
import categories from "../Categories";
import "./CSS/AllocMoney.css"

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${categories}
      Accepted Terms: ${acceptedTerms}`
      
    );

    event.preventDefault();
  }

  return (
     <div className="AllocateClass">
         
    <form className='AllocForm' onSubmit={handleSubmit}>
      <h1>Allocate {email}</h1>
      <h2>To {category}</h2>

      <label>
        Rs:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      {/* <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label> */}

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required>
          <option key=""></option>
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button className="AllocateButton">Allocate</button>
    </form>
    </div>
  );
}