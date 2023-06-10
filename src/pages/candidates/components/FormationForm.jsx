import React, { useState } from "react";
import styles from "./formationForm.module.css";

export const FormationForm = () => {
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejen acá lo que haran con el formulario...
    console.log(inputState);
  };

  return (
    <form className={styles.FormationForm} onSubmit={handleSubmit}>
      <h3>Add Formation</h3>
      <label htmlFor="title">title</label>
      <input
        onChange={handleChange}
        className={styles.formationForm_input}
        id={"title"}
        type="text"
        placeholder="title"
        name={"title"}
        value={inputState.title}
      />
      <label htmlFor="description">description</label>
      <input
        onChange={handleChange}
        className={styles.formationForm_input}
        id={"description"}
        type="text"
        placeholder="description"
        name={"description"}
        value={inputState.description}
      />
      <label htmlFor="date">date</label>
      <input
        onChange={handleChange}
        className={styles.formationForm_input}
        id={"date"}
        type="date"
        placeholder="date"
        name={"date"}
        value={inputState.date}
      />
      <button className={styles.formationForm_button} type="submit">
        Enviar
      </button>
    </form>
  );
};
