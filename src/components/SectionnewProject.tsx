import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const SectionnewProject: FunctionComponent = () => {
  return (
    <section className="w-[1512px] bg-darkslategray-300 flex flex-row items-start justify-between py-[72px] pr-[190px] pl-[186px] box-border max-w-[105%] shrink-0 gap-[20px] z-[4] text-left text-11xl text-white font-poppins mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[95px] mq1350:box-border mq800:pl-[46px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border w-[1512px] bg-darkslategray-300 flex flex-row items-start justify-between py-[72px] pr-[190px] pl-[186px] box-border max-w-[105%] shrink-0 gap-[20px] z-[4] text-left text-11xl text-white font-poppins mq1350:flex-wrap mq1350:pl-[93px] mq1350:pr-[95px] mq1350:box-border mq800:pl-[46px] mq800:pr-[47px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <h2 className="m-0 relative text-inherit leading-[42px] capitalize font-medium font-inherit mq800:text-5xl mq800:leading-[34px] mq450:text-lg mq450:leading-[25px] m-0 relative text-inherit leading-[42px] capitalize font-medium font-inherit mq800:text-5xl mq800:leading-[34px] mq450:text-lg mq450:leading-[25px]">
          Want to start a new project with us? Let’s Start!
        </h2>
      </div>
      <Button
        className="h-[54.6px] w-[161.2px] h-[54.6px] w-[161.2px]"
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
  );
};

export default SectionnewProject;
