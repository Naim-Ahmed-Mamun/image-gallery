"use client";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useGlobalContext from "@/hooks/use-context";
import ImageLisItem from "./ImageListItem";

const ImageGalleryLists: React.FC = () => {
  const context = useGlobalContext();

  const images = context?.images!;
  const setImages = context?.setImages!;

  const moveImage = (id: string, toIndex: number) => {
    const fromIndex = images.findIndex((image) => image.id === id);
    if (fromIndex === -1) {
      return;
    }
  
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
  
    setImages(updatedImages);
  };



  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="image-lists">
        {images.map((image, index) => (
          <ImageLisItem
            key={image.id}
            image={image}
            index={index}
            moveImage={moveImage}
          />
        ))}
      </ul>
    </DndProvider>
  );
};

export default ImageGalleryLists;