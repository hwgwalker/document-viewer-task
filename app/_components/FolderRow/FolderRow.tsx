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
      <tr onClick={handleClick}>
        <td>📁</td>
        <td>{folder.name}</td>
      </tr>

      {isOpen && folder.files ? folder.files.map((file, index) => <FileRow file={file} key={index} />) : null}
    </>
  );
}
