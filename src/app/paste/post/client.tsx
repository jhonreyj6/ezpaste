"use client";

import { fetchData } from "@/lib/utils";
import useUserStore from "@/stores/userStore";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Paginate from "@/components/paginate";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PaginateShowMore from "@/components/paginate-show-more";
import Link from "next/link";
import Ads from "@/components/ads";

const ClientContent = () => {
  const params = useSearchParams();
  const [paste, setPaste] = useState({});
  const [pageState, setPageState] = useState(false);
  const [isCommentShown, setIsCommentShown] = useState(false);
  const [form, setForm] = useState({
    paste_id: params.get("id"),
    message: "",
  });
  const [comments, setComments] = useState({ data: [] });
  const [password, setPassword] = useState("");
  const [isOpenReportModal, setIsOpenReportModal] = useState(false);
  const [formReport, setFormReport] = useState({
    email: "",
    message: "",
  });

  const input_comment = useRef<HTMLTextAreaElement>(null);

  const getPaste = async () => {
    const res = await fetchData(`api/paste/${params.get("id")}?password=${password}`, {});
    setPaste(res);

    setPageState(true);
  };

  const createComment = async (e) => {
    e.target.disabled = true;

    const res = await fetchData(`api/paste/comment`, {
      body: JSON.stringify(form),
      method: "POST",
    });

    setComments((prevState) => ({
      ...prevState,
      data: [res, ...prevState.data],
    }));

    e.target.disabled = false;
    input_comment.current.value = null;
  };

  const createLike = async () => {
    const res = await fetchData(`api/paste/like`, {
      method: "POST",
      body: JSON.stringify({
        paste_id: params.get("id"),
      }),
    });

    if (res == "deleted")
      setPaste((prevState) => ({
        ...prevState,
        likes_count: prevState.likes_count - 1,
        auth_likes: false,
      }));
    else
      setPaste((prevState) => ({
        ...prevState,
        likes_count: prevState.likes_count + 1,
        auth_likes: true,
        unLikes_count: prevState.auth_unlikes ? prevState.unLikes_count - 1 : prevState.unLikes_count,
        auth_unlikes: false,
      }));
  };

  const createUnLike = async () => {
    const res = await fetchData(`api/paste/unlike`, {
      method: "POST",
      body: JSON.stringify({
        paste_id: params.get("id"),
      }),
    });

    if (res == "deleted")
      setPaste((prevState) => ({
        ...prevState,
        auth_unlikes: false,
        unLikes_count: prevState.unLikes_count - 1,
      }));
    else
      setPaste((prevState) => ({
        ...prevState,
        auth_unlikes: true,
        unLikes_count: prevState.unLikes_count + 1,
        auth_likes: false,
        likes_count: prevState.auth_likes ? prevState.likes_count - 1 : prevState.likes_count,
      }));
  };

  const createBookmark = async () => {
    const res = await fetchData(`api/paste/bookmark`, {
      method: "POST",
      body: JSON.stringify({
        paste_id: params.get("id"),
      }),
    });

    if (res == "deleted")
      setPaste((prevState) => ({
        ...prevState,
        auth_bookmarks: false,
      }));
    else
      setPaste((prevState) => ({
        ...prevState,
        auth_bookmarks: true,
      }));
  };

  const showComments = async () => {
    const res = await fetchData(`api/paste/comment?paste_id=${params.get("id")}`, {});

    setComments(res);
    setIsCommentShown(true);
  };

  const createCommentLikes = async (comment) => {
    const res = await fetchData(`api/paste/comment/like`, {
      method: "POST",
      body: JSON.stringify({ id: comment.id }),
    });

    if (res) {
      const new_data = comments.data.map((prev) => {
        if (prev.id == comment.id && res == "success") {
          prev.likes_by_auth = 1;
          prev.likes_count = prev.likes_count + 1;
        }

        if (prev.id == comment.id && res == "deleted") {
          prev.likes_by_auth = 0;
          prev.likes_count = prev.likes_count - 1;
        }

        return prev;
      });

      setComments((prevState) => ({
        ...prevState,
        data: new_data,
      }));
    }
  };

  const createCommentUnLikes = async (comment) => {
    const res = await fetchData(`api/paste/comment/unlike`, {
      method: "POST",
      body: JSON.stringify({ id: comment.id }),
    });

    if (res) {
      const new_data = comments.data.map((prev) => {
        if (prev.id == comment.id && res == "success") {
          prev.unLikes_by_auth = 1;
          prev.unLikes_count = prev.unLikes_count + 1;
        }

        if (prev.id == comment.id && res == "deleted") {
          prev.unLikes_by_auth = 0;
          prev.unLikes_count = prev.unLikes_count - 1;
        }

        return prev;
      });

      setComments((prevState) => ({
        ...prevState,
        data: new_data,
      }));
    }
  };

  const sendReport = async () => {
    const res = await fetchData(`api/report/`, {
      method: "POST",
      body: JSON.stringify({ paste_id: Number(params.get("id")) }),
    });
  };

  useEffect(() => {
    getPaste();
  }, []);

  // useEffect(() => {
  //   console.log(comments);
  // }, [comments]);

  return (
    <>
      {pageState && (
        <>
          {paste.id && (
            <>
              <div className="flex flex-row gap-8 mb-16">
                <div className="w-full">
                  <div className="border rounded-lg px-6 py-4 mb-4">
                    <div className="flex flex-row justify-between gap-4 pb-2 border-b mb-2 items-center">
                      <h1 className="text-3xl text-blue-500">{paste.title}</h1>

                      <div className="flex flex-row gap-2">
                        <span
                          className={
                            (paste.auth_bookmarks ? "text-blue-500" : "text-gray-400") +
                            " material-icons !text-2xl cursor-pointer"
                          }
                          onClick={createBookmark}
                        >
                          {paste.auth_bookmarks ? "bookmark" : "bookmark_border"}
                        </span>

                        <Dialog>
                          <DialogTrigger>
                            <span className="material-icons !text-2xl text-red-500 cursor-pointer">outlined_flag</span>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-xl">
                            <DialogHeader>
                              <DialogTitle>Report this paste</DialogTitle>
                              <DialogDescription></DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-2">
                              <Input placeholder="Enter your email address" type="email" className="mb-2" />
                              <Textarea rows={6} placeholder="Enter your message" className="" />
                            </div>
                            <DialogFooter className="sm:justify-end">
                              <Button type="button" variant="default" onClick={sendReport}>
                                Submit
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-gray-400">{paste.likes_count}</span>
                          <span
                            className={
                              (paste.auth_likes ? "text-blue-500" : "text-gray-400") +
                              " material-icons !text-base cursor-pointer"
                            }
                            onClick={createLike}
                          >
                            thumb_up
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-gray-400">{paste.unLikes_count}</span>
                          <span
                            className={
                              (paste.auth_unlikes ? "text-blue-500" : "text-gray-400") +
                              " material-icons !text-base cursor-pointer"
                            }
                            onClick={createUnLike}
                          >
                            thumb_down
                          </span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-gray-400">{paste.comment_counts}</span>
                          <span className="material-icons !text-base text-gray-400">mark_unread_chat_alt</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                          <span className="text-gray-400">
                            {paste.paste_stats?.clicks ? paste.paste_stats?.clicks : 0}
                          </span>
                          <span className="material-icons !text-base text-gray-400">visibility</span>
                        </div>
                      </div>
                    </div>

                    <div className="whitespace-pre-wrap">{paste.content}</div>
                  </div>

                  <div className="mb-4">
                    {comments.data.length > 0 && (
                      <div className="p-4 border rounded-lg">
                        <h1 className="text-2xl mb-4 pb-2 border-b">Comment Section:</h1>
                        {comments.data.map((comment) => {
                          return (
                            <div className="border p-4 rounded-lg mb-2" key={comment.id}>
                              <div className="flex gap-2 items-center justify-between">
                                <h1 className="text-lg text-blue-500 hover:underline cursor-pointer">
                                  <Link href={`/profile?id=${comment.user.id}`}>{comment.user?.name}</Link>
                                </h1>
                                <div className="text-xs text-gray-400">{comment.created_at}</div>
                              </div>
                              <div className="mb-2">{comment.message}</div>
                              <div className="flex gap-4">
                                <div className="flex flex-row gap-2 items-center">
                                  <span>{comment.likes_count}</span>
                                  <span
                                    className={
                                      "material-icons !text-base cursor-pointer " +
                                      (comment.likes_by_auth ? "text-blue-500" : "text-gray-400")
                                    }
                                    onClick={() => {
                                      createCommentLikes(comment);
                                    }}
                                  >
                                    thumb_up
                                  </span>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                  <span>{comment.unLikes_count}</span>
                                  <span
                                    className={
                                      "material-icons !text-base cursor-pointer " +
                                      (comment.unLikes_by_auth ? "text-blue-500" : "text-gray-400")
                                    }
                                    onClick={(e) => {
                                      createCommentUnLikes(comment);
                                    }}
                                  >
                                    thumb_down
                                  </span>
                                </div>
                                {/* <div className="flex flex-row gap-2 items-center">
                                  <span>2</span>
                                  <span className="material-icons !text-base text-gray-400">mark_unread_chat_alt</span>
                                </div> */}
                              </div>
                            </div>
                          );
                        })}

                        <div className="mt-4">
                          <PaginateShowMore
                            url={comments.next_page_url + `&paste_id=` + params.get("id")}
                            state={comments}
                            updateState={setComments}
                          />
                        </div>
                      </div>
                    )}

                    {isCommentShown && comments.data.length == 0 && (
                      <div className="p-4 border rounded-lg"> No comments yet...</div>
                    )}

                    {isCommentShown == false && (
                      <Button
                        className="w-full"
                        onClick={() => {
                          showComments();
                        }}
                      >
                        Show comments
                      </Button>
                    )}
                  </div>

                  {isCommentShown && (
                    <div className="grid w-full gap-2 border rounded-lg p-4">
                      <h1 className="text-2xl border-b pb-2 mb-2">Post a comment</h1>
                      <Textarea
                        placeholder="Type your comment..."
                        ref={input_comment}
                        rows={6}
                        className="mb-4"
                        onKeyUp={(e) => {
                          setForm((prevState) => ({
                            ...prevState,
                            message: e.target.value,
                          }));
                        }}
                      />
                      <Button
                        className="w-40"
                        onClick={(e) => {
                          createComment(e);
                        }}
                      >
                        Create comment
                      </Button>
                    </div>
                  )}
                </div>
                <div className="w-[400px]">
                  <Ads />
                </div>
              </div>
            </>
          )}

          {paste.id == null && (
            <>
              <Dialog open>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Password Required!</DialogTitle>
                    <DialogDescription>It requires password to view the content</DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                      <Label htmlFor="link" className="sr-only">
                        Link
                      </Label>
                      <Input
                        id="link"
                        placeholder="Enter password"
                        onKeyUp={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-end">
                    <Button type="button" variant="default" onClick={getPaste}>
                      Submit
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ClientContent;
