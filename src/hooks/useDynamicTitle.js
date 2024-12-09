import React, { useEffect } from "react";

const useDynamicTitle = ( title ) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Film Fiesta";
    };
  }, [title]);
};

export default useDynamicTitle;
