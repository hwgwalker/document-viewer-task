import { render, screen } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";
import { FileType } from "@/app/_types/FileDataType";

const mockData = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
      },
    ],
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

    it("Should render files and folders correctly", () => {
      render(<FileExplorer data={mockData} />);

      // file
      expect(screen.getByText(/pdf$/i)).toBeInTheDocument();
      expect(screen.getByText(/employee handbook$/i)).toBeInTheDocument();
      expect(screen.getByText("2017-01-06")).toBeInTheDocument();

      // folder
      expect(screen.getByText("📁")).toBeInTheDocument();
      expect(screen.getByText(/expenses$/i)).toBeInTheDocument();
    });
  });
});
