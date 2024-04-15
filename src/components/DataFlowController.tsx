import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type DataFlowControllerType = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
};

const DataFlowController: FunctionComponent<DataFlowControllerType> = ({
  propMargin,
  propMargin1,
}) => {
  const ourVisionStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const ourNewsletterStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  return (
    <div className="w-[555px] flex flex-col items-start justify-start gap-[8.1px] max-w-full text-left text-xl text-white font-playfair-display">
      <div className="w-[544.6px] flex flex-row items-start justify-start gap-[56.9px] max-w-full mq800:flex-wrap mq800:gap-[28px]">
        <div className="w-[235.6px] flex flex-col items-start justify-start gap-[28px] min-w-[235.60000000000036px] mq800:flex-1">
          <div className="relative leading-[27px] capitalize font-medium inline-block min-w-[97px] mq450:text-base mq450:leading-[22px]">
            Our Vision
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[11.7px] text-base text-darkgray font-poppins">
            <div className="self-stretch relative leading-[22.86px]">
              The Pros and Cons of Starting an Online Business.
            </div>
            <div className="relative text-xs leading-[17px] inline-block min-w-[84px]">
              12th June 2017
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[164px] mq450:gap-[16px]">
          <div className="relative leading-[27px] capitalize font-medium mq450:text-base mq450:leading-[22px]">
            Our Newsletter
          </div>
          <div className="self-stretch relative text-mini leading-[21.43px] font-poppins text-darkgray">
            Subscribe to our newsletter to get the latest News and offers..
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-darkgray font-poppins mq450:flex-wrap">
        <div className="w-[262.5px] flex flex-col items-start justify-start pt-[22.9px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] mq450:gap-[16px]">
            <div className="self-stretch h-px relative box-border border-b-[1px] border-solid border-darkgray" />
            <div className="w-[235.6px] flex flex-col items-start justify-start gap-[11.6px]">
              <div className="self-stretch relative leading-[22.86px]">
                The Pros and Cons of Starting an Online Business.
              </div>
              <div className="relative text-xs leading-[17px] inline-block min-w-[84px]">
                12th June 2017
              </div>
            </div>
          </div>
        </div>
        <Button
          className="h-[65px] w-[65px]"
          disableElevation={true}
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "14",
            background: "#1b3228",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#1b3228" },
            width: 65,
            height: 65,
          }}
        >
          go
        </Button>
      </div>
    </div>
  );
};

export default DataFlowController;
