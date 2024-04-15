import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const FrameComponent8: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[109px] box-border max-w-full text-left text-11xl text-darkslategray-100 font-playfair-display lg:pb-[71px] lg:box-border mq825:pb-[46px] mq825:box-border">
      <div className="w-[1170px] flex flex-col items-start justify-start gap-[49px] max-w-full mq825:gap-[24px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[62px] max-w-full lg:gap-[31px] mq825:gap-[15px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[1.7px] pr-[35px] pl-[15px] box-border gap-[27px] max-w-full">
            <h2 className="m-0 relative text-inherit leading-[40px] capitalize font-bold font-inherit mq825:text-5xl mq825:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              Our Finished Projects
            </h2>
            <div className="w-[378.9px] relative text-base leading-[22.86px] font-poppins text-gray-100 flex items-center max-w-full">
              Pallamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start pt-0 pb-0.5 pr-0 pl-[15px] box-border gap-[15px] max-w-full lg:flex-wrap">
              <img
                className="w-[360px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full lg:flex-1"
                loading="lazy"
                alt=""
                src="/div11@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[507px] max-w-full mq825:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[30px] pr-[69px] pl-[15px] box-border gap-[30px] max-w-full mq825:flex-wrap mq825:pr-[34px] mq825:box-border mq450:gap-[15px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-11@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-21@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[30px] pr-[69px] pl-[15px] box-border gap-[30px] max-w-full mq825:flex-wrap mq825:pr-[34px] mq825:box-border mq450:gap-[15px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-31@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[216px] min-h-[286px]"
                    loading="lazy"
                    alt=""
                    src="/div-41@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <Button
            className="h-[52px] w-[185px]"
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
            view all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
