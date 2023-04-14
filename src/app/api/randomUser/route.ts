import { getApi } from "@/talons/Api/getApi";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  if (req.method === "GET") {
    try {
      const randomUser = await getApi(
        "https://randomuser.me/api/?inc=name,email,picture,login,info"
      );
      return NextResponse.json(randomUser);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Error: method does not exist");
  }
}
