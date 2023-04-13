"use client";
import axios from "axios";
import { format } from "date-fns";

import { useState, useEffect, useMemo } from "react";
export interface IUsersList {
  name: {
    first: string;
  };
  picture: {
    medium: string;
  };
}

interface IUsersListResult {
  results: IUsersList[];
}

export function useUsersList() {
  const [data, setData] = useState([]);
  const [showUser, setShowUser] = useState(10);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${showUser}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const usersList = useMemo(() => data.results, [data]);

  return {
    usersList,
    setShowUser,
  };
}
