import { render, screen } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";

const mockData = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  },
];

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

    it("Should render td elements with correct content", () => {
      render(<FileExplorer data={mockData} />);

      const tdElements = screen.getAllByRole("cell");

      expect(tdElements[0]).toHaveTextContent(/pdf$/i);
      expect(tdElements[1]).toHaveTextContent(/employee handbook$/i);
      expect(tdElements[2]).toHaveTextContent("2017-01-06");
    });
  });
});
