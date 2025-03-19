import { useState } from "react";
import { createUser } from "../../utils/api";
import "./AddUserForm.css";

const AddUserForm = ({ onClose, refresh }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      age: parseInt(formData.age, 10),
    };

    createUser(newUser).then(() => {
      refresh(); // Refresh leaderboard after adding new user
      onClose(); // Close modal
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          ✖️
        </button>
        <h3>Add New User</h3>
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            min="1"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
