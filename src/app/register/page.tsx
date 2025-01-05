"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { fetchData } from "@/lib/utils";
import { useState } from "react";
import { redirect } from "next/navigation";
import { withAuthRedirect } from "@/hoc/withAuthRedirect";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = async () => {
    const res = await fetchData("api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res != "success") {
      // set error message here
    } else {
      redirect("/login");
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 mb-32 pt-16">
        <div className="flex flex-row gap-12">
          <div className="w-full">
            <div className="relative h-full">
              <img
                src="https://www.cultofmac.com/wp-content/uploads/2024/05/You-Can-Quote-Me-On-This-1536x1152.jpg"
                className="h-full rounded-lg"
                alt=""
              />
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-4xl font-medium mb-2">Register</h1>
            <div className="flex flex-row gap-1 mb-6">
              <div>Already have account?</div>
              <div>
                <Link href={"/login"} className="text-blue-500 hover:underline">
                  Login
                </Link>
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-2">
                <Label htmlFor="fname">Full Name</Label>
              </div>
              <Input
                id="fname"
                className="w-full !py-5"
                onKeyUp={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mb-4">
              <div className="mb-2">
                <Label htmlFor="email">Email</Label>
              </div>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                className="w-full !py-5"
                onKeyUp={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mb-6">
              <div className="mb-2">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                type="password"
                placeholder="Enter password"
                id="password"
                className="w-full !py-5"
                onKeyUp={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <Button variant={"default"} className="w-full py-6" onClick={() => register()}>
                Register
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
      </div>
    </>
  );
};

export default withAuthRedirect(Register, "/dashboard");
