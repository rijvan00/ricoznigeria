import { FunctionComponent } from "react";
import Div3 from "../components/Div3";
import FrameComponent51 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent41 from "../components/FrameComponent4";
import OutputProcessor from "../components/OutputProcessor";
import FrameComponent31 from "../components/FrameComponent3";
import FrameComponent21 from "../components/FrameComponent2";
import FrameComponent11 from "../components/FrameComponent1";
import FrameComponent8 from "../components/FrameComponent";
import Section3 from "../components/Section3";
import Section1 from "../components/Section1";
import SectionnewProject from "../components/SectionnewProject";
import Section from "../components/Section";

const RicozNigeria: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white flex flex-col items-end justify-start pt-[61.8px] px-0 pb-[0.2px] box-border leading-[normal] tracking-[normal]">
      <Div3
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
      />
      <FrameComponent51 />
      <FrameComponent6 />
      <FrameComponent41 />
      <OutputProcessor />
      <FrameComponent31 />
      <FrameComponent21 />
      <FrameComponent11 />
      <FrameComponent8 />
      <Section2 />
      <section className="self-stretch bg-darkslategray-300 flex flex-row items-start justify-center pt-[86px] px-5 pb-[59px] box-border max-w-full z-[2]">
        <div className="w-[1140px] overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
          <div className="ml-[-1140px] w-[3420px] flex flex-row items-start justify-start py-[26px] px-[1153px] box-border gap-[100px] min-h-[156px] shrink-0 [debug_commit:f6aba90] lg:pl-[576px] lg:pr-[576px] lg:box-border mq825:gap-[50px] mq825:pl-72 mq825:pr-72 mq825:box-border mq450:gap-[25px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1500:flex-wrap">
            <img
              className="h-[77px] w-32 relative object-cover"
              loading="lazy"
              alt=""
              src="/client2png@2x.png"
            />
            <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-0 box-border gap-[49px] max-w-full lg:flex-wrap mq450:gap-[24px]">
              <img
                className="h-[75px] w-[179px] relative object-cover"
                loading="lazy"
                alt=""
                src="/client3png@2x.png"
              />
              <img
                className="h-[83px] w-[121px] relative object-cover"
                loading="lazy"
                alt=""
                src="/client4png@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[43px] max-w-full lg:flex-wrap mq450:gap-[21px]">
              <img
                className="h-[77px] w-[185px] relative object-cover"
                loading="lazy"
                alt=""
                src="/client5png@2x.png"
              />
              <img
                className="h-[62px] w-[133px] relative object-cover"
                loading="lazy"
                alt=""
                src="/client1png@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <Section1 />
        <SectionnewProject />
        <Section />
      </section>
      <section className="self-stretch bg-darkslategray-400 flex flex-row items-start justify-start pt-[30px] px-[201px] pb-[35px] gap-[14.6px] text-left text-sm text-white font-poppins mq825:flex-wrap mq825:pl-[100px] mq825:pr-[100px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="relative leading-[20px] capitalize inline-block min-w-[63px]">
          About Us
        </div>
        <div className="relative leading-[20px] capitalize inline-block min-w-[58px]">
          Services
        </div>
        <div className="relative leading-[20px] capitalize inline-block min-w-[78px]">
          Contact Us
        </div>
      </section>
      <div className="w-[51.7px] h-[5.4px] relative hidden" />
    </div>
  );
};

export default RicozNigeria;
