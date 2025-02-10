import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef } from "react";

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
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.added}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
