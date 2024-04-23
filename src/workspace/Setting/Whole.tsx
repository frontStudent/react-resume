"use client";
import React, { useContext, useState } from "react";
import { StoreCtx } from "../context";
import { Slider } from "@/components/ui/slider";
import { SketchPicker, ColorChangeHandler, Color } from "react-color";

const Whole = () => {
  const [color, setColor] = useState<Color>('#fff');
  const handleChangeComplete: ColorChangeHandler = (color) => {
    console.log(color, "color");
    setColor(color.hex);
  };
  return (
    <div className="p-4">
      <div>Module Title Font Size</div>
      <Slider className="mt-4 mb-8" defaultValue={[33]} max={100} step={1} />
      <div>Text Font Size</div>
      <Slider className="mt-4 mb-8" defaultValue={[33]} max={100} step={1} />
      <div>Module Title Color </div>
      <SketchPicker color={color} onChange={handleChangeComplete} />
    </div>
  );
};

export default Whole;
