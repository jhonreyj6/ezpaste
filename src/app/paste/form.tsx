"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchData } from "@/lib/utils";
import { redirect } from "next/navigation";
import useUserStore from "@/stores/userStore";

const FormContent = () => {
  const auth = useUserStore();
  const [form, setForm] = useState({
    title: "",
    content: "",
    expiration: null,
    visibility: 1,
    keywords: [],
    password: null,
  });

  const createPaste = async () => {
    const res = await fetchData("api/paste", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Authorization: `Bearer ` + auth.access_token,
      },
    });

    if (res.id) {
      redirect(`/paste/post?id=${res.id}`);
    } else {
      // error message here
    }
  };

  return (
    <>
      <div className="mb-4">
        <Textarea
          id="paste"
          placeholder="Paste your text here..."
          rows={8}
          className="resize-y"
          onKeyUp={(e) => {
            setForm((prevState) => ({
              ...prevState,
              content: e.target.value,
            }));
          }}
        />
      </div>

      <div className="pb-2 mb-4 border-b">
        <h1 className="font-semibold text-2xl">Details</h1>
      </div>
      <div className="flex flex-col gap-4 max-w-xl">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <h2 className="text-lg font-medium w-40">Title:</h2>
          <div className="w-96">
            <Input
              type="text"
              placeholder="Enter title"
              className="w-full"
              onKeyUp={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <h2 className="text-lg font-medium w-40">Expiration:</h2>
          <div>
            <Select
              onValueChange={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  expiration: e,
                }));
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Time</SelectLabel>
                  <SelectItem value="0">No expiration</SelectItem>
                  <SelectItem value="day">1 Day</SelectItem>
                  <SelectItem value="week">1 Week</SelectItem>
                  <SelectItem value="month">1 Month</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <h2 className="text-lg font-medium w-40">Visibility:</h2>
          <Select
            onValueChange={(e) => {
              setForm((prevState) => ({
                ...prevState,
                visibility: e,
              }));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Visibility</SelectLabel>
                <SelectItem value="1">Public</SelectItem>
                <SelectItem value="0">Private</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
          <h2 className="text-lg font-medium w-40">Keywords:</h2>
          <div className="w-96">
            <Input
              type="text"
              placeholder="Enter keywords"
              className="w-full"
              onKeyUp={(e) => {
                if (e.key == "Enter")
                  setForm((prevState) => ({
                    ...prevState,
                    keywords: [...prevState.keywords, e.target.value],
                  }));
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center mb-4">
          <h2 className="text-lg font-medium w-40">Password:</h2>
          <div className="w-96">
            <Input
              type="password"
              className="w-full"
              onKeyUp={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <Button className="w-full" onClick={createPaste}>
          Create Paste
        </Button>
      </div>
    </>
  );
};

export default FormContent;
