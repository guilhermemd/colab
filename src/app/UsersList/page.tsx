import Link from "next/link";

import { useUsersList } from "@/talons/UsersList/useUsersList";
// import { RefreshButton } from "@/app/RefreshButton/RefreshButton";
export default async function UsersList() {
  const { results } = await useUsersList();
  return (
    <div className="p-5 max-w-lg m-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow-2xl">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
              Picture
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Link
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((person) => (
            <tr key={person.picture.medium}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.picture.medium}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {person.name.first}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
