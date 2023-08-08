"use client";

import { MDXProvider } from "@mdx-js/react";

const MdxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider>{children}</MDXProvider>;
};

export default MdxWrapper;
