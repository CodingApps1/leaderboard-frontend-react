import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

test("displays delete confirmation modal correctly", () => {
  const mockUser = { id: 1, name: "Alice" };
  const mockConfirm = jest.fn();
  const mockCancel = jest.fn();

  render(
    <DeleteConfirmationModal
      user={mockUser}
      onConfirm={mockConfirm}
      onClose={mockCancel}
    />
  );

  // Use a Regular Expression to match the broken-up text
  expect(
    screen.getByText(/Are you sure you want to delete/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Alice/i)).toBeInTheDocument();
  expect(screen.getByText(/\?/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Yes, Delete"));
  expect(mockConfirm).toHaveBeenCalled();

  fireEvent.click(screen.getByText("Cancel"));
  expect(mockCancel).toHaveBeenCalled();
});
