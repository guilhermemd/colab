import CardUserDetails from "@/components/CardUserDetails/CardUserDetails";
import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
import Link from "next/link";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { userDetails } = await useUserDetails({ userName });

  return <CardUserDetails userDetails={userDetails} />;
}
