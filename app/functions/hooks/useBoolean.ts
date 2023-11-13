import { breakpoints } from "@/app/functions/constants/breakpoints";
import { useMemo } from "react";

export const useBoolean = () => {
  const isLocalhost = useMemo(() => {
    return document.location.hostname === "localhost";
  }, []);

  const isIphone5 = useMemo(() => {
    return window.innerWidth <= breakpoints.iphone5;
  }, []);

  const isSp = useMemo(() => {
    return window.innerWidth <= breakpoints.sp;
  }, []);

  const isTab = useMemo(() => {
    return window.innerWidth <= breakpoints.tab;
  }, []);
  const isPc = useMemo(() => {
    return window.innerWidth <= breakpoints.pc;
  }, []);

  return { isLocalhost, isIphone5, isSp, isTab, isPc };
};
