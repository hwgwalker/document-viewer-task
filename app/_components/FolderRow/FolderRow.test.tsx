import { render, screen } from "@testing-library/react";
import { FolderRow } from "./FolderRow";

const mockData = {
  type: "folder",
  name: "Expenses",
  files: [
    {
      type: "doc",
      name: "Expenses claim form",
      added: "2017-05-02",
    },
  ],
};

describe("FolderRow", () => {
  it("Should show the folder name but not the folder content", () => {
    render(<FolderRow folder={mockData} />);

    // folder
    expect(screen.getByText("📁")).toBeInTheDocument();
    expect(screen.getByText(/expenses$/i)).toBeInTheDocument();

    // file
    expect(screen.getByText(/doc$/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Expenses claim form$/i)).not.toBeInTheDocument();
    expect(screen.getByText("2017-05-02")).not.toBeInTheDocument();
  });
});
