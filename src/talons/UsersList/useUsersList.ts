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
  const [showUsers, setShowUsers] = useState("10");

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=${showUsers}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showUsers]);
  const usersList = useMemo(() => data.results, [data]);

  function handleUserChange(event) {
    setShowUsers(event.target.value);
  }

  const usersShowing = ["1", "5", "10", "50"];

  return {
    usersList,
    showUsers,
    handleUserChange,
    usersShowing,
  };
}
