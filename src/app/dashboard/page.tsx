"use client";
import Link from "next/link";
import { column } from "./column";
import { DataTable } from "./datatable";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

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

const Dashboard = () => {
  const access_token = userStore((state) => state.access_token);
  const [paste, setPaste] = useState({ data: [] });

  const getPaste = async () => {
    const res = await fetchData("api/paste", {
      method: "GET",
    });

    setPaste(res);
  };

  useEffect(() => {
    getPaste();
  }, [access_token]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <div className="flex flex-row gap-8">
          <div className="w-full">
            <DataTable columns={column} data={paste.data} />
            <div className="mt-8">
              <Paginate data={paste} />
            </div>
          </div>
          <div className="w-[400px]"></div>
        </div>
      </div>

      <Dialog open={false}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Dashboard;
