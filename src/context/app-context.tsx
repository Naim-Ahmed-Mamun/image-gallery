'use client';
import React, { createContext, useEffect, useState } from 'react';
import { ImageData } from '@/types/image-d-t';

type IContext = {
  images: ImageData[];
  setImages: React.Dispatch<React.SetStateAction<ImageData[]>>;
  handleSelectedItems: (item: ImageData) => void;
  selectedItems: ImageData[];
  handleMultipleDelete: () => void
}
export const AppContext = createContext<IContext | null>(null);


const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedItems,setSelectedItems] = useState<ImageData[]>([]);
  const [images, setImages] = useState<ImageData[]>([
    { id: "one", src: "/images/image-1.webp" },
    { id: "two", src: "/images/image-2.webp" },
    { id: "three", src: "/images/image-3.webp" },
    { id: "four", src: "/images/image-4.webp" },
    { id: "five", src: "/images/image-5.webp" },
    { id: "six", src: "/images/image-6.webp" },
    { id: "seven", src: "/images/image-7.webp" },
    { id: "eight", src: "/images/image-8.webp" },
    { id: "nine", src: "/images/image-9.webp" },
    { id: "ten", src: "/images/image-10.webp" },
    { id: "eleven", src: "/images/image-11.webp" },
  ]);

  const handleSelectedItems = (item:ImageData) => {
    if(selectedItems.includes(item)){
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
    }else{
      setSelectedItems([...selectedItems, item]);
    }
  }

  const handleMultipleDelete = () => {
    setImages(images.filter(image => !selectedItems.includes(image)));
    setSelectedItems([]);
  }

  // all values
  const value = {
    images,
    setImages,
    handleSelectedItems,
    selectedItems,
    handleMultipleDelete
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;