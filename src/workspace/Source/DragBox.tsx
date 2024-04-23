import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { DragItem } from "../types";
const DragBox = ({ id, content, title, type }: DragItem) => {
  const [, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, content, title, type, width: 150, height: 30 },
      // collect: (monitor) => ({
      //   isDragging: monitor.isDragging(),
      // }),
    }),
    [id]
  );
  return (
    <div
      className="bg-white rounded-sm shadow-md cursor-move text-center p-4"
      ref={drag}
    >
      {title}
    </div>
  );
};
export default DragBox;