import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";

export const updateDate = (lang = "en") => {
    const now = dayjs().locale(lang);
    const formattedDate = now.format("dddd, MMMM D, YYYY");
    const formattedTime = now.format("h:mm:ss A");
    return {
        formattedDate,
        formattedTime,
    };
};

export const weatherBackground = {
    Clear: "clear",
    Clouds: "cloud",
    Rain: "rain",
};
