import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Div3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/frame-1171275276");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-1171275277");
  }, [navigate]);

  return (
    <header className="self-stretch bg-darkslategray-300 flex flex-row items-start justify-end pt-0 px-[114px] pb-5 box-border top-[0] z-[99] sticky max-w-full mq1350:pl-[57px] mq1350:pr-[57px] mq1350:box-border mq800:pl-7 mq800:pr-7 mq800:box-border self-stretch bg-darkslategray-300 flex flex-row items-start justify-end pt-0 px-[114px] pb-5 box-border top-[0] z-[99] sticky max-w-full mq1350:pl-[57px] mq1350:pr-[57px] mq1350:box-border mq800:pl-7 mq800:pr-7 mq800:box-border">
      <nav className="m-0 w-[1140px] rounded flex flex-row items-start justify-end pt-[34px] px-[43.3px] pb-8 box-border relative gap-[40.9px] max-w-full text-left text-base text-white font-lato mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border m-0 w-[1140px] rounded flex flex-row items-start justify-end pt-[34px] px-[43.3px] pb-8 box-border relative gap-[40.9px] max-w-full text-left text-base text-white font-inter mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <b className="relative leading-[19px] inline-block min-w-[44px] relative leading-[19px] inline-block min-w-[44px]">
          Home
        </b>
        <div
          className="relative leading-[19px] inline-block min-w-[44px] cursor-pointer relative leading-[19px] inline-block min-w-[44px] cursor-pointer"
          onClick={onAboutTextClick}
        >
          About
        </div>
        <div
          className="relative leading-[19px] inline-block min-w-[57px] cursor-pointer relative leading-[19px] inline-block min-w-[57px] cursor-pointer"
          onClick={onContactTextClick}
        >
          Contact
        </div>
        <div className="h-4 absolute !m-[0] right-[-16px] bottom-[33px] leading-[16px] font-inter inline-block h-4 absolute !m-[0] right-[-16px] bottom-[33px] leading-[16px] inline-block">
          
        </div>
      </nav>
    </header>
  );
};

export default Div3;
