import type { NextApiRequest, NextApiResponse } from "next";

import { singlePageQuery } from "../../utils/queries";
import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("runn")
  if (req.method === "GET") {
    const { slug }: any = req.query;
    console.log("slug", slug)

    const query = singlePageQuery(slug);

    const user = await client.fetch(query);

    res.status(200).json(user);
  }
}
