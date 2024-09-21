import { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ name: "", email: "" }]);

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  const handleAddFields = () => {
    setFields([...fields, { name: "", email: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", fields);
    // Handle your submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={field.email}
            onChange={(e) => handleChange(index, e)}
            required
          />
          <button
            type="button"
            onClick={() => handleRemoveFields(index)}
            style={{ marginLeft: "10px", background: "red", color: "white" }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddFields}
        style={{ marginBottom: "20px" }}
      >
        Add More
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
