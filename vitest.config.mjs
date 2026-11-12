/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["src/__tests__/**/*.test.{js,ts}"],
    setupFiles: ["src/__tests__/_setup.js"],
  },
});
