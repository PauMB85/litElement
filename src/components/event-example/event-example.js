import { LitElement, html } from 'lit-element';

export class EventExample extends LitElement {

    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean }
        }
    }

    constructor() {
        super();
        this.message = 'eventos litElement';
        this.myBool = true;
    }

    render() {
        return html`
            <p>${this.message}</p>
            <p>
                ${this.myBool ? 
                    html`La variable myBool es true` : 
                    html`La varibale myBool es false`
                }
            </p>
            <button @click=${this.clickHandler}>click me</button>
        `;
    }

    clickHandler(event) {
        console.log(event.target);
        this.myBool = !this.myBool;
    }
}
customElements.define('event-example', EventExample);