import { FunctionComponent } from "react";

const Div2: FunctionComponent = () => {
  return (
    <div className="flex-1 bg-white shadow-[0px_0px_5px_rgba(35,_37,_41,_0.1)] overflow-hidden flex flex-row items-start justify-start min-w-[270px] max-w-full text-center text-xl text-white font-playfair-display">
      <div className="flex-1 flex flex-col items-start justify-start pt-[55px] pb-[70.5px] pr-[41.1px] pl-[41.4px] box-border gap-[38px] max-w-full mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5">
          <img
            className="h-[60px] w-[61px] relative object-cover"
            loading="lazy"
            alt=""
            src="/consultencypng@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-[41px]">
            <div className="flex-1 relative leading-[22px] capitalize font-medium mq450:text-base mq450:leading-[18px]">
              Business Consultancy
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[22.86px] font-poppins text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ul.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Div2;
