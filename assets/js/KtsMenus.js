class KtsMenus extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<a href="index.html">KTS PLUS</a>
		`;
	}
}

// Define the custom element
customElements.define('kts-menus', KtsMenus);