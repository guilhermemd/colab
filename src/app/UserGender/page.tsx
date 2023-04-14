"use client";
import CardUserDetails from "@/components/CardUserDetails/CardUserDetails";
import Loader from "@/components/Loader/Loader";

import { useUserGender } from "@/talons/UserGender/useUserGender";
export default function UserGender() {
  const { userGender, setGender } = useUserGender();

  const userDetails = userGender[0];

  if (!userDetails) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-4">
        <h1 className="text-4xl text-gray-600 font-bold al text-center">
          Pick a Gender to generate an User
        </h1>
        <div className="flex justify-between items-center gap-4">
          <button
            onClick={() => setGender("female")}
            className="bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2 w-24"
          >
            Female
          </button>
          <button
            onClick={() => setGender("male")}
            className="bg-sky-500 rounded-lg hover:bg-sky-400 m-auto cursor-pointer border-2 border-black px-4 py-2 w-24"
          >
            Male
          </button>
        </div>
      </div>

      {userDetails ? <CardUserDetails userDetails={userDetails} /> : null}
    </>
  );
}
