import { twMerge } from "tailwind-merge";

export const styled = (defaultClasses: string) => {
  return (classes?: string) => {
    return twMerge(`${defaultClasses} ${classes}`.trim()); // concat classes merged to tailwind
  };
};
