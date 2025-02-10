import { FileType } from "@/app/_types/FileDataType";
import { useState } from "react";
import { FileRow } from "../FileRow/FileRow";

type FolderRowProps = {
  folder: FileType;
};

export function FolderRow({ folder }: FolderRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <tr className="cursor-pointer group" onClick={handleClick}>
        <td>{isOpen ? "📂" : "📁"}</td>
        <td className="group-hover:underline">{folder.name}</td>
        <td />
      </tr>

      {isOpen && folder.files ? folder.files.map((file, index) => <FileRow className="[&_td]:pl-4 text-black/70 [&_td]:bg-slate-100 " file={file} key={index} />) : null}
    </>
  );
}
