import { LitElement, html } from 'lit-element';

export class MyForm extends LitElement {

    static get properties() {
        return {
            callback: { type: Object },
            dataForm: { type: Object }
        }
    }

    constructor() {
        super();
        this.dataForm = {
            nombre: '',
            apellido1: '',
            apellido2: '',
            telefono: '',
            tipo: 'persona'
        }
    }

    handleChange(event) {
        this.dataForm[event.target.name] = event.target.value;
        console.log('modificamos dataForm', this.dataForm);
    }

    handleSubmit(event) {
       event.preventDefault();
       console.log('enviamos los datos del formulario', this.dataForm);
       this.callback(this.dataForm);
    }

    render() {
        return html`
            <form @submit=${this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="nombre"
                        name="nombre"
                        @change=${this.handleChange}
                        value=${this.dataForm.nombre}
                    >
                    <input
                        type="text"
                        placeholder="apellido1"
                        name="apellido1"
                        @change=${this.handleChange}
                        value=${this.dataForm.apellido1}
                    >
                    <input
                        type="text"
                        placeholder="apellido2"
                        name="apellido2"
                        @change=${this.handleChange}
                        value=${this.dataForm.apellido2}
                    >
                    <input
                        type="number"
                        placeholder="telefono"
                        name="telefono"
                        @change=${this.handleChange}
                        value=${this.dataForm.telefono}
                    >
                </div>
                <div>
                    <input
                        type="radio" 
                        id="persona"
                        name="tipo"
                        value="persona"
                        @change=${this.handleChange}
                        checked
                    >
                    <label for="persona">Persona</label>
                    <input
                        type="radio" 
                        id="robot"
                        name="tipo"
                        @change=${this.handleChange}
                        value="robot"
                    >
                    <label for="robot">Robot</label>
                </div>
                

                <input
                    type="submit"
                    value="click me"
                >
            </form>
        `;
    }
}
customElements.define('my-form', MyForm);