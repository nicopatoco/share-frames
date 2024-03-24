import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function displayUsername(username: string | undefined): string {
  if (username && username.length > 20) {
      return username.substring(0, 6) + "...";
  } else if (username) {
      return username;
  } else {
      return ""; // or any other default value you prefer
  }
}