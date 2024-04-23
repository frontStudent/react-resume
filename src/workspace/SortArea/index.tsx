"use client";

import React, { useContext } from "react";
import { ReactSortable } from "react-sortablejs";
import { StoreCtx } from "../context";
import Card from "./Card";
import "./resize.css";
import {
  BoxMutateHelper,
  SectionMutateHelper,
  ResizeHelper,
} from "../types";
const BasicFunction = () => {
  const { state, onChangeState } = useContext(StoreCtx);
  // 增删改某个模块中的box信息，但并非增删改模块
  const handleMutateBoxInSection: BoxMutateHelper = (id, item, op) => {
    if (op === "add") {
      const newSections = state.sections.map((sec) => {
        return sec.id === id
          ? {
              ...sec,
              childList: [
                ...sec.childList,
                { ...item, id: new Date().getTime().toString() },
              ],
            }
          : sec;
      });
      onChangeState({ sections: newSections });
      return;
    }
    if (op === "delete") {
       const newSections = state.sections.map((sec) => {
          return sec.id === id
            ? {
                ...sec,
                childList: sec.childList.filter((box) => box.id !== item.id),
              }
            : sec;
        })
      onChangeState({ sections: newSections });
      return;
    }
    if (op === "update") {
      const newSections = state.sections.map((sec) => {
          return sec?.id === id
            ? {
                ...sec,
                childList: sec?.childList?.map((child) => {
                  return child?.id === item?.id ? item : child;
                }),
              }
            : sec;
        })
      onChangeState({ sections: newSections });
      return;
    }
  }

  // 增删改某个模块信息
  const handleMutateSection: SectionMutateHelper = (id, op) => {
    if (op === "add") {
      const newSections = [...state.sections];
      newSections.splice(
        state.sections.findIndex((sec) => sec.id === id) + 1,
        0,
        {
          id: new Date().getTime().toString(),
          type: "section",
          title: "fiona",
          titleStyle: "shrek",
          height: 100,
          width: 550,
          childList: [],
        }
      );
      onChangeState({ sections: newSections });
      return;
    }
    if (op === "delete") {
      const newSections = state.sections.filter((sec) => sec.id !== id);
      onChangeState({ sections: newSections });
      return;
    }
    if (op === "update") {
      return;
    }
  };

  const handleResize: ResizeHelper = (id, size) => {
    const newSections = state.sections.map((sec) =>
      sec.id === id ? { ...sec, height: size.height } : sec
    );
    onChangeState({ sections: newSections });
  };
  return (
    <ReactSortable
      list={state.sections}
      setList={(newList) => onChangeState({ sections: newList })}
      animation={150}
      handle=".handle"
      style={{ marginLeft: "30px" }}
    >
      {state.sections.map((item) => (
        <Card
          key={item.id}
          item={item}
          onMutateBox={handleMutateBoxInSection}
          onMutateSection={handleMutateSection}
          onResize={handleResize}
        />
      ))}
    </ReactSortable>
  );
};

export default BasicFunction;
