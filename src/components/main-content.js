import TextCell1 from "./text-cell1";
import TaskFooter from "./task-footer";
import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[452px] bg-gray1-100 flex flex-col items-end justify-start pt-14 px-0 pb-[33px] box-border gap-[168.2px] max-w-[calc(100%_-_934px)] shrink-0 text-left text-mini text-whitesmoke-100 font-outfit mq450:hidden mq750:max-w-full mq1050:gap-[84px] mq1050:pt-[23px] mq1050:pb-5 mq1050:box-border ${className}`}
    >
      <div className="w-[404px] hidden max-w-full" />
      <div className="w-[404px] flex flex-col items-start justify-start max-w-full">
        <TextCell1
          buyGroceries="Buy groceries"
          phstar="/phstar-9.svg"
          propGap="-17.5px"
          propAlignSelf="stretch"
          propWidth="unset"
        />
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/materialsymbolslightadd.svg"
          />
          <div className="w-[61px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Add Step
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-1 pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/claritynotificationline1.svg"
          />
          <div className="w-[90px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Set Reminder
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
            alt=""
            src="/iconoircalendar1.svg"
          />
          <div className="w-[94px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Add Due Date
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 text-center text-5xs-4 text-schemes-outline-variant font-roboto">
          <div className="w-[214.2px] rounded-[14.84px] bg-gray1-300 overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-end justify-center pt-[8.5px] pb-[5px] pr-1.5 pl-3 gap-[4.2px] text-left border-b-[0.5px] border-solid border-schemes-outline-variant">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16.6px]">
                <div className="self-stretch relative tracking-[0.05px] leading-[11px] font-medium">
                  Select date
                </div>
                <div className="self-stretch relative text-mid leading-[21.21px] text-schemes-surface-variant">
                  Mon, Aug 17
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-[2.1px] px-0.5">
                <div className="w-[21px] h-[21.2px] rounded-[53.02px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="w-[21.2px] flex flex-row items-center justify-center pt-[4.3px] px-1 pb-[4.2px] box-border">
                    <img
                      className="h-[12.7px] w-[12.7px] relative"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between pt-[2.1px] pb-[2.2px] pr-1.5 pl-2 gap-[20px]">
              <div className="flex flex-col items-start justify-start">
                <div className="rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center py-[5.3px] pr-0.5 pl-1 gap-[4.2px]">
                  <div className="relative tracking-[0.05px] leading-[11px] font-medium inline-block min-w-[43px]">
                    August 2023
                  </div>
                  <img
                    className="h-[9.5px] w-[9.5px] relative"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-center justify-center pt-[2.2px] px-0.5 pb-0.5">
                  <div className="w-[21px] h-[21.2px] rounded-[53.02px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                    <div className="w-[21.2px] flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px] box-border">
                      <img
                        className="h-[12.7px] w-[12.7px] relative"
                        loading="lazy"
                        alt=""
                        src="/icon-2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center pt-[2.2px] px-0.5 pb-0.5">
                  <div className="w-[21px] h-[21.2px] rounded-[53.02px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
                    <div className="w-[21.2px] flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px] box-border">
                      <img
                        className="h-[12.7px] w-[12.7px] relative"
                        loading="lazy"
                        alt=""
                        src="/icon-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-1.5 z-[1] text-4xs-5 text-schemes-surface-variant">
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-[11px]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                    S
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-2.5 z-[1]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[8px]">
                    M
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-[11px]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                    T
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-2.5 z-[1]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[8px]">
                    W
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-[11px]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                    T
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-[11px] z-[1]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[5px]">
                    F
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[6.2px] px-[11px]">
                  <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                    S
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end">
                <div className="flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px]">
                      <div className="h-[12.7px] w-[15px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px]">
                      <div className="h-[12.7px] w-[15px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] text-silver">
                  <div className="w-[21.2px] rounded-[53.02px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[0.5px] border-solid border-silver">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        6
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        8
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-[7px]">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[6px]">
                        9
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        11
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        13
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        14
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        15
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        16
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center py-[2.1px] px-[3px] relative gap-[5.3px] text-5xs-4 text-gray1-300">
                  <div className="w-[79.86%] h-[21.2px] absolute !m-[0] top-[calc(50%_-_10.6px)] right-[48.96%] left-[-28.82%] bg-m3-sys-light-secondary-container hidden z-[0]" />
                  <div className="w-[79.86%] h-[21.2px] absolute !m-[0] top-[calc(50%_-_10.6px)] right-[-31.25%] left-[51.39%] bg-m3-sys-light-secondary-container hidden z-[1]" />
                  <div className="rounded-[53.02px] bg-gainsboro-300 overflow-hidden flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-center py-[5.1px] px-1.5">
                      <div className="relative tracking-[0.05px] leading-[11px] font-medium inline-block min-w-[9px]">
                        17
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        18
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        19
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        20
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        21
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        22
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        23
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        24
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        25
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        26
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        27
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        28
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        29
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        30
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex-1 rounded-[53.02px] overflow-hidden flex flex-row items-center justify-center">
                    <div className="flex-1 flex flex-row items-center justify-center py-[4.1px] px-1">
                      <div className="relative tracking-[0.27px] leading-[13px] inline-block min-w-[11px]">
                        31
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-[3px] z-[1]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px]">
                      <div className="h-[12.7px] w-[15px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-[3px]">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row items-center justify-center pt-[4.2px] px-1 pb-[4.3px]">
                      <div className="h-[12.7px] w-[15px] relative" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden flex-row items-start justify-center">
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center py-[2.1px] px-0.5">
                  <div className="flex flex-row items-center justify-center">
                    <div className="h-[21.2px] flex flex-row items-center justify-center py-[5.3px] px-[5px] box-border">
                      <div className="h-[12.7px] w-[11.7px] relative" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between pt-[4.2px] px-1.5 pb-[6.4px] gap-[0px] [row-gap:20px] text-gainsboro-300">
              <div className="w-[30.7px] rounded-[53.02px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row items-center justify-center py-[5.1px] px-1.5">
                  <div className="relative tracking-[0.05px] leading-[11px] font-medium inline-block min-w-[18px]">
                    Clear
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end py-0 pr-0 pl-[108px] gap-[4.2px]">
                <div className="rounded-[53.02px] overflow-hidden flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center py-[5.1px] px-1.5">
                    <div className="relative tracking-[0.05px] leading-[11px] font-medium inline-block min-w-[23px]">
                      Cancel
                    </div>
                  </div>
                </div>
                <div className="w-[22.7px] rounded-[53.02px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <div className="self-stretch flex flex-row items-center justify-center py-[5.1px] px-1.5">
                    <div className="relative tracking-[0.05px] leading-[11px] font-medium inline-block min-w-[10px]">
                      OK
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/birepeat1.svg"
          />
          <div className="w-[49px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Repeat
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-4 px-[42px] pb-[18px] text-gray11-200 border-t-[1.5px] border-solid border-darkolivegreen">
          <div className="w-[70px] relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            Add Notes
          </div>
          <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <TaskFooter />
    </div>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
