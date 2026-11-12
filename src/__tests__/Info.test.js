import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test, describe, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import { within } from "@testing-library/dom";

import Info from "../components/Info.astro";
import { Section, Links } from "../constants";

describe("Info component", () => {
  let ui;

  beforeEach(async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Info);
    ui = within(new JSDOM(html).window.document.body);
  });

  test("renders its heading", () => {
    expect(
      ui.getByRole("heading", { name: Section.INFO }),
    ).toBeInTheDocument();
  });

  test("labels its section with the heading", () => {
    expect(ui.getByRole("region", { name: Section.INFO })).toBeInTheDocument();
  });

  test("renders a link for each info item", () => {
    expect(ui.getAllByRole("link")).toHaveLength(Links.Info.length);
  });

  test.each(Links.Info)("renders the $LABEL link", ({ LABEL, URL }) => {
    const link = ui.getByRole("link", { name: RegExp(LABEL, "i") });

    expect(link).toHaveAttribute("href", URL);
  });

  test("opens every link in a new tab safely", () => {
    for (const link of ui.getAllByRole("link")) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
