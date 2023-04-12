import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
import Link from "next/link";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { userDetails, formattedDate } = await useUserDetails({ userName });
  const {
    name,
    picture,
    email,
    phone,
    cell,
    location,
    dob,
    gender,
    nat,
    login,
    registered,
  } = userDetails;

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col items-center justify-center py-7 px-3 border-2 border-gray-200 rounded-lg overflow-hidden shadow-2xl">
        <img
          src={picture.large}
          alt="User profile"
          className="rounded-full w-40 h-40 mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">
          {name.title} {name.first} {name.last}
        </h2>
        <p className="text-gray-600">
          <span className="font-bold">Email:</span> {email}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 border-2 my-8 border-gray-200 rounded-lg overflow-hidden shadow-2xl">
        <p className="text-gray-600">
          <span className="font-bold">Gender:</span> {gender}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">DOB:</span> {formattedDate(dob.date)}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Cell:</span> {cell}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Address:</span> {location.street.name}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Number:</span> {location.street.number}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">State:</span> {location.state}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Post Code:</span> {location.postcode}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Username:</span> {login.username}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Password:</span> {login.password}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Nationality:</span> {nat}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Registered:</span>{" "}
          {formattedDate(registered.date)}
        </p>
      </div>
      <Link
        href="/"
        className="bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2"
      >
        Back to Home
      </Link>{" "}
    </div>
  );
}
