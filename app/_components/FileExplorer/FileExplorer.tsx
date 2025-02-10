import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef } from "react";
import { FileRow } from "../FileRow/FileRow";

type FileExplorerProps = ComponentPropsWithoutRef<"table"> & {
  data?: FileType[];
};

export function FileExplorer({ data }: FileExplorerProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>File Type</th>
          <th>Name</th>
          <th>Date Added</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((file, index) =>
            file.type === "folder" ? (
              <tr key={index}>
                <td>📁</td>
                <td>{file.name}</td>
              </tr>
            ) : (
              <FileRow file={file} key={index} />
            )
          )}
      </tbody>
    </table>
  );
}
