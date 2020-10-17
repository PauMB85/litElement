import { LitElement, html } from 'lit-element';

export class CallbackComponent extends LitElement {

   static get properties() {
       return {
           callback: { type: Object }
       };
   }

    render() {
        return html`
            <button @click=${this.sendToFather}>click me</button>
        `;
    }

    sendToFather(event) {
        const myObjtect = {
            name: 'Pau'
        };
        this.callback(myObjtect);
    }



}
customElements.define('callback-component', CallbackComponent);