import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

class BowlingWeb extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Welcome";
    this.image = "";
    this.content = "<p>Loading...</p>";
  }

  static styles = css`
    :host {
      display: block;
      background: var(--card);
      color: var(--text);
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', sans-serif;
      transition: all 0.3s ease;
      animation: fadeIn 0.4s ease;
    }

    h2 {
      color: #4A90E2;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    img {
      display: block;
      max-width: 100%;
      max-height: 300px;
      width: auto;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
      margin-bottom: 1.5rem;
      animation: fadeIn 0.6s ease;
    }

    p, li, a {
      font-size: 1rem;
      color: var(--text);
      line-height: 1.6;
    }

    a {
      color: #4A90E2;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .home-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "reserve address"
        "hours photo"
        "business event";
      gap: 2rem;
      margin-top: 2rem;
    }

    .home-box {
      background: var(--card);
      border-radius: 12px;
      padding: 1rem 1.5rem;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .home-box h3 {
      margin-top: 0;
      font-size: 1.3rem;
      color: #4A90E2;
    }

    .reserve-button {
      background: #4A90E2;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      margin-top: 0.5rem;
    }

    .reserve-button:hover {
      background: #357acb;
    }

    .photo-shuffler {
      height: 300px;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 1.1rem;
      border-radius: 10px;
    }

    .reserve { grid-area: reserve; }
    .address { grid-area: address; }
    .hours { grid-area: hours; }
    .photo { grid-area: photo; }
    .business { grid-area: business; }
    .event { grid-area: event; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .home-grid {
        grid-template-areas:
          "reserve"
          "address"
          "hours"
          "photo"
          "business"
          "event";
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <h2>${this.title}</h2>
      ${this.image ? html`<img src="${this.image}" alt="${this.title}" />` : ""}
      ${unsafeHTML(this.content)}
    `;
  }
}

customElements.define("bowling-web", BowlingWeb);
