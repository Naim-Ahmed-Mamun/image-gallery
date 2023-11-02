'use client';
import useGlobalContext from "@/hooks/use-context";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Checkbox from 'rc-checkbox';


const ImageGallery: React.FC = () => {
  const context = useGlobalContext();

  const images = context?.images!;
  const setImages = context?.setImages!;

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(images);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="image-list" direction="horizontal" >
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="image-lists"
            >
              {images.map((image, index) => (
                <Draggable key={image.id} draggableId={image.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`image-item image-${index}`}
                    >
                      <div className="image-container">
                        <div className="checkbox-container">
                          <Checkbox className="checkbox" onChange={() => context?.handleSelectedItems(image)} />
                        </div>
                        <img
                          src={image.src}
                          alt={`Image ${index + 1}`}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </li>
                  )}
                </Draggable>

              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ImageGallery;
