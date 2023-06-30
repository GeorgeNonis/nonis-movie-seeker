import { Movies } from "@/pages/interfaces";
interface MOVIES_DB_PROPS {
  theme: boolean;
  watched: Movies[];
  queued: Movies[];
}

export const APP_TITLE = `Unraveling Noni's World`;

export const MOVIES_DB: MOVIES_DB_PROPS = {
  // "white"
  theme: false,
  watched: [],
  queued: [],
};

export const DB = "MOVIES_STORAGE";
