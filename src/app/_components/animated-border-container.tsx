import { cn } from "@/utils/functions";
import { Fragment, type ReactNode } from "react";

export type AnimatedBorderContainerProps = {
  children: ReactNode;
  showBorder: boolean;
  showBorderOnHover: boolean;
};

export const AnimatedBorderContainer = ({
  children,
  showBorder,
  showBorderOnHover,
}: AnimatedBorderContainerProps) => {
  return (
    <Fragment>
      <div
        className={cn(
          "absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-600 transition-all duration-300 ease-smooth delay-100",
          showBorder ? "w-full" : showBorderOnHover && "group-hover:w-full"
        )}
      />
      <div
        className={cn(
          "absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-slate-600 transition-all duration-300 ease-smooth delay-100 ",
          showBorder ? "h-full visible" : "invisible"
        )}
      />
      <div className="text-inherit">{children}</div>
      <div
        className={cn(
          "absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1 bg-slate-600 transition-all duration-300 ease-smooth delay-100 ",
          showBorder ? "h-full visible" : "invisible"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-600 transition-all duration-300 ease-smooth delay-100",
          showBorder ? "w-full" : showBorderOnHover && "group-hover:w-full"
        )}
      />
    </Fragment>
  );
};
