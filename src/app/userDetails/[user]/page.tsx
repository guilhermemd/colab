import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
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
      <div className="grid grid-cols-2 gap-4">
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
          <span className="font-bold">Address:</span>
          {location.street.name}, {location.street.number}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">State:</span>
          {location.state}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Post Code:</span>
          {location.postcode}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Nationality:</span> {nat}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Username:</span> {login.username}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Password:</span> {login.password}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Registered:</span>{" "}
          {formattedDate(registered.date)}
        </p>
      </div>
    </div>
  );
}
