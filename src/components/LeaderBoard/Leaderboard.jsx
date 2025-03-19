import React, { useState } from "react";
import { deleteUser, updateUser } from "../../utils/api";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import "./Leaderboard.css";

const Leaderboard = ({ users, onUserSelect, refresh, noMatch }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "points",
    direction: "desc",
  });
  const [userToDelete, setUserToDelete] = useState(null);

  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig.key === "name") {
      return sortConfig.direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    return sortConfig.direction === "asc"
      ? a.points - b.points
      : b.points - a.points;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const updatePoints = (user, change) => {
    updateUser(user.id, { points: user.points + change }).then(() => {
      refresh();
      setSortConfig({ key: "points", direction: "desc" });
    });
  };

  const confirmDelete = (id) => {
    deleteUser(id).then(() => {
      refresh();
      setSortConfig({ key: "points", direction: "desc" });
      setUserToDelete(null);
    });
  };

  return (
    <div className="leaderboard-container">
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Remove</th>
              <th
                className="sortable-header"
                onClick={() => handleSort("name")}
              >
                Name{" "}
                {sortConfig.key === "name"
                  ? sortConfig.direction === "asc"
                    ? "🔼"
                    : "🔽"
                  : ""}
              </th>
              <th>Increase Score</th>
              <th>Decrease Score</th>
              <th
                className="sortable-header"
                onClick={() => handleSort("points")}
              >
                Points{" "}
                {sortConfig.key === "points"
                  ? sortConfig.direction === "asc"
                    ? "🔼"
                    : "🔽"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => setUserToDelete(user)}
                  >
                    ❌
                  </button>
                </td>
                <td>
                  <span
                    className="name-link"
                    onClick={() => onUserSelect(user)}
                  >
                    {user.name}
                  </span>
                </td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => updatePoints(user, 1)}
                  >
                    ➕
                  </button>
                </td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => updatePoints(user, -1)}
                  >
                    ➖
                  </button>
                </td>
                <td>{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {sortedUsers.length === 0 && (
          <div className="no-match-message">No matching users found.</div>
        )}
      </div>
      {userToDelete && (
        <DeleteConfirmationModal
          user={userToDelete}
          onClose={() => setUserToDelete(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
};

export default Leaderboard;
