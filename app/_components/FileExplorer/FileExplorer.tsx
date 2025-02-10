import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef, useMemo, useState } from "react";
import { FileRow } from "../FileRow/FileRow";

type FileExplorerProps = ComponentPropsWithoutRef<"table"> & {
  data?: FileType[];
};

export function FileExplorer({ data }: FileExplorerProps) {
  const [sortBy, setSortBy] = useState<"type" | "name" | "date" | null>(null);

  const sortedItems = useMemo(() => {
    const sorted = [...(data || [])];

    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "type":
        sorted.sort((a, b) => a.type.localeCompare(b.type));
        break;
      case "date":
        sorted.sort((a, b) => {
          if (!a.added && !b.added) return 0;
          else if (!a.added) return 1;
          else if (!b.added) return -1;

          return new Date(b.added).getTime() - new Date(a.added).getTime();
        });
    }

    return sorted;
  }, [sortBy]);

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => setSortBy("type")}>File Type</th>
          <th onClick={() => setSortBy("name")}>Name</th>
          <th onClick={() => setSortBy("date")}>Date Added</th>
        </tr>
      </thead>
      <tbody>
        {sortedItems &&
          sortedItems.map((file, index) =>
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
