export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = "lagnpatrika-24262741857.asia-south1.run.app";

    const newRequest = new Request(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });

    return fetch(newRequest);
  },
};
