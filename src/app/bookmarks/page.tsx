"use client";

import Paginate from "@/components/paginate";
import Post from "@/components/post";
import { fetchData } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Notifications from "@/components/notification";

const Bookmark = () => {
  const [pageState, setPageState] = useState(false);
  const params = useSearchParams();
  const [bookmarks, setBookmarks] = useState({
    data: [],
    current_page: params.get("page") ? Number(params.get("page")) : 1,
  });

  const getBookmarks = async () => {
    const res = await fetchData(`api/paste/bookmark?page=${bookmarks.current_page}`, {});

    setBookmarks(res);
    setPageState(true);
  };

  useEffect(() => {
    getBookmarks();
  }, [bookmarks.current_page]);

  return (
    <>
      {pageState && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
          <div className="flex flex-row gap-8">
            <div className="w-full">
              <div className="mb-4">
                {bookmarks.data.map((bookmark) => {
                  return <Post data={bookmark} key={bookmark.id} action_icons action={setBookmarks} />;
                })}

                {bookmarks.data.length == 0 && (
                  <>
                    <Notifications
                      title={"No bookmarks yet"}
                      message={"Please bookmark some paste."}
                      icon={"report"}
                      type="destructive"
                    />
                  </>
                )}
              </div>

              <Paginate data={bookmarks} />
            </div>

            <div className="w-[400px]">s</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookmark;
