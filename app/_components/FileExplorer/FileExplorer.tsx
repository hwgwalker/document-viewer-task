import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef, useMemo, useState } from "react";
import { FileRow } from "../FileRow/FileRow";

type FileExplorerProps = ComponentPropsWithoutRef<"table"> & {
  data?: FileType[];
};

export function FileExplorer({ data }: FileExplorerProps) {
  //   const [sortedItems, setSortedItems] = useState(data);
  const [sortBy, setSortBy] = useState<"type" | "name" | "date" | null>(null);

  const sortedItems = useMemo(() => {
    const sorted = [...(data || [])];

    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return sorted;
  }, [sortBy]);

  return (
    <table>
      <thead>
        <tr>
          <th>File Type</th>
          <th onClick={() => setSortBy("name")}>Name</th>
          <th>Date Added</th>
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
