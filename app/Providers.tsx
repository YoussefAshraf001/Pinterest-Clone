"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
  children: ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;

// "use client";

// import { SessionProvider } from "next-auth/react";

// function Providers({ children }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

// export default Providers;
