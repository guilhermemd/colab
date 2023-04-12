import Link from "next/link";
import { RandomUser } from "../components/RandomUser/RandomUser";
export default function Home() {
  return (
    <div>
      {/*@ts-ignore*/}
      <RandomUser />
      <div className="flex justify-center items-center">
        <Link
          href="/usersList"
          className="bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2"
        >
          Users List
        </Link>
      </div>
    </div>
  );
}
