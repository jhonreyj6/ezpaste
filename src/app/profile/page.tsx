import Post from "@/components/post";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Profile = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <div className="border rounded-lg p-4 mb-4">
          <div className="flex flex-row justify-between gap-2 items-center">
            <h1 className="text-4xl font-medium text-blue-500">Ezekel Ramirez</h1>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="material-icons">more_horiz</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <h6 className="text-gray-400 mb-4">ezekel</h6>
          <h6 className="text-gray-400">Member since: 02/09/2024</h6>
          <h6 className="text-gray-400">Last Login: Dec. 2, 2024 4pm</h6>
        </div>

        <div className="mb-4">{/* <Post /> */}</div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Profile;
