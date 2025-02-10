import { render, screen } from "@testing-library/react";
import { FileExplorer } from "./FileExplorer";
import { FileType } from "@/app/_types/FileDataType";
import userEvent from "@testing-library/user-event";

const mockData = [
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
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
      expect(tdElements[1]).toHaveTextContent(/public Holiday policy$/i);
      expect(tdElements[2]).toHaveTextContent("2016-12-06");
    });

    it("Should render files and folders correctly", () => {
      render(<FileExplorer data={mockData} />);

      // file
      expect(screen.getByText(/employee handbook$/i)).toBeInTheDocument();
      expect(screen.getByText("2017-01-06")).toBeInTheDocument();

      // folder
      expect(screen.getByText("📁")).toBeInTheDocument();
      expect(screen.getByText(/expenses$/i)).toBeInTheDocument();

      // file
      expect(screen.getByText(/public holiday policy$/i)).toBeInTheDocument();
      expect(screen.getByText("2016-12-06")).toBeInTheDocument();
    });
  });

  /**
   * Sorting
   */
  describe("Sorting", () => {
    it("Should sort by name when 'name' heading is clicked", async () => {
      render(<FileExplorer data={mockData} />);

      const nameHeading = screen.getByText(/name$/i);

      await userEvent.click(nameHeading);

      const tdElements = screen.getAllByRole("cell");

      expect(tdElements[1]).toHaveTextContent(/employee handbook$/i);
    });

    it("should sort by type when 'file type' heading is clicked", async () => {
      render(<FileExplorer data={mockData} />);

      const fileHeading = screen.getByText(/file type$/i);

      await userEvent.click(fileHeading);

      const tdElements = screen.getAllByRole("cell");

      expect(tdElements[0]).toHaveTextContent("📁");
    });

    it("should sort by date when date heading is clicked", async () => {
      render(<FileExplorer data={mockData} />);

      const dateHeading = screen.getByText(/date added$/i);

      await userEvent.click(dateHeading);

      const tdElements = screen.getAllByRole("cell");

      expect(tdElements[2]).toHaveTextContent("2017-01-06");
    });
  });
});
