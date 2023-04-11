import { useRandomUsers } from "@/talons/RandomUsers/useRandomUsers";

export async function RandomUser() {
  const { results } = await useRandomUsers();
  console.log(results);
  return <div>Random Users</div>;
}
