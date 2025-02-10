import { render, screen } from "@testing-library/react";
import { FileRow } from "./FileRow";

const mockData = {
  type: "pdf",
  name: "Employee Handbook",
  added: "2017-01-06",
};

describe("FileRow", () => {
  it("Should render the file data in cells", () => {
    render(<FileRow file={mockData} />);

    // check if file type is rendered
    expect(screen.getByText(/pdf$/i)).toBeInTheDocument();

    // check if file name is rendered
    expect(screen.getByText(/employee handbook$/i)).toBeInTheDocument();

    // check if date is rendered
    expect(screen.getByText("2017-01-06")).toBeInTheDocument();
  });
});
