class PageItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Default to left alignment
    this.alignment = "left";

    // Check if developer has provided a custom alignment
    const alignAttribute = this.getAttribute("align");
    if (
      alignAttribute &&
      ["left", "center", "right"].includes(alignAttribute)
    ) {
      this.alignment = alignAttribute;
    }

    // Apply styles based on alignment
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-bottom: 10px; /* Add margin to create space between page items */
          padding: 10px; /* Add padding to the page item */
          text-align: ${this.alignment}; /* Apply alignment */
          /* Add more styles as needed */
        }
      </style>
      <slot></slot>`;
  }

  // Setter method for alignment attribute
  set align(value) {
    if (["left", "center", "right"].includes(value)) {
      this.alignment = value;
      this.updateAlignment();
    } else {
      console.error(
        `Invalid alignment value: ${value}. Alignment must be 'left', 'center', or 'right'.`
      );
    }
  }

  // Update alignment when setter is called
  updateAlignment() {
    this.shadowRoot.querySelector("style").textContent = `
      :host {
        display: block;
        margin-bottom: 10px;
        padding: 10px;
        text-align: ${this.alignment};
      }
    `;
  }
}

customElements.define("page-item", PageItem);
