import { StaticImageData } from "next/image";

interface Project {
  sub: string;
  title: string;
  from: string;
  to: string;
  text: string;
  image?: boolean;
  date?: string;
  profilePhotos?: StaticImageData[];
}
