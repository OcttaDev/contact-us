import React, { useEffect, useLayoutEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default function CodeEffect({ code }: { code: string }) {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      // Verifique se estamos no ambiente do navegador
      Prism.highlightAll();
    }
  }, []);

  return (
    <pre className="max-w-screen-sm overflow-x-auto ">
      <code className="language-javascript ">{code}</code>
    </pre>
  );
}
