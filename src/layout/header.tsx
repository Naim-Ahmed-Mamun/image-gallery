"use client";
import React from "react";
import useGlobalContext from "@/hooks/use-context";

const Header = () => {
  const context = useGlobalContext();
  return (
    <header>
      <div className="header">
        <div>
          {context?.selectedItems && context?.selectedItems.length === 0 && (
            <h3 className="title">Gallery</h3>
          )}
          {context?.selectedItems && context?.selectedItems.length > 0 && (
            <h3 className="title">Selected Items {context?.selectedItems.length}</h3>
          )}
        </div>
        <div>
          {context?.selectedItems && context?.selectedItems.length > 0 && (
            <button onClick={()=> context?.handleMultipleDelete()} className="delete">Delete Files</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
