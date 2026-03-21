import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Feecom Electronics & Exchange LLC",
    short_name: "Feecom Electronics",
    description:
      "Online buyer, seller, and distributor of mobile devices and electronics.",
    start_url: "/",
    display: "standalone",
    background_color: "#141519",
    theme_color: "#141519",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
