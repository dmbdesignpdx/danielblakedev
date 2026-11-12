import { within } from "@testing-library/dom";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { JSDOM } from "jsdom";
import { beforeEach, describe, expect, test } from "vitest";

import Hero from "../components/Hero.astro";
import { Links, Name } from "../constants";

describe("Hero component", () => {
  let ui;

  beforeEach(async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Hero);
    ui = within(new JSDOM(html).window.document.body);
  });

  test("renders its heading", () => {
    expect(ui.getByRole("heading", { name: Name.FULL })).toBeInTheDocument();
  });

  test("renders its title", () => {
    expect(ui.getByText(Name.CAREER)).toBeInTheDocument();
  });

  test("renders a contact link", () => {
    const link = ui.getByRole("link", { name: RegExp(Links.Contact.LABEL, "i") });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", Links.Contact.URL);
  });
});
