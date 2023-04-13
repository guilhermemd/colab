"use client";
import Link from "next/link";

import { useUsersList } from "@/talons/UsersList/useUsersList";
export default function UsersList() {
  const { usersList, setShowUser } = useUsersList();

  if (!usersList) {
    return <div> Loading...</div>;
  }
  console.log({ usersList });
  return (
    <div className="p-5 max-w-lg m-auto">
      <div>Select how many users to show above:</div>

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
          {usersList.map((user) => (
            <tr key={user.picture.medium}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.picture.medium}
                  alt=""
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {user.name.first}
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
