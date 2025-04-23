"use client";

import { Provider } from "jotai";
import { ReactNode, useEffect, useState } from "react";

export default function JotaiProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Provider>{children}</Provider>;
}
