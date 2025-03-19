import { useState, useEffect } from "react";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import SearchBar from "./components/SearchBar/SearchBar";
import UserDetailModal from "./components/UserDetailModal/UserDetailModal";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import { getUsers } from "./utils/api";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    getUsers().then((data) => {
      // Explicitly sort by points descending by default
      const sortedData = [...data].sort((a, b) => b.points - a.points);
      setUsers(sortedData);
      setFilteredUsers(sortedData);
    });
  };

  useEffect(() => {
    setNoMatch(filteredUsers.length === 0);
  }, [filteredUsers]);

  const handleSearch = (query) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredUsers(filtered);
    setNoMatch(filteredUsers.length === 0);
  };

  return (
    <div className="app-container">
      <div className="leaderboard-box">
        <h1>Leaderboard</h1>
        <SearchBar onSearch={handleSearch} />
        <Leaderboard
          users={filteredUsers}
          onUserSelect={setSelectedUser}
          refresh={fetchUsers}
          noMatch={noMatch}
        />
        <button className="add-user-btn" onClick={() => setShowAddUser(true)}>
          + Add User
        </button>
      </div>

      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

      {showAddUser && (
        <AddUserForm
          onClose={() => setShowAddUser(false)}
          refresh={fetchUsers}
        />
      )}
    </div>
  );
}

export default App;
