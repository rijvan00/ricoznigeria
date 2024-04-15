import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Div3 from "../components/Div3";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent10 from "../components/FrameComponent10";
import Section4 from "../components/Section4";
import FrameComponent9 from "../components/FrameComponent9";
import SectionnewProject from "../components/SectionnewProject";
import Section2 from "../components/Section2";

const EventsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full h-[3492px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[485.4px] box-border leading-[normal] tracking-[normal] mq450:h-auto">
      <Div3 onHomeTextClick={onHomeTextClick} />
      <FrameComponent12 />
      <FrameComponent10 />
      <Section4 />
      <FrameComponent9 />
      <SectionnewProject propWidth="unset" propAlignSelf="stretch" />
      <Section2 />
    </div>
  );
};

export default EventsPage;
