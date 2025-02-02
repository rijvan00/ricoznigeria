import { FunctionComponent } from "react";
import Div3 from "../components/Div";
import Section7 from "../components/Section7";
import Section6 from "../components/Section6";
import SectionnewProject from "../components/SectionnewProject";
import Section5 from "../components/Section5";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full h-[2100px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[485.4px] box-border gap-[0.2px] leading-[normal] tracking-[normal] mq450:h-auto">
      <Div3 />
      <Section7 />
      <Section6 />
      <SectionnewProject propWidth="unset" propAlignSelf="stretch" />
      <Section5 />
    </div>
  );
};

export default Frame;
