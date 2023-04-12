import { getApi } from "../Api/getApi";

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

export async function useUsersList() {
  const url = "https://randomuser.me/api/?results=10";

  const { results }: IUsersListResult = await getApi(url);

  return {
    results,
  };
}
