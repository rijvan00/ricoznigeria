import { FunctionComponent } from "react";

const Div1: FunctionComponent = () => {
  return (
    <div className="w-[304px] flex flex-col items-start justify-start pt-[30px] pb-[15.9px] pr-[19.1px] pl-[19.2px] box-border gap-[44px] text-center text-5xl text-darkslategray-100 font-playfair-display mq450:gap-[22px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[65px] w-[56.1px] relative object-cover"
          loading="lazy"
          alt=""
          src="/service2png@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[8.4px]">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[8.7px] pl-[9px]">
          <h3 className="m-0 w-[248px] relative text-inherit leading-[32px] capitalize font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[26px]">
            busisness consultency
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start text-base text-dimgray-100 font-poppins">
          <div className="self-stretch relative leading-[26.72px]">
            Lorem ipsum dolo dolor in in voluptate velit esse cillum dolore.
            epteur sint oat cupidatat consultancy
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] mt-[-1.9px] text-darkslategray-300">
            <div className="w-[89px] relative leading-[23px] capitalize flex items-center justify-center min-w-[89px] whitespace-nowrap">
              learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div1;
