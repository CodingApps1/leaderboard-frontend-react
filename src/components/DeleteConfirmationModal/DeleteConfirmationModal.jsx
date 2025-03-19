import React from "react";
import "./DeleteConfirmationModal.css";

const DeleteConfirmationModal = ({ user, onConfirm, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>
          ✖️
        </button>
        <h3>Confirm Deletion</h3>
        <p>
          Are you sure you want to delete <strong>{user.name}</strong>?
        </p>
        <div className="modal-actions">
          <button className="confirm-btn" onClick={() => onConfirm(user.id)}>
            Yes, Delete
          </button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
