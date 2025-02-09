import Client from "./client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paste and Share",
  description: "Generated by create next app",
};

const Post = () => {
  return (
    <>
      <div className="mx-auto px-8 max-w-7xl pt-8">
        <Client />
      </div>
    </>
  );
};

export default Post;
