import { Platfrom } from "./Platfrom";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platfrom }[];
  metacritic: number;
  rating_top: number;
}
