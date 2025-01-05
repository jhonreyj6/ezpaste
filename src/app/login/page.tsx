"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { fetchData } from "@/lib/utils";
import { useState } from "react";
import useUserStore from "@/stores/userStore";
import { withAuthRedirect } from "@/hoc/withAuthRedirect";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = useUserStore((state) => state.login);

  const authenticate = async () => {
    const res = await fetchData("api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.access_token) {
      login(res);
      redirect("/dashboard");
    } else {
      // error message here
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto px-4 pt-24 mb-32">
        <div className="w-full">
          <h1 className="text-4xl font-medium mb-2">Sign in to Celebration</h1>
          <div className="flex flex-row gap-1 mb-6">
            <div>Don’t have an account?</div>
            <div>
              <Link href={"/register"} className="text-blue-500 hover:underline">
                Create a free account
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <div className="mb-2">
              <Label htmlFor="email">Email</Label>
            </div>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full !py-6"
              onKeyUp={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <div className="mb-4">
            <div className="mb-2 flex justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href={"/forgot-password"} className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="Enter password"
              id="password"
              className="w-full !py-6"
              onKeyUp={(e) => {
                setForm((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button variant={"default"} className="w-full py-6" onClick={() => authenticate()}>
              Login
            </Button>
            <Button variant={"outline"} className="w-full py-6 text-blue-500">
              <img width="24" height="24" src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
              <span>Login with Facebook</span>
            </Button>
            <Button variant={"outline"} className="w-full py-6 text-red-500">
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/google-plus.png" alt="google-plus" />
              <span>Login with Google</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthRedirect(Login, "/dashboard");
