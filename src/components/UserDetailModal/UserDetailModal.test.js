import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserDetailModal from "./UserDetailModal";

test("renders user details correctly", () => {
  const mockUser = {
    name: "Alice",
    age: 25,
    points: 10,
    address: "123 Street",
  };

  render(<UserDetailModal user={mockUser} onClose={() => {}} />);

  expect(screen.getByText("Alice")).toBeInTheDocument();
  expect(screen.getByText("25")).toBeInTheDocument();
  expect(screen.getByText("123 Street")).toBeInTheDocument();
});
