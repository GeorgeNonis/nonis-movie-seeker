"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("fuck");
  }, []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
}
