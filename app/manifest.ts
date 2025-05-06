import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boujee Beverages",
    short_name: "Boujee",
    description: "Mobile beverage experience with freeze-dried candy, specialty coffee, and fresh squeeze lemonade",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#db2777",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
