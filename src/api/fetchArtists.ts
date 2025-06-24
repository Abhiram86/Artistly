import { artists } from "@/lib/artists";

export const fetchArtists = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(artists);
    }, 300);
  });
};
