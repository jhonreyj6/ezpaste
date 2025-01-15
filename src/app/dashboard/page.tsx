"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import userStore from "@/stores/userStore";
import { fetchData } from "@/lib/utils";
import { useEffect, useState } from "react";
import Paginate from "@/components/paginate";
import Ads from "@/components/ads";
import Post from "@/components/post";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Dashboard = () => {
  const access_token = userStore((state) => state.access_token);
  const [paste, setPaste] = useState({ data: [] });
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedPaste, setSelectedPaste] = useState({});

  const getPaste = async () => {
    const res = await fetchData("api/paste", {
      method: "GET",
    });

    setPaste(res);
  };

  const editPaste = () => {
    const res = fetchData("api/paste/update", {
      method: "PATCH",
      body: JSON.stringify({ id: selectedPaste.id }),
    });
  };

  const deletePaste = async () => {
    const res = await fetchData("api/paste/delete", {
      method: "POST",
      body: JSON.stringify({ id: selectedPaste.id }),
    });

    if (res == "deleted") {
      setPaste((prevState) => ({
        ...prevState,
        data: prevState.data.filter((data) => data != selectedPaste),
      }));
      setIsOpenDeleteModal(false);
    }
  };

  useEffect(() => {
    getPaste();
  }, [access_token]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <div className="flex flex-row gap-8">
          <div className="w-full">
            <Table className="border rounded-lg">
              <TableCaption>A list of your paste.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-56">Title</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Unpaid Earnings</TableHead>
                  <TableHead className="">Paid Earnings</TableHead>
                  <TableHead className="">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paste.data.map((data) => {
                  return (
                    <TableRow key={data.id}>
                      <TableCell className="font-medium w-56">{data.title}</TableCell>
                      <TableCell>{data.clicks}</TableCell>
                      <TableCell>{data.unpaid_earnings}</TableCell>
                      <TableCell className="">{data.total_earnings}</TableCell>
                      <TableCell className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <span className="material-icons !text-lg text-gray-400">more_horiz</span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedPaste(data);
                                setIsOpenEditModal(true);
                              }}
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setSelectedPaste(data);
                                setIsOpenDeleteModal(true);
                              }}
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <div className="mt-8">
              <Paginate data={paste} />
            </div>
          </div>
          <div className="w-[400px]">
            <Ads />
          </div>
        </div>
      </div>

      <Dialog open={isOpenDeleteModal} onOpenChange={setIsOpenDeleteModal}>
        <DialogContent aria-describedby="s">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your paste and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-end gap-4 mt-4">
            <Button type="button" onClick={deletePaste}>
              Confirm
            </Button>
            <Button type="button" variant={"destructive"} onClick={() => setIsOpenDeleteModal(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isOpenEditModal} onOpenChange={setIsOpenEditModal}>
        <DialogContent aria-describedby="s" className="max-w-5xl">
          <DialogHeader className="border-b pb-2">
            <DialogTitle>Edit Paste</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input type="text" id="title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Content</Label>
              <Textarea rows={8} id="message" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
