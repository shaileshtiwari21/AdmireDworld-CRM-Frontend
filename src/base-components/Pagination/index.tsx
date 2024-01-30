import { twMerge } from "tailwind-merge";
import Button from "../Button";

type PaginationProps = React.PropsWithChildren &
  React.ComponentPropsWithoutRef<"nav">;

function Pagination({ className, children }: PaginationProps) {
  return (
    <nav className={className}>
      <ul className="flex w-full mr-0 sm:w-auto sm:mr-auto">{children}</ul>
    </nav>
  );
}

interface LinkProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<"li"> {
  active?: boolean;
  handleClick?: any
}

Pagination.Link = ({ className, active, children,handleClick }: LinkProps) => {
  return (
    <li className="flex-1 sm:flex-initial">
      <Button 
      onClick={handleClick}
        as="a"
        className={twMerge([
          "min-w-0 sm:min-w-[40px] shadow-none font-normal flex items-center justify-center border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3",
          active && "bg-blue-500 text-white",
          className,
        ])}
      >
        {children}
      </Button>
    </li>
  );
};

export default Pagination;
