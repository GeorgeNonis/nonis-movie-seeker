import { StringifyHandler } from "@/hooks/utils";
import { DB } from "../../../config";
import { DBInitialState } from "../interfaces";

export const localStorageMiddleware = ({ ...rest }: DBInitialState) => {
  localStorage.setItem(DB, StringifyHandler(rest));
};
