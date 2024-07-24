import { get, post } from "@/helper/web.requests";
import { FilterState } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUsers = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await get("/get-users");
      return res;
    },
  });
};

export const useContacts = (data: FilterState) => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await post("/get-contacts", data);
      return res;
    },
  });
};