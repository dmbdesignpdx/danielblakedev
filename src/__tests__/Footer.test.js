import { within } from "@testing-library/dom";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { JSDOM } from "jsdom";
import { beforeEach, describe, expect, test } from "vitest";

import Footer from "../components/Footer.astro";

describe("Footer component", () => {
  let ui;

  beforeEach(async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Footer);
    ui = within(new JSDOM(html).window.document.body);
  });

  test("renders its heading", () => {
    expect(ui.getByRole("heading", { name: "Footer" })).toBeInTheDocument();
  });

  test("renders a contentinfo landmark", () => {
    expect(ui.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("renders its content links", () => {
    const astro = ui.getByRole("link", { name: /astro\.js/i });
    const vercel = ui.getByRole("link", { name: /vercel/i });

    expect(astro).toHaveAttribute("href", "https://astro.build/");
    expect(vercel).toHaveAttribute("href", "https://vercel.com");
  });

  test("renders the copyright with the current year", () => {
    const year = new Date().getFullYear();

    expect(ui.getByText(new RegExp(`Copyright ${year} All rights reserved`))).toBeInTheDocument();
  });
});
