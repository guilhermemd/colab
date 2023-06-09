"use client";
import Link from "next/link";

import { useUsersList } from "@/talons/UsersList/useUsersList";
import Loader from "@/components/Loader/Loader";

export default function UsersList() {
  const {
    usersList,
    showUsers,
    handleUserChange,
    usersShowing,
    saveToLocalStorage,
  } = useUsersList();

  if (usersList.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="p-5">
        <div className="my-4 flex justify-center">
          <label
            htmlFor="users"
            className="mr-2 text-lg text-gray-600 font-bold al text-center"
          >
            Select how many users:
          </label>
          <select
            id="users"
            className="border border-gray-300 rounded px-2 py-1"
            value={showUsers}
            onChange={handleUserChange}
          >
            {usersShowing.map((userShowing) => (
              <option key={userShowing} value={userShowing}>
                {userShowing}
              </option>
            ))}
          </select>
        </div>
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
            {usersList?.map((user, index) => (
              <tr key={index}>
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
                  <button
                    onClick={() =>
                      saveToLocalStorage("userDetails", usersList[index])
                    }
                  >
                    <Link
                      href="/ListUserDetails"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-5 flex justify-center">
          <Link
            href="/"
            className=" bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
