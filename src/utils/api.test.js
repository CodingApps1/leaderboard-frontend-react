import { getUsers, createUser, updateUser, deleteUser } from "./api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: "John Doe", points: 10 }]),
  })
);

describe("API Functions", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches users correctly", async () => {
    const users = await getUsers();
    expect(users).toEqual([{ id: 1, name: "John Doe", points: 10 }]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("creates a user correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve({ id: 2, name: "Alice" }) })
    );

    const newUser = await createUser({ name: "Alice" });
    expect(newUser).toEqual({ id: 2, name: "Alice" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("updates user points correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve({ id: 1, points: 20 }) })
    );

    const updatedUser = await updateUser(1, { points: 20 });
    expect(updatedUser).toEqual({ id: 1, points: 20 });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("deletes a user correctly", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve({ success: true }) })
    );

    const response = await deleteUser(1);
    expect(response).toEqual({ success: true });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
