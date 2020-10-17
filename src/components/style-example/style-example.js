import { LitElement, html, css } from 'lit-element';

export class StyleExample extends LitElement {

    static get properties() {
        return {
            message: { type: String },
            myBool: { type: Boolean}
        }
    }

    static get styles() {
        return css`
            p {
                font-family: Roboto;
                font-size: 16px;
                font-weight: 500;
            }

            .red {
                color: red;
            }

            .blue {
                color: blue;
            }
        `
    }

    constructor() {
        super();
        this.message = 'Cambio de estilo!';
        this.myBool = true;
    }

    render() {
        return html`
            <p class="${this.myBool? 'red' : 'blue'}">${this.message}</p>
            <button @click="${this.clickHandler}">click me</button>
        `;
    }

    clickHandler(event) {
        this.myBool = !this.myBool;
    }
}
customElements.define('style-example', StyleExample);