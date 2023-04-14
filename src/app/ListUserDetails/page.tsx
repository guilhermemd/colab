"use client";

import CardUserDetails from "@/components/CardUserDetails/CardUserDetails";

export default function ListUserDetails() {
  const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue !== null) {
        return JSON.parse(serializedValue);
      }
    }
    return null;
  };

  const userDetails = getFromLocalStorage("userDetails");
  if (userDetails === null) {
    return <div>Error Take me to Home Page</div>;
  }

  return <CardUserDetails userDetails={userDetails} />;
}
