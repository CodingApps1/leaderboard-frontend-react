import React from "react";
import "./UserDetailModal.css";

const UserDetailModal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          ✖️
        </button>
        <h3>User Details</h3>
        <div className="modal-content">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>Points:</strong> {user.points}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
