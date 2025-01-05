// import { default_image } from "./const";

export const capitalizeFirstLetter = (string: string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

export const csv = (data: string) => {
  const array = data.split(",");
  return array;
};

export const readableDate = (date: Date, month_format = "long") => {
  const date_setter = new Date(date);
  const options = { year: "numeric", month: month_format, day: "numeric" };
  const formattedDate = date_setter.toLocaleDateString("en-US", options);
  return formattedDate;
};

export const readableNumericDate = (date: Date) => {
  if (date) {
    const date_setter = new Date(date);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const formattedDate = date_setter.toLocaleDateString("en-US", options);
    return formattedDate;
  }
};

export const hourAndMinuteDate = (date: Date) => {
  if (date) {
    const currentTime = new Date(date);
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero to minutes if needed

    const timeString = `${hours}:${formattedMinutes} ${amPm}`;

    return timeString;
  }
};

export const limitText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const displayProjectImage = (user_id: number, img: string, project_id: number) => {
  return `${import.meta.env.VITE_AWS_BUCKET_URL}/users/${user_id}/projects/${project_id}/images/${img}`;
};

export const displayAttachmentProposal = (user_id: number, job_id: number, file_name: string) => {
  return `${import.meta.env.VITE_APP_URL}/storage/users/${user_id}/job/${job_id}/proposal/attachment/${file_name}`;
};

// export const displayUserImage = (user_id: number, img: string) => {
//   if(img) {
//     return `${import.meta.env.VITE_AWS_BUCKET_URL}/users/${user_id}/images/avatar/${img}`;
//   } else {
//     return default_image;
//   }
// }

export const getMimeType = (name) => {
  return name.split(".").pop();
};

// export const togglePassword = (element) => {
//   if(element.getAttribute("type") == "password") {
//     element.setAttribute("type", "text");
//   } else {
//     element.setAttribute("type", "password");
//   }
// }
