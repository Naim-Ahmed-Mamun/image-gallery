'use client'
import { useContext } from "react";
import { AppContext } from "@/context/app-context";

const useGlobalContext = () => {
  return useContext(AppContext)
}

export default useGlobalContext;