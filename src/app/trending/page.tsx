"use client";

import Paginate from "@/components/paginate";
import Post from "@/components/post";
import { fetchData } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Trending = () => {
  const params = useSearchParams();
  const [paste, setPaste] = useState({ data: [], current_page: params.get("page") ? Number(params.get("page")) : 1 });
  const [pageState, setPageState] = useState(false);

  const getPaste = async () => {
    const res = await fetchData(`api/paste/trending?page=${paste.current_page}`, {});

    setPaste(res);
    setPageState(true);
  };

  useEffect(() => {
    getPaste();
  }, [paste.current_page]);

  return (
    <>
      {pageState && (
        <div className="max-w-7xl mx-auto px-8 pt-4">
          <div className="flex flex-row gap-8 mb-4">
            <div className="w-full">
              {paste.data.map((post, index) => {
                return <Post data={post} key={index} action={setPaste} />;
              })}
            </div>
            <div className="w-[500px]">s</div>
          </div>

          <Paginate data={paste} />
        </div>
      )}
    </>
  );
};

export default Trending;
