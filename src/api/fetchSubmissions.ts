import { artists } from "@/lib/artists";

export const fetchSubmissions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(artists.slice(8, 18));
    }, 300);
  });
};
