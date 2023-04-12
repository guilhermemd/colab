import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { userDetails } = await useUserDetails({ userName });
  const { name, picture, email, phone, location } = userDetails;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 flex flex-col md:flex-row">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
          src={picture.large}
          alt={`${name.first} ${name.last}`}
        />
      </div>
      <div className="md:ml-6 mt-4 md:mt-0">
        <h2 className="text-xl font-bold mb-2">
          {name.first} {name.last}
        </h2>
        <p className="text-gray-600 mb-4">{email}</p>
        <p className="text-gray-600 mb-4">{phone}</p>
        <p className="text-gray-600">
          {location.street.number} {location.street.name}, {location.city},{" "}
          {location.state} {location.postcode}, {location.country}
        </p>
      </div>
    </div>
  );
}
