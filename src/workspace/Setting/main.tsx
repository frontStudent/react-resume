import React, { useContext } from "react";
import { StoreCtx } from "../context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Single from "./Single";
import Whole from "./Whole";
const SettingContainer = () => {
  const { state, onChangeState } = useContext(StoreCtx);
  return (
    <div className="p-1">
      <Tabs value={`${state.selectType}`}>
        <TabsList className="w-full">
          <TabsTrigger
            value="resume"
            className="w-[45%]"
            onClick={() => onChangeState({ selectType: "resume" })}
          >
            resume
          </TabsTrigger>
          <TabsTrigger
            value="box"
            className="w-[45%]"
            onClick={() => onChangeState({ selectType: "box" })}
          >
            box
          </TabsTrigger>
        </TabsList>
        <TabsContent value="resume">
          <Whole />
        </TabsContent>
        <TabsContent value="box">
          <Single />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default SettingContainer;
