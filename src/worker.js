// Serves the static site in ./public and sends www.labr.club to the apex domain.
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.hostname === "www.labr.club") {
      url.hostname = "labr.club";
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(req);
    const out = new Response(res.body, res);
    out.headers.set("x-content-type-options", "nosniff");
    out.headers.set("referrer-policy", "strict-origin-when-cross-origin");
    return out;
  },
};
