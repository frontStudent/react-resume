import React, { useContext } from "react";
import Text from "./components/Text";
import { StoreCtx } from "../context";
const getComponent = (type: string) => {
    switch (type) {
        case "editor":
            return <Text />;
        default:
            return <>default</>;
    }
}
const Single = () => {
    const { state, onChangeState } = useContext(StoreCtx);
    return <div>{getComponent(state.selectField.type)}</div>;
}

export default Single;