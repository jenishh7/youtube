export const API_KEY = "AIzaSyCfx4U3XBG1XvNvAfEMJVdTLWq95WvCo5U";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
