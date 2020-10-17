import { LitElement, html } from 'lit-element';

export class BasicExample extends LitElement {

    render() {
        return html`
            <p>Hello World!!</p>
        `;
    }
}
customElements.define('basic-example', BasicExample);