import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontSize: "100px" }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: "100px" }}>{children}</h3>,
    h4: ({ children }) => <h4 style={{ fontSize: "100px" }}>{children}</h4>,
    h5: ({ children }) => <h5 style={{ fontSize: "100px" }}>{children}</h5>,
    p: ({ children }) => <p>{children}</p>,
    span: ({ children }) => <span>{children}</span>,
    li: ({ children }) => <li>{children}</li>,
    ul: ({ children }) => <ul>{children}</ul>,
    ol: ({ children }) => <ol>{children}</ol>,

    ...components,
  };
}
