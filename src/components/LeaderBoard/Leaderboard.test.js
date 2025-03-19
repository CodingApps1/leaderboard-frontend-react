import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Leaderboard from "./Leaderboard";

const mockUsers = [
  { id: 1, name: "Charlie", points: 5 },
  { id: 2, name: "Alice", points: 20 },
  { id: 3, name: "Bob", points: 10 },
];

test("sorts users by points descending by default", () => {
  render(
    <Leaderboard users={mockUsers} onUserSelect={() => {}} refresh={() => {}} />
  );
  const rows = screen.getAllByRole("row");

  expect(rows[1]).toHaveTextContent("Alice");
  expect(rows[2]).toHaveTextContent("Bob");
  expect(rows[3]).toHaveTextContent("Charlie");
});
