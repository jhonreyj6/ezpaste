"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import useUserStore from "@/stores/userStore";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchData } from "@/lib/utils";
import { redirect } from "next/navigation";

const Navbar = () => {
  const auth = useUserStore();

  const logout = async () => {
    const res = await fetchData("api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + auth.access_token,
      },
    });

    if (res == "success") {
      auth.logout();
      redirect("/login");
    } else {
      // error message here
    }
  };

  return (
    <>
      <nav className="w-full shadow-md fixed z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-row justify-between items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row">
                <NavigationMenuItem>
                  {!auth.isAuthenticated && (
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                  )}
                  {auth.isAuthenticated && (
                    <Link href="/dashboard" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/trending" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Trending</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {auth.isAuthenticated && (
                  <NavigationMenuItem>
                    <Link href="/bookmarks" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>Bookmarks</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-2 items-center">
                {!auth.isAuthenticated && (
                  <>
                    <NavigationMenuItem>
                      <Link href="/login" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/register" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Register</NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                )}
                <NavigationMenuItem>
                  <Link href="/paste" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={
                        "bg-blue-500 text-white bg-gradient-to-r !from-purple-500 !via-blue-500 !to-indigo-500 px-6 py-1.5 flex gap-2 items-center rounded hover:bg-blue-600"
                      }
                    >
                      <span>Paste Now</span>
                      <span className="material-icons !text-xl">content_paste</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {auth.isAuthenticated && (
                  <NavigationMenuItem className="w-10 h-10">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Avatar className="">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer" onClick={() => redirect("/profile")}>
                          Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
