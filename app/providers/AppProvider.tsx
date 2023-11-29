import { ToastProvider } from "@/functions/contexts";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
