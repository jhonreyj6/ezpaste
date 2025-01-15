"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import { capitalizeFirstLetter } from "@/lib/function";
import { fetchData } from "@/lib/utils";
import useUserStore from "@/stores/userStore";
import { usePathname } from "next/navigation";

const Post = ({ data, action_icons = false, action }) => {
  const auth = useUserStore();
  const pathname = usePathname();

  const deleteBookmark = async () => {
    const res = await fetchData(`api/paste/bookmark`, {
      method: "POST",
      body: JSON.stringify({
        paste_id: data.id,
      }),
    });

    if (res == "deleted")
      action((prevState) => ({
        ...prevState,
        data: prevState.data.filter((paste) => {
          if (paste.id != data.id) {
            return paste;
          }
        }),
      }));
  };

  return (
    <>
      <div className="border rounded-lg mb-2 p-4">
        <div className="flex flex-row justify-between items-center gap-2 pb-2 border-b mb-2">
          <h1 className="text-xl font-medium text-blue-500">
            <Link href={`/paste/post?id=${data.id}`} className="hover:underline">
              {capitalizeFirstLetter(data.title)}
            </Link>
          </h1>

          {auth.user.id == data.user_id && pathname == "/dashboard" && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="material-icons !text-lg text-gray-400">more_horiz</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {action_icons && (
            <div className="flex flex-row gap-2">
              <span className={"text-blue-500 material-icons !text-2xl cursor-pointer"} onClick={deleteBookmark}>
                bookmark
              </span>
              <span className="material-icons !text-2xl text-red-500">outlined_flag</span>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-2 justify-between">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-400">{data.likes.length}</span>
              <span className="material-icons !text-lg text-gray-400">thumb_up</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-400">{data.un_likes.length}</span>
              <span className="material-icons !text-lg text-gray-400">thumb_down</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-400">{data.comment_counts}</span>
              <span className="material-icons !text-lg text-gray-400">mark_unread_chat_alt</span>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-400">{data.comment_counts}</span>
              <span className="material-icons !text-lg text-gray-400">visibility</span>
            </div>
          </div>

          <div className="text-gray-400">{data.created_at}</div>
        </div>
      </div>
    </>
  );
};

export default Post;
