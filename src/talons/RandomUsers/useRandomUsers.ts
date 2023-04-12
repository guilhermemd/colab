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
interface IInfo {
  seed: string;
  results: number;
  page: number;
  version: string;
}

interface IResults {
  results: IRandomUser[];
  info: IInfo;
}

export async function useRandomUsers() {
  const url = "https://randomuser.me/api/?inc=name,email,picture,login,info";

  const { results, info }: IResults = await getApi(url);
  const [user] = results;

  return {
    user,
    info,
  };
}
