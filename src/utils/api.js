const API_URL = "http://127.0.0.1:5000/api";

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return await res.json();
};

export const createUser = async (userData) => {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return await res.json();
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
