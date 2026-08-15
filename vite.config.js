import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { federation } from "@module-federation/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "host",

      remotes: {
        Products: {
          type: "module",
          name: "products",
          entry: "https://clothes-shop-product-microfrontend.vercel.app/remoteEntry.js",
          // entry: "http://localhost:5001/remoteEntry.js",
          shareScope: "default",
        },
      },

      dts: false,
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
