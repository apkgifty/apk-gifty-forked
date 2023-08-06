"use client";

import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <h2>There&rsquo;s no order</h2>
    </div>
  );
};

export default Error;
