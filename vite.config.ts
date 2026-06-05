import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Must match the GitHub repo name for project-site Pages (username.github.io/REPO_NAME/)
const GITHUB_PAGES_BASE = "/optifeed-smart-farming-solutions-main/";

function resolveBase(mode: string): string {
  if (mode !== "production") return "/";
  // Vercel serves from domain root; GitHub Pages uses a repo subpath.
  if (process.env.VERCEL) return "/";
  return GITHUB_PAGES_BASE;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: resolveBase(mode),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
