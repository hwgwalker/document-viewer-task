export interface FileType {
  type: string;
  name: string;
  added?: string;
  files?: FileType[];
}
