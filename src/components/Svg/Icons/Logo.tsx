import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <image width="50" height="50" href={'/logo.png'}/>
    </Svg>
  );
};

export default Icon;
