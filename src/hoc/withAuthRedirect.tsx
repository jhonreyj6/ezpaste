import useUserStore from "../stores/userStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuthRedirect(WrappedComponent: () => any, redirectPath = "/") {
  return function (props) {
    const isAuthenticated = useUserStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
      if (isAuthenticated) {
        router.replace(redirectPath);
      }
    }, [isAuthenticated, router]);

    if (isAuthenticated) {
      return null; // Return null to prevent rendering the component
    }

    return <WrappedComponent {...props} />;
  };
}
