import { LitElement, html } from 'lit-element';

export class PropertiesExample extends LitElement {

    //declaración de properties, se tiene que indicar el tipo
    static get properties() {
        return {
            message: { type: String}
        }
    }

    /**
     * para inicializar una property  se debe de realizar en el constructor
     * IMPORTANTE. la primera linea debe ser 'super();'
     */
    constructor() {
        super();
        this.message = 'Hello world! from a property';
    }

    render() {
        return html`
            <p>${this.message}</p>
        `;
    }
}
customElements.define('properties-example', PropertiesExample);