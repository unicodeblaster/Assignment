import FrameComponent2 from "../components/frame-component2";
import TextCell1 from "../components/text-cell1";
import FrameComponent1 from "../components/frame-component1";
import MainContent1 from "../components/main-content1";

const TODONavEditlistDark = () => {
  return (
    <div className="w-full relative bg-gray1-200 overflow-hidden flex flex-col items-start justify-start py-0 px-12 box-border min-h-[900px] leading-[normal] tracking-[normal] text-left text-5xl text-seagreen-100 font-sen lg:pl-6 lg:pr-6 lg:box-border">
      <div className="w-[1395px] bg-gray11-100 flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border relative min-h-[56px] max-w-full gap-[20px] mq750:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/logomark@2x.png"
            />
            <h2 className="m-0 h-4 relative text-inherit tracking-[-0.04em] leading-[100%] font-bold font-inherit inline-block min-w-[54px] mq450:text-[19px] mq450:leading-[19px]">
              DoIt
            </h2>
          </div>
        </div>
        <div className="w-[446.3px] flex flex-row items-center justify-center py-0 pr-0 pl-[326px] box-border gap-[24px] max-w-full mq450:pl-5 mq450:box-border mq750:flex-wrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/search.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/appgrid.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/phsun.svg"
          />
        </div>
        <img
          className="h-0 w-[calc(100%_+_192px)] absolute !m-[0] right-[-96px] bottom-[0px] left-[-96px] max-w-full overflow-hidden"
          loading="lazy"
          alt=""
        />
      </div>
      <main className="w-[1395px] h-[883px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border gap-[6px] max-w-full text-left text-smi text-lightgreen-300 font-outfit mq450:h-auto">
        <div className="h-[883px] w-[280px] flex flex-col items-start justify-start pt-[114px] px-0 pb-0 box-border lg:hidden mq450:pt-12 mq450:box-border mq1050:pt-[74px] mq1050:box-border">
          <FrameComponent2 />
        </div>
        <div className="h-[883px] flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border max-w-[calc(100%_-_744px)] lg:hidden lg:max-w-full mq450:h-auto">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <a className="[text-decoration:none] relative leading-[16px] font-medium text-[inherit] inline-block min-w-[34px]">
                  To Do
                </a>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/caretdown.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-mini text-m3-white">
              <div className="self-stretch box-border flex flex-row items-start justify-start pt-3.5 px-0 pb-4 max-w-full border-t-[1.5px] border-solid border-darkolivegreen">
                <div className="flex-1 bg-darkslategray flex flex-col items-start justify-start pt-[42px] px-5 pb-4 box-border gap-[64px] max-w-full mq450:gap-[16px] mq750:gap-[32px]">
                  <div className="w-[74px] relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                    Add A Task
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lightgray mq450:flex-wrap">
                    <div className="w-[124px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/claritynotificationline.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/birepeat.svg"
                        />
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/iconoircalendar.svg"
                        />
                      </div>
                    </div>
                    <div className="rounded-lg bg-seagreen-300 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
                      <div className="relative leading-[20px] font-medium inline-block min-w-[72px]">
                        ADD TASK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <TextCell1
                buyGroceries="Buy groceries"
                phstar="/phstar.svg"
                propGap="20px"
                propAlignSelf="stretch"
                propWidth="unset"
              />
              <TextCell1
                buyGroceries="Finish project report"
                phstar="/phstar-1.svg"
                propGap="20px"
                propAlignSelf="stretch"
                propWidth="unset"
              />
              <TextCell1
                buyGroceries="Call the bank"
                phstar="/phstar.svg"
                propGap="20px"
                propAlignSelf="stretch"
                propWidth="unset"
              />
              <TextCell1
                buyGroceries="Schedule dentist appointment"
                phstar="/phstar.svg"
                propGap="20px"
                propAlignSelf="stretch"
                propWidth="unset"
              />
              <TextCell1
                buyGroceries="Plan weekend trip"
                phstar="/phstar.svg"
                propGap="20px"
                propAlignSelf="stretch"
                propWidth="unset"
              />
              <FrameComponent1 />
            </div>
          </div>
        </div>
        <MainContent1 />
      </main>
    </div>
  );
};

export default TODONavEditlistDark;
