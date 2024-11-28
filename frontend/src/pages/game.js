let template = document.createElement("template");

template.innerHTML = `<div id="game-page" class="game-page"> Hello from GAME... ! </div>`;


class GAME extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'src/assets/style/game-page.css');
    this.shadow.appendChild(linkElem);
  }

  connectedCallback() {
    console.log("GAME is Connected");
  }
  
  disconnectedCallback() {
    console.log('GAME is Disonnected');
  }

  static get observedAttributes() {
    return[/* array of attribute names to monitor for changes */];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
  }

}
customElements.define('game-page', GAME);

export default GAME;
