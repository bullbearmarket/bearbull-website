import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes using clsx and tailwind-merge.
 * This utility ensures that conditional classes and overrides are handled 
 * in a way that respects the Tailwind cascade.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
