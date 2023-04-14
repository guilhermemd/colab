import axios from "axios";
import { format } from "date-fns";
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

export function useUserGender() {
  const [userGender, setUserGender] = useState<User[]>([]);
  const [gender, setGender] = useState("female");

  useEffect(() => {
    axios
      .get<ApiResponse>(`https://randomuser.me/api/?gender=${gender}`)
      .then((response) => {
        setUserGender(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [gender]);

  const formattedDate = (date: string) => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  return { userGender, formattedDate, setGender };
}
