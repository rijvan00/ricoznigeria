import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DataFlowController from "../components/DataFlowController";

const Landingpage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/frame-1171275276");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/frame-1171275277");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <header className="self-stretch bg-darkslategray-300 flex flex-row items-start justify-end pt-0 px-[114px] pb-5 box-border top-[0] z-[99] sticky max-w-full mq1350:pl-[57px] mq1350:pr-[57px] mq1350:box-border mq800:pl-7 mq800:pr-7 mq800:box-border">
        <nav className="m-0 w-[1140px] rounded flex flex-row items-start justify-end pt-[34px] px-[43.3px] pb-8 box-border relative gap-[40.9px] max-w-full text-left text-base text-white font-lato mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <b className="relative leading-[19px] inline-block min-w-[44px]">
            Home
          </b>
          <div
            className="relative leading-[19px] inline-block min-w-[44px] cursor-pointer"
            onClick={onAboutTextClick}
          >
            About
          </div>
          <div
            className="relative leading-[19px] inline-block min-w-[57px] cursor-pointer"
            onClick={onContactTextClick}
          >
            Contact
          </div>
          <div className="h-4 absolute !m-[0] right-[-16px] bottom-[33px] leading-[16px] font-inter inline-block">
            
          </div>
        </nav>
      </header>
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className="self-stretch bg-ghostwhite flex flex-col items-center justify-start pt-[148.9px] pb-0 pr-5 pl-[92px] box-border relative gap-[5px] max-w-full text-center text-11xl text-dimgray-300 font-playfair-display mq1350:pl-[46px] mq1350:box-border mq800:pl-[23px] mq800:pt-[97px] mq800:box-border mq450:pt-[63px] mq450:box-border">
        <h2 className="!m-[0] w-[409.9px] h-10 absolute top-[112px] right-[479px] text-inherit leading-[33px] capitalize font-bold font-inherit flex items-center justify-center mq800:text-5xl mq800:leading-[26px] mq450:text-lg mq450:leading-[20px]">
          what our client say about us
        </h2>
        <div className="w-[1140px] overflow-hidden flex flex-col items-end justify-end pt-[38px] px-[15.6px] pb-[37.8px] box-border relative gap-[26.6px] min-h-[496px] max-w-full z-[1] text-5xl text-gray-100 font-poppins">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[34.29px] font-normal font-inherit mq450:text-lgi mq450:leading-[27px]">
            Lorem ipsum dolor sit amet conse adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam..
          </h3>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-darkslategray-300">
            <div className="w-[165px] flex flex-col items-start justify-start gap-[8.4px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[33px] capitalize font-medium font-inherit mq450:text-lgi mq450:leading-[26px]">
                kevin watson
              </h3>
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[18.5px] text-lg text-gray-100">
                <div className="w-[126px] relative leading-[25px] capitalize font-medium inline-block min-w-[126px]">
                  CEO, Kingston
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1730.6px] h-[380.9px] !m-[0] absolute top-[75.1px] left-[549.4px] flex flex-row items-start justify-start text-21xl text-lightsteelblue font-inter">
            <img
              className="h-[100px] w-[100px] absolute !m-[0] top-[0px] left-[-29.4px] rounded-31xl object-cover"
              loading="lazy"
              alt=""
              src="/testimonial1jpg@2x.png"
            />
            <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-[100px] px-0 pb-0 box-border max-w-full z-[1]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[58px] px-0 box-border max-w-full">
                <div className="h-10 w-[1179.2px] flex flex-row items-start justify-start max-w-full">
                  <h1 className="m-0 self-stretch w-10 relative text-inherit leading-[40px] font-normal font-inherit flex items-center justify-center mq800:text-13xl mq800:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
                    
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1140px] flex flex-row items-start justify-center pt-[5px] px-0 pb-[120px] box-border gap-[6px] max-w-full mq450:flex-wrap">
          <div className="h-[15px] w-[15px] relative rounded-5xs-5 bg-darkslategray-300 box-border border-[2px] border-solid border-darkslategray-300 mq450:w-full" />
          <div className="h-[15px] w-[15px] relative rounded-5xs-5 box-border border-[2px] border-solid border-lavender-200" />
          <div className="h-[15px] w-[15px] relative rounded-5xs-5 box-border border-[2px] border-solid border-lavender-200" />
        </div>
      </section>
      <section className="w-[1512px] bg-darkslategray-300 flex flex-row items-start justify-between py-[72px] pr-[190px] pl-[186px] box-border max-w-[105%] shrink-0 gap-[20px] z-[4] text-left text-11xl text-white font-poppins mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[95px] mq1350:box-border mq800:pl-[46px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
          <h2 className="m-0 relative text-inherit leading-[42px] capitalize font-medium font-inherit mq800:text-5xl mq800:leading-[34px] mq450:text-lg mq450:leading-[25px]">
            Want to start a new project with us? Let’s Start!
          </h2>
        </div>
        <Button
          className="h-[54.6px] w-[161.2px]"
          disableElevation={true}
          variant="outlined"
          sx={{
            color: "#fff",
            fontSize: "13",
            borderColor: "#fff",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { borderColor: "#fff" },
            width: 161.2,
            height: 54.6,
          }}
        >
          start now
        </Button>
      </section>
      <footer className="w-[1512px] bg-gray-200 flex flex-row items-start justify-between pt-[117px] px-[186px] pb-[99.1px] box-border max-w-[105%] shrink-0 gap-[20px] z-[5] text-left text-base text-darkgray font-poppins mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[93px] mq1350:box-border mq800:pt-[76px] mq800:px-[46px] mq800:pb-16 mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-[307px] flex flex-col items-start justify-start pt-[59px] pb-0 pr-5 pl-0 box-border">
          <div className="w-[238.4px] relative leading-[22.86px] flex items-center">
            Lorem ipsum dolor sit amt conetur adcing elit. Sed do eiusod tempor
            utslr. Ut laboris nisi ut aute irure dolor in rein velit esse.
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[32px] text-xl text-white font-playfair-display">
          <div className="relative leading-[27px] capitalize font-medium inline-block min-w-[112px] mq450:text-base mq450:leading-[22px]">
            Useful Links
          </div>
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
        <DataFlowController />
      </footer>
    </div>
  );
};

export default Landingpage;
