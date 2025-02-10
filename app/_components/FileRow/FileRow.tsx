import { FileType } from "@/app/_types/FileDataType";

type FileRowProps = {
  file: FileType;
};

export function FileRow({ file }: FileRowProps) {
  return (
    <tr>
      <td>{file.type}</td>
      <td>{file.name}</td>
      <td>{file.added}</td>
    </tr>
  );
}
