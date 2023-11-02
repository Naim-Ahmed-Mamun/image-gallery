"use client";
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import Checkbox from "rc-checkbox";
import useGlobalContext from "@/hooks/use-context";
import { ImageData } from '@/types/image-d-t';

// item type 
const ItemTypes = {
  IMAGE: "image",
};

// prop type 
type IProps = {
  image: ImageData;
  index: number;
  moveImage: (fromIndex: string, toIndex: number) => void;
};

const ImageLisItem = ({ image, index, moveImage }: IProps) => {
  const context = useGlobalContext();
  const [, ref] = useDrag({
    type: ItemTypes.IMAGE,
    item: { id: image.id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.IMAGE,
    hover: (draggedImage: ImageData) => {
      if (draggedImage) {
        moveImage(draggedImage.id, index);
      }
    },
  });
  

  return (
    <li ref={(node) => ref(drop(node))} className={`image-item image-${index}`}>
      <div className="image-container">
        <div className="checkbox-container">
          <Checkbox
            className="checkbox"
            onChange={() => context?.handleSelectedItems(image)}
          />
        </div>
        <img
          src={image.src}
          alt={`Image ${index + 1}`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </li>
  );
};

export default ImageLisItem;