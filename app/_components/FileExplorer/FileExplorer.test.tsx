import { render, screen } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";

describe("FileExplorer", () => {
  /**
   *  Rendering
   */
  describe("Rendering", () => {
    it("Should render on the page", () => {
      render(<FileExplorer />);

      const table = screen.getByRole("table");

      expect(table).toBeInTheDocument();
    });
  });
});
