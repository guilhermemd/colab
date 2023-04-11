import { getApi } from "../Api/getApi";

export interface IRandomUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
}

interface IResults {
  results: IRandomUser;
}

export async function useRandomUsers() {
  const url = "https://randomuser.me/api/?inc=name,email,picture,login";

  const { results }: IResults = await getApi(url);

  return {
    results,
  };
}
