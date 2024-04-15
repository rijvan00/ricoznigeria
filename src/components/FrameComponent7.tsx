import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const FrameComponent7: FunctionComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[118px] box-border max-w-full text-left text-38xl text-white font-poppins mq800:pb-[50px] mq800:box-border mq1125:pb-[77px] mq1125:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-[180px] px-[124px] pb-[316px] box-border relative gap-[89px] bg-[url('/public/div@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq1350:gap-[44px] mq1350:pl-[62px] mq1350:pr-[62px] mq1350:box-border mq800:gap-[22px] mq800:pl-[31px] mq800:pr-[31px] mq800:box-border mq1125:pt-[117px] mq1125:pb-[205px] mq1125:box-border mq450:pt-[76px] mq450:pb-[133px] mq450:box-border">
        <div className="w-[1512px] h-full absolute !m-[0] top-[0px] right-[-72px] bottom-[0px] bg-darkgreen z-[unset]" />
        <div className="w-[946px] flex flex-col items-start justify-start gap-[10px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.1px] leading-[79.8px] font-bold font-inherit z-[2] mq800:text-27xl mq800:leading-[64px] mq450:text-15xl mq450:leading-[48px]">
            Designing Dreams, Crafting Brands
          </h1>
          <div className="w-[826px] relative text-lgi leading-[28.5px] font-light flex items-center max-w-full z-[2]">
            Teams within rapidly growing enterprises rely on our services to
            efficiently produce top-notch graphic designs at any scale. Schedule
            a call today to unlock access to your dedicated design team.
          </div>
        </div>
        <div className="w-[591px] flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-[54px] flex-1 font-poppins font-semibold text-sm text-dimgray-200 min-w-[273px] max-w-full z-[2]"
            placeholder="Your work email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "rgba(15, 33, 51, 0.1)" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#f5f9ff",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#6b6e73" },
            }}
          />
          <Button
            className="h-[55px] w-[163.3px] z-[2]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#007aff",
              borderRadius: "4px",
              "&:hover": { background: "#007aff" },
              width: 163.3,
              height: 55,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
