import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`max-w-377.5 mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
