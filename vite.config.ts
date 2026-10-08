import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the static build run from any folder or host
export default defineConfig({ base: "./", plugins: [react()] });
