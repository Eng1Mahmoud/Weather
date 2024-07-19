import dayjs from "dayjs";
import "dayjs/locale/ar";
import "dayjs/locale/en";

export const updateDate = (lang = "en") => {
  const now = dayjs().locale(lang);
  return {
    formatted: now.format("dddd, MMMM D, YYYY h:mm:ss A"),
  };
};

export const weatherBackground = {
  Clear: "clear",
  Clouds: "cloud",
  Rain: "rain",
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
      );
    }
  });
};
