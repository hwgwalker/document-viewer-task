import { render, screen } from "@testing-library/react";
import { FolderRow } from "./FolderRow";
import userEvent from "@testing-library/user-event";

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
    render(
      <table>
        <tbody>
          <FolderRow folder={mockData} />
        </tbody>
      </table>
    );

    // folder
    expect(screen.getByText("📁")).toBeInTheDocument();
    expect(screen.getByText(/expenses$/i)).toBeInTheDocument();

    // file
    expect(screen.queryByText("doc")).not.toBeInTheDocument();
    expect(screen.queryByText("Expenses claim form")).not.toBeInTheDocument();
    expect(screen.queryByText("2017-05-02")).not.toBeInTheDocument();
  });

  it("Should reveal folder contents when clicked", async () => {
    render(
      <table>
        <tbody>
          <FolderRow folder={mockData} />
        </tbody>
      </table>
    );

    await userEvent.click(screen.getByText(/expenses$/i));

    expect(screen.getByText("📂")).toBeInTheDocument();

    expect(screen.getByText(/doc$/i)).toBeInTheDocument();
    expect(screen.getByText(/Expenses claim form$/i)).toBeInTheDocument();
    expect(screen.getByText("2017-05-02")).toBeInTheDocument();
  });
});
