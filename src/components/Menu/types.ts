import type { Photo } from "../Photo/types";

export interface Item {
  label: string;
  href?: string;
  image: Photo;
}
