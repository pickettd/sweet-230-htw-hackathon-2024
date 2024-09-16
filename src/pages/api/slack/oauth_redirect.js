import { appRunner } from './_app'

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res
      .status(405)
      .json({ error: "Sorry! This endpoint does not accept your requests." });
    return;
  }
  await appRunner.handleCallback(req, res);
}
