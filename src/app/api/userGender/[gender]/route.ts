import { getApi } from "@/talons/Api/getApi";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  // GAMBIARRA
  const { url } = req;
  const param = url.split("/");
  const gender = param[param.length - 1];
  if (req.method === "GET") {
    try {
      const userByGender = await getApi(
        `https://randomuser.me/api/?gender=${gender}`
      );
      return NextResponse.json(userByGender);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Error: method does not exist");
  }
}
