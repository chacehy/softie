import { ReactNode } from "react";

interface StagingLayoutProps {
  children: ReactNode;
}

export default function StagingLayout({ children }: StagingLayoutProps) {
  return <>{children}</>;
}
