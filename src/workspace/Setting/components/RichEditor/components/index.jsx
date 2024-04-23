import React from "react";
import ReactDOM from "react-dom";

import { cx, css } from "@emotion/css";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export const ToolButton = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (

      <span
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            cursor: pointer;
            /* color: ${reversed
              ? active
                ? "white"
                : "#aaa"
              : active
              ? "black"
              : "#999"}; */
            background-color: ${active ? '#ccc' : 'transparent'};
          `
        )}
      />
  )
);
export const EditorValue = React.forwardRef(
  ({ className, value, ...props }, ref) => {
    const textLines = value.document.nodes
      .map((node) => node.text)
      .toArray()
      .join("\n");
    return (
      <div
        ref={ref}
        {...props}
        className={cx(
          className,
          css`
            margin: 30px -20px 0;
          `
        )}
      >
        <div
          className={css`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `}
        >
          Slate's value as text
        </div>
        <div
          className={css`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `}
        >
          {textLines}
        </div>
      </div>
    );
  }
);

export const Icon = ({icon}) => {
  switch (icon) {
    case "bold":
      return <FormatBoldIcon />;
    case "italic":
      return <FormatItalicIcon />;
    case "underlined":
      return <FormatUnderlinedIcon />;
    case "list_numbered":
      return <FormatListNumberedIcon />;
    case "list_bulleted":
      return <FormatListBulletedIcon />;
    case "align_left":
      return <FormatAlignLeftIcon />;
    case "align_center":
      return <FormatAlignCenterIcon />;
    case "align_right":
      return <FormatAlignRightIcon />;
    case "align_justify":
      return <FormatAlignJustifyIcon />;
    default:
      return null;
  }
}

export const Instruction = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `
    )}
  />
));

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div
    {...props}
    data-test-id="menu"
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }

        & > * + * {
          margin-left: 15px;
        }
      `
    )}
  />
));

export const Portal = ({ children }) => {
  return typeof document === "object"
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `
    )}
  />
));
