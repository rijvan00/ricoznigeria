import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const OutputProcessor: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-28 box-border max-w-full text-left text-11xl text-dimgray-300 font-playfair-display mq825:pb-[73px] mq825:box-border mq450:pb-[47px] mq450:box-border">
      <div className="flex-1 bg-ghostwhite flex flex-row items-end justify-center pt-[120px] px-[186px] pb-[175px] box-border gap-[84px] max-w-full lg:gap-[42px] lg:pl-[93px] lg:pr-[93px] lg:box-border mq825:gap-[21px] mq825:pt-[78px] mq825:px-[46px] mq825:pb-[114px] mq825:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1500:flex-wrap">
        <div className="w-[501px] flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border min-w-[501px] min-h-[327px] max-w-full lg:min-w-full mq1500:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h2 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit inline-block min-w-[124px] mq825:text-5xl mq825:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              about us
            </h2>
            <div className="self-stretch flex flex-col items-start justify-start gap-[31.9px] text-base text-gray-100 font-poppins mq825:gap-[16px]">
              <div className="self-stretch relative leading-[27.2px]">
                About Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse.
              </div>
              <Button
                className="w-[185px] h-[52px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  color: "#fff",
                  fontSize: "14",
                  background: "#1b3228",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#1b3228" },
                  width: 185,
                  height: 52,
                }}
              >
                learn more
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[426px] flex-1 relative bg-[url('/public/aboutpartjpg@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[361px] max-w-full z-[2] text-sm text-darkslategray-200 font-roboto mq825:min-w-full">
          <div className="absolute top-[55px] left-[-23px] box-border w-full h-full border-[3px] border-solid border-lavender-100" />
          <div className="absolute top-[58px] left-[-20px] leading-[20px] flex items-center w-full h-full" />
          <img
            className="absolute top-[calc(50%_-_213px)] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="/aboutpartjpg@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default OutputProcessor;
