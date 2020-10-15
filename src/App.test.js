import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Check text is rendered correctly", () => {
    render(<App />);

    expect(screen.queryByText(/A simple force graph/)).toBeTruthy();
  });
});
