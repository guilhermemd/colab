import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { userDetails } = await useUserDetails({ userName });
  console.log("user details", userDetails);
  return <div>User Details</div>;
}
