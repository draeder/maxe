class PageContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.defaultAlignment = "center"; // Default alignment
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: ${this.defaultAlignment}; /* Set default alignment */
          flex-direction: column;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          visibility: hidden;
          transition: visibility 0s 0.3s, opacity 0.3s;
        }
      </style>
      <slot></slot>`;
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.shadowRoot.host.style.opacity = 1;
      this.shadowRoot.host.style.visibility = "visible";
    });
  }

  // Setter method for alignment attribute
  set align(value) {
    if (["flex-start", "center", "flex-end"].includes(value)) {
      this.shadowRoot.host.style.justifyContent = value;
    } else {
      console.error(
        `Invalid alignment value: ${value}. Alignment must be 'flex-start', 'center', or 'flex-end'.`
      );
    }
  }
}

customElements.define("page-container", PageContainer);
