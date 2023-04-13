"use client";
import axios from "axios";
import { format } from "date-fns";

import { useState, useEffect, useMemo } from "react";

export function useUserGender() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?gender=female")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const userGender = useMemo(() => data.results, [data]);

  const formattedDate = (date: string) => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  return { userGender, formattedDate };
}
