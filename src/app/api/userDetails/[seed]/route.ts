import { getApi } from "@/talons/Api/getApi";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  // GAMBIARRA
  const { url } = req;
  const param = url.split("/");
  const userName = param[param.length - 1];
  if (req.method === "GET") {
    try {
      const userDetails = await getApi(
        `https://randomuser.me/api/?seed=${userName}`
      );
      return NextResponse.json(userDetails);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Error: method does not exist");
  }
}
