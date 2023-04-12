"use client";
import Link from "next/link";
import { Envelope, User } from "phosphor-react";
import { useRandomUsers } from "@/talons/RandomUsers/useRandomUsers";
// {`/user/${user.login.username}`}
export async function RandomUser() {
  const { user } = await useRandomUsers();
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 flex items-center justify-center m-auto">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden shadow-2xl">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={user.picture.large}
          alt={`Portrait of ${user.name.first} ${user.name.last}`}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <div className="flex items-center mb-2 gap-2">
            <User size={20} />{" "}
            <span className="text-gray-800 text-base">
              {user.login.username}
            </span>
          </div>
          <div className="flex items-center mb-2 gap-2">
            <Envelope size={20} />{" "}
            <span className="text-gray-800 text-base">{user.email}</span>
          </div>
          <div className="flex items-center">
            <Link
              href={`/userDetails/${user.login.username}`}
              className="bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2"
            >
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
