import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";

const Paginate = ({ data }) => {
  const pathname = usePathname();

  return (
    <>
      {data.last_page != 1 && data.current_page && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {/* disable prev button if current_page is 1 else active */}
              {data.current_page > 1 && <PaginationPrevious href={`${pathname}?page=${data.current_page - 1}`} />}
              {data.current_page == 1 && <PaginationPrevious />}
            </PaginationItem>

            {data.current_page - 1 != 0 && (
              <PaginationItem>
                <PaginationLink href={`${pathname}?page=${data.current_page - 1}`}>
                  {data.current_page - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* active button */}
            <PaginationItem>
              <PaginationLink className="bg-blue-500 text-white">{data.current_page}</PaginationLink>
            </PaginationItem>

            {/* add additional button +1 if next page is available */}
            {data.current_page + 1 <= data.last_page && (
              <PaginationItem>
                <PaginationLink href={`${pathname}?page=${data.current_page + 1}`}>
                  {data.current_page + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* add additional button +2 if next page is available */}
            {data.current_page + 2 < data.last_page && (
              <PaginationItem>
                <PaginationLink href={`${pathname}?page=${data.current_page + 2}`}>
                  {data.current_page + 2}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem>
              {data.current_page < data.last_page && (
                <PaginationNext href={`${pathname}?page=${data.current_page + 1}`} />
              )}
              {data.current_page == data.last_page && <PaginationNext />}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
