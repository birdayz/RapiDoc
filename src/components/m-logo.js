import { LitElement, html } from 'lit-element'; 

export default class MLogo extends LitElement {
  render() {
    return html`
    <img src="logo.png"/>
    `;
  }
}
// Register the element with the browser
customElements.define('m-logo', MLogo);
