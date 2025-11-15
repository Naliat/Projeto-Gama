export const api = {
  getFeed: async () => {
    const res = await fetch("http://localhost:3000/feed");
    return res.json();
  }
};
