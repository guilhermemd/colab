import Link from "next/link";
import { RandomUser } from "../components/RandomUser/RandomUser";
export default function Home() {
  return (
    <div>
      {/*@ts-ignore*/}
      <RandomUser />
      <div className="m-auto grid grid-cols-2 items-center max-w-xs">
        <Link
          href="/UsersList"
          className="w-28 bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2"
        >
          Users List
        </Link>
        <Link
          href="/UserGender"
          className="w-28 bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black pl-4 py-2"
        >
          By Gender
        </Link>
      </div>
    </div>
  );
}
