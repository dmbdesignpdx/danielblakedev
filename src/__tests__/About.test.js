import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test, describe, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import { within } from "@testing-library/dom";

import About from "../components/About.astro";

describe("About component", () => {
  let ui;

  beforeEach(async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(About);
    ui = within(new JSDOM(html).window.document.body);
  });

  test("renders its heading", () => {
    expect(ui.getByRole("heading", { name: "About" })).toBeInTheDocument();
  });

  test("renders its figure with a caption", () => {
    const figure = ui.getByRole("figure");

    expect(figure).toBeInTheDocument();
    expect(within(figure).getByText("💀 🖤 💻")).toHaveAttribute(
      "title",
      "I love code.",
    );
    expect(within(figure).getByText("I love code.")).toBeInTheDocument();
  });

  test("renders its markdown content", () => {
    expect(ui.getByText(/almost a decade/i)).toBeInTheDocument();
  });

  test("renders a contact email link", () => {
    const link = ui.getByRole("link", { name: "daniel@danielblake.dev" });

    expect(link).toHaveAttribute("href", "mailto:daniel@danielblake.dev");
  });
});
