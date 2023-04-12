import { format } from "date-fns";

import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { userDetails } = await useUserDetails({ userName });
  const { name, picture, email, phone, cell, location, dob, gender } =
    userDetails;
  const formattedDate = format(new Date(dob.date), "dd/MM/yyyy");
  console.log("street", location.street);
  return (
    <div className="flex flex-col items-center p-8">
      <img
        src={picture.large}
        alt="User profile"
        className="rounded-full w-40 h-40 mb-4"
      />
      <h2 className="text-2xl font-bold mb-4">
        {name.title} {name.first} {name.last}
      </h2>
      <p className="text-gray-600 mb-4">{email}</p>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-600">
          <span className="font-bold">Gender:</span> {gender}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">DOB:</span> {formattedDate}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Cell:</span> {cell}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Address:</span>
          {location.street.name}, {location.street.number}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">State:</span>
          {userDetails.location.state} ${location.postcode}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Post Code:</span>
          {location.postcode}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Nationality:</span> {userDetails.nat}
        </p>
      </div>
    </div>
  );
}
