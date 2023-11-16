import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getShortName = (name: string) => {
  return name
    .split(" ")
    .map((char) => char[0])
    .join("")
    .toUpperCase();
};
