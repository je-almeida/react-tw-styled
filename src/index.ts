import { twMerge } from "tailwind-merge";

export const twStyle = (defaultClasses: string) => {
  return (classes?: string) => {
    return twMerge(`${defaultClasses} ${classes}`.trim()); // concat classes merged to tailwind
  };
};
