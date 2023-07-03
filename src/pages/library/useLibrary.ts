import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const useLibrary = () => {
  const router = useRouter();
  const { DATABASE, state } = useSelector((state: IRootState) => state);
  const { twentymovies } = DATABASE;
  const { watched } = state;
  useEffect(() => {
    if (twentymovies.length === 0) {
      router.push("/");
    }
  }, []);
  return { watched };
};
