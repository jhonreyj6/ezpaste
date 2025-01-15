import { fetchData } from "@/lib/utils";
import { useState } from "react";

const PaginateShowMore = ({ url, state, updateState }) => {
  const showMore = async () => {
    const res = await fetchData(`${url}`, {}, false);

    if (res.current_page) {
      let exist_ids = [];
      state.data.forEach((comment) => {
        if (!exist_ids.includes(comment.id)) {
          exist_ids.push(comment.id);
        }
      });

      let filter_res = res.data.filter(function (new_data) {
        if (!exist_ids.includes(new_data.id)) {
          return new_data;
        }
      });

      updateState((prevState) => ({
        ...prevState,
        data: filter_res.length == 0 ? prevState.data : [...prevState.data.concat(filter_res)],
        next_page_url: res.next_page_url,
        current_page: res.current_page,
      }));
    }
  };

  return (
    <>
      {state.current_page != state.last_page && (
        <a className="cursor-pointer text-blue-500 hover:underline" onClick={showMore}>
          Load more comments
        </a>
      )}
    </>
  );
};

export default PaginateShowMore;
