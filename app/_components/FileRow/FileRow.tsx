import { FileType } from "@/app/_types/FileDataType";
import { ComponentPropsWithoutRef } from "react";

type FileRowProps = ComponentPropsWithoutRef<"tr"> & {
  file: FileType;
};

export function FileRow({ file, className }: FileRowProps) {
  return (
    <tr className={`${className}`}>
      <td>{file.type}</td>
      <td>{file.name}</td>
      <td >{file.added}</td>
    </tr>
  );
}
