export default async function users(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { username } = req.query;
  if (
    typeof username !== "string" ||
    !/^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(username)
  )
    return res.status(400).json({ error: "Invalid GitHub username" });
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}`,
      {
        headers: process.env.GH_TOKEN
          ? { Authorization: `Bearer ${process.env.GH_TOKEN}` }
          : {},
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!response.ok)
      return res
        .status(response.status === 404 ? 404 : 503)
        .json({
          error:
            response.status === 404
              ? "User not found"
              : "GitHub is temporarily unavailable",
        });
    const user = await response.json();
    return res
      .status(200)
      .json({
        id: user.id,
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
      });
  } catch {
    return res.status(503).json({ error: "GitHub is temporarily unavailable" });
  }
}
