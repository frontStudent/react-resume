import React, { SyntheticEvent, useContext } from "react";
import { StoreCtx } from "../../context";
import { Input } from "@/components/ui/input";
import RichTextExample from "./RichEditor";

const Text = () => {
  const { state, onChangeState } = useContext(StoreCtx);
  const initialValue = state.selectField.content;
  console.log(initialValue, 'initialValue')
  const handleUpdateBoxContent = (val: string) => {
    const newSections = state.sections.map((sec) =>
      sec.childList.find((box) => box.id === state.selectField.id)
        ? {
            ...sec,
            childList: sec.childList.map((box) =>
              box.id === state.selectField.id ? { ...box, content: val } : box
            ),
          }
        : sec
    );
    onChangeState({ sections: newSections });
  };
  return (
    <div className="p-4">
      <RichTextExample
        initialValue={initialValue}
        onUpdate={handleUpdateBoxContent}
      />
    </div>
  );
};

export default Text;
