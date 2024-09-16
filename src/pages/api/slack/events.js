export const config = {
  api: {
    bodyParser: false,
  },
};

import { appRunner } from './_app'

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res
      .status(405)
      .json({ error: "Sorry! This endpoint does not accept your requests." });
    return;
  }
  await appRunner.handleEvents(req, res);
}
