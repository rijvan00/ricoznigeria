import { FunctionComponent } from "react";
import DataFlowController from "./DataFlowController";

const Section5: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-gray-200 flex flex-row items-start justify-between pt-[117px] pb-[99px] pr-[114px] pl-[186px] box-border max-w-full shrink-0 gap-[20px] text-left text-base text-darkgray font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pt-[76px] mq800:pb-16 mq800:pr-[57px] mq800:pl-[93px] mq800:box-border mq1325:flex-wrap">
      <div className="w-[307px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <div className="w-[238.4px] flex flex-col items-start justify-start gap-[31px]">
          <div className="w-[200px] h-[25px] relative shrink-0 [debug_commit:f6aba90]" />
          <div className="self-stretch relative leading-[22.86px] shrink-0 [debug_commit:f6aba90]">
            Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor
            utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[32px] text-xl text-white font-playfair-display">
        <h3 className="m-0 relative text-inherit leading-[27px] capitalize font-medium font-inherit inline-block min-w-[112px] mq450:text-base mq450:leading-[22px]">
          Useful Links
        </h3>
        <div className="flex flex-col items-start justify-start gap-[24px] text-sm text-darkgray font-roboto">
          <div className="relative leading-[16px] capitalize inline-block min-w-[38px]">
            Home
          </div>
          <div className="relative leading-[16px] capitalize inline-block min-w-[38px]">
            About
          </div>
          <div className="relative leading-[16px] capitalize inline-block min-w-[70px]">
            Contact us
          </div>
        </div>
      </div>
      <DataFlowController propMargin="0" propMargin1="0" />
    </footer>
  );
};

export default Section5;
