import { PropsWithChildren } from "react";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

const RootLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
