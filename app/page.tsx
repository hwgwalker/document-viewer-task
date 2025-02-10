"use client";
import fileData from "../public/file-data.json";
import { FileExplorer } from "./_components/FileExplorer/FileExplorer";

export default function Home() {
  return (
    <div className="container pt-28">
      <div className="flex flex-col items-center">
        <FileExplorer data={fileData} className="w-full" />
      </div>
    </div>
  );
}
