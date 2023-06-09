import { getApi } from "../Api/getApi";
interface IUserDetails {
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

export interface IResultsDetails {
  results: IUserDetails[];
}

export async function useUserDetails(props: { userName: string }) {
  const { userName } = props;

  if (!process.env.NEXT_PUBLIC_DB_HOST) {
    throw new Error(
      "You have to declare a variable NEXT_PUBLIC_DB_HOST in an .env"
    );
  }

  const url = `${process.env.NEXT_PUBLIC_DB_HOST}/api/userDetails/${userName}`;

  const { results }: IResultsDetails = await getApi(url);

  const [userDetails] = results;

  return {
    userDetails,
  };
}
