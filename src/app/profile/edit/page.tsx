"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchData } from "@/lib/utils";
import useUserStore from "@/stores/userStore";
import { useState } from "react";

const ProfileEdit = () => {
  const auth = useUserStore();
  const updateUserData = useUserStore((state) => state.updateUser);

  const [form, setForm] = useState({
    name: "",
    password: "",
    confirm_password: "",
  });

  const updateUser = async (e) => {
    e.target.disabled = true;
    const res = await fetchData(`api/profile/update`, {
      method: "POST",
      body: JSON.stringify(form),
    });

    updateUserData(res);
    e.target.disabled = false;
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <h1 className="text-4xl mb-4">Edit Profile</h1>

        <div className="border rounded-lg p-4">
          <div className="relative w-full mb-2">
            <Label htmlFor="f_name">Full Name</Label>
            <Input
              id="f_name"
              defaultValue={auth.user.name}
              type="text"
              autoComplete="one-time-code"
              name="f_name"
              onKeyUp={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="relative w-full mb-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" defaultValue={auth.user.email} disabled autoComplete="one-time-code" />
          </div>

          <div className="flex flex-row gap-4 mb-6">
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                autoComplete="one-time-code"
                onKeyUp={(e) => {
                  setForm((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="repeat">Repeat Password</Label>
              <Input
                type="password"
                id="repeat"
                autoComplete="one-time-code"
                onKeyUp={(e) => {
                  setForm((prevState) => ({
                    ...prevState,
                    confirm_password: e.target.value,
                  }));
                }}
              />
            </div>
          </div>

          <Button className="w-full" onClick={(e) => updateUser(e)}>
            Update Profile
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
