"use client";
import fileData from "../public/file-data.json";
import { FileExplorer } from "./_components/FileExplorer/FileExplorer";

export default function Home() {
  return (
    <div className="">
      <FileExplorer data={fileData} />
    </div>
  );
}
