import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import birthday from "../assets/img.jpg"
import unsplashGrey from "../assets/unsplashgrey.png"
export default function Calendar() {
    return (
      <div>
        <div
          className="p-6 bg-white rounded-lg shadow-md w-fit"
          style={{ transform: "scale(1.2)", transformOrigin: "top left" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar defaultValue={dayjs("2022-04-17")} />
          </LocalizationProvider>
        </div>

        <div>
          <p className="text-lg font-semibold mb-22">Birthday Calendar</p>

          <div className="flex gap-4">
            <div className="w-[211px] h-[214px] border border-gray-300 rounded-[12px] p-4 flex flex-col items-center text-center shadow-sm">
              <img
                src={birthday}
                alt="birthday"
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <p className="text-sm font-semibold">Robert Whistable</p>
              <p className="text-xs text-gray-600">Product Manager</p>
              <p className="text-xs text-gray-500">15 Feb 1998</p>
            </div>

            <div className="w-[211px] h-[214px] border border-gray-300 rounded-[12px] p-4 flex flex-col items-center text-center shadow-sm">
              <img
                src={unsplashGrey}
                alt="unsplashgrey"
                className="w-24 h-24 rounded-full object-cover mb-2"
              />
              <p className="text-sm font-semibold">Robert Whistable</p>
              <p className="text-xs text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    );
}
