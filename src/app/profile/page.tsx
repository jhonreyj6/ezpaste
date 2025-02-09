"use client";

import Post from "@/components/post";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { fetchData } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useSearchParams, redirect } from "next/navigation";
import Ads from "@/components/ads";
import PaginateShowMore from "@/components/paginate-show-more";

const Profile = () => {
  const params = useSearchParams();
  const [user, setUser] = useState({});
  const [pageState, setPageState] = useState(false);
  const [paste, setPaste] = useState({ data: [], current_page: 1 });

  const getUser = async () => {
    const res = await fetchData(`api/user?id=${params.get("id")}`, {});

    if (res.id) {
      setUser(res);
    }

    setPageState(true);
  };

  const getPaste = async () => {
    const res = await fetchData(`api/paste/user?id=${params.get("id")}&page=${paste.current_page}`, {});

    setPaste(res);
  };

  useEffect(() => {
    getPaste();
    getUser();
  }, [params.get("id")]);

  return (
    <>
      {pageState && (
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <div className="flex flex-row gap-8">
            <div className="w-full">
              <div className="border rounded-lg p-4 mb-4">
                <div className="flex flex-row justify-between gap-2 items-center mb-4">
                  <h1 className="text-4xl font-medium text-blue-500">{user.name}</h1>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <span className="material-icons">more_horiz</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem className="cursor-pointer" onClick={() => redirect("/profile/edit")}>
                          Edit
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <h6 className="text-gray-400">Member since: 02/09/2024</h6>
                <h6 className="text-gray-400">Last Login: Dec. 2, 2024 4pm</h6>
              </div>

              <div className="mb-4">
                {paste.data.map((paste) => {
                  return <Post data={paste} action={setPaste} key={paste.id} />;
                })}
              </div>

              <PaginateShowMore
                url={paste.next_page_url + `&id=${params.get("id")}`}
                state={paste}
                updateState={setPaste}
              />
            </div>
            <div className="w-[400px]">
              <Ads />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
