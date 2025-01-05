import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BASE_API_URL } from "./const";
import useUserStore from "@/stores/userStore";
import { redirect } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData(pathname: string, options: object) {
  const url = `${BASE_API_URL}/${pathname}`;
  const auth = useUserStore.getState();

  const defaultOptions = {
    method: "GET", // Default method
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ` + auth.access_token,
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options, // Overwrite defaults with specific options
    headers: {
      ...defaultOptions.headers,
      ...options.headers, // Merge headers
    },
  };

  const response = await fetch(url, mergedOptions);
  if (!response.ok) {
    if (response.status == 401) {
      auth.logout();
      redirect("/login");
    }

    const errorData = await response.json();
    return errorData;
  } else {
    const result = await response.json();
    return result;
  }
}
