import { LitElement, html } from 'lit-element';

export class LogicExample extends LitElement {

    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean },
            myArray: { type: Array }
        }
    }

    constructor() {
        super();
        this.message = 'bucle + condicional';
        this.myBool = true;
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
    }

    render() {
        return html`
            <p>${this.message}</p>
            <ul>${this.myArray.map(item => html`<li>${item}</li>`)}</ul>
            <p>
                ${this.myBool ? 
                    html`La variable myBool es true` : 
                    html`La varibale myBool es false`
                }
            </p>
        `;
    }
}
customElements.define('logic-example', LogicExample);