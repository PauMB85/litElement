import { LitElement, html } from 'lit-element';

export class DataBinding extends LitElement {

    static get properties () {
        return {
            value: { type: String },
            myObject: { type: Object }
        }
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <p>El parametro que recibimos en <b>value</b> es ${this.value}</p>
            <p>El objeto que recibimos es ${this.myObject.name} ${this.myObject.surname}</p>
        `;
    }
}
customElements.define('data-binding', DataBinding);