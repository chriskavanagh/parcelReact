//import React from "react";
import { useQuery } from "react-query";

const fetchList = async () => {
  const results = await fetch(`https://randomuser.me/api/?page=3&results=10`);
  return results.json();
};

export function usePeopleData() {
  //const { data, isLoading, error } = useQuery("list", fetchList);
  return useQuery("list", fetchList);
}
