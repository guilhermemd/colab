"use client";
import axios from "axios";

import { ChangeEvent } from "react";

import { useState, useEffect } from "react";

interface ApiResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
export function useUsersList() {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState("10");
  if (!process.env.NEXT_PUBLIC_DB_HOST) {
    throw new Error(
      "You have to declare a variable NEXT_PUBLIC_DB_HOST in an .env"
    );
  }

  const url = `${process.env.NEXT_PUBLIC_DB_HOST}/api/userList/${showUsers}`;
  useEffect(() => {
    axios
      .get<ApiResponse>(url)
      .then((response) => {
        setUsersList(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showUsers]);

  function handleUserChange(event: ChangeEvent<HTMLSelectElement>) {
    setShowUsers(event.target.value);
  }

  const usersShowing = ["10", "15", "25", "40", "50"];

  const saveToLocalStorage = (key: string, value: User) => {
    if (typeof window !== "undefined") {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    }
  };

  return {
    usersList,
    showUsers,
    handleUserChange,
    usersShowing,
    saveToLocalStorage,
  };
}
