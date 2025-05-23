import { html, fixture, expect } from '@open-wc/testing';
import "../bowling-web.js";

describe("BowlingWeb test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <bowling-web
        title="title"
      ></bowling-web>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
