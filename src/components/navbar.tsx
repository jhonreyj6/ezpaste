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
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="w-full shadow-md fixed z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-row justify-between">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/trending" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Trending</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contacts" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row gap-2">
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
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
