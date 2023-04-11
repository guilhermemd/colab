import Link from "next/link";
import { IRandomUser } from "@/talons/RandomUsers/useRandomUsers";
import { useRandomUsers } from "@/talons/RandomUsers/useRandomUsers";

export async function RandomUser() {
  const { results } = await useRandomUsers();
  const [user] = results;
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={user.picture.large}
          alt={`Portrait of ${user.name.first} ${user.name.last}`}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-800 text-base mb-2">{user.email}</p>
          <div className="flex items-center justify-between">
            {/* <Link href={`/user/${user.login.username}`}>
              <a className="text-gray-400 hover:text-gray-600">Ver detalhes</a>
            </Link> */}
            <span className="text-gray-400">ID: {user.login.uuid}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
