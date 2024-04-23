import DragBox from "./DragBox";
import { DragItem } from "../types";

const boxes = [
  {
    id: "1",
    title: "Rich Text",
    content: [
      {
        type: "paragraph",
        align: "left",
        children: [{ text: "Hello11" }],
      },
    ],
    type: "editor",
  },
  {
    id: "2",
    title: "Not determined yet",
    content: [
      {
        type: "paragraph",
        align: "left",
        children: [{ text: "Hello22" }],
      },
    ],
    type: "unknown",
  },
];

const DragArea = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {boxes.map(({ id, content, title, type }: DragItem) => {
        return (
          <DragBox
            key={id}
            id={id}
            content={content}
            title={title}
            type={type}
          ></DragBox>
        );
      })}
    </div>
  );
};

export default DragArea;
