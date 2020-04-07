if (typeof window !== "undefined") {
  class Headline extends HTMLElement {
    constructor() {
      super();
    }

    //Important to register dynamic attributes here, otherwise attributeChangedCallback won't be fired
    static get observedAttributes() {
      return ["label"];
    }

    //callbacka after webcomponents is attached to the DOM
    connectedCallback() {
      if (this.isConnected) {
        const label = this.getAttribute("label") || "no headline";
        this.el = document.createElement("div");
        this.el.innerText = label;
        this.appendChild(this.el);
      }
    }

    //callback for attribute changes
    attributeChangedCallback(name, oldVal, newVal) {
      //callback is called one time before the connected callback, therefore check if this.el is available
      if (name === "label" && this.el) {
        this.el.innerText = newVal;
      }
    }
  }

  //register your webcomponent
  window.customElements.define("my-headline", Headline);
}
