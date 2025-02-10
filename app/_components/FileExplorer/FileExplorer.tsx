import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef, useMemo, useState } from "react";
import { FileRow } from "../FileRow/FileRow";
import { FolderRow } from "../FolderRow/FolderRow";

type FileExplorerProps = ComponentPropsWithoutRef<"table"> & {
  data?: FileType[];
};

export function FileExplorer({ data, className }: FileExplorerProps) {
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
    <table className={`table-fixed [&_td]:py-2 [&_td]:px-4 [&_tr]:border-b   ${className}`}>
      <thead className="bg-slate-200">
        <tr className="text-left [&_th]:cursor-pointer [&_th]:py-2 [&_th]:px-4 select-none">
          <th onClick={() => setSortBy("type")} className="w-1/4">
            File Type
          </th>
          <th onClick={() => setSortBy("name")}>Name</th>
          <th onClick={() => setSortBy("date")} className="w-1/6">
            Date Added
          </th>
        </tr>
      </thead>
      <tbody className="bg-slate-50">
        {sortedItems && sortedItems.map((item, index) => (item.type === "folder" ? <FolderRow folder={item} key={index} /> : <FileRow file={item} key={index} />))}
      </tbody>
    </table>
  );
}
