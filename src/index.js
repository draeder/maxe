// Import the softer text font
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// Apply the softer text font to the entire project
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: 'Roboto', sans-serif; /* Apply Roboto font as the default font */
  }
`;
document.head.appendChild(style);

// Export your components
export { default as PageContainer } from "./components/page-container.js";
export { default as PageItem } from "./components/page-item.js";
