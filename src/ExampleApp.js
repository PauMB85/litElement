import { LitElement, html, css } from 'lit-element';
import './components/basic-example/basic-example.js';
import './components/properties-example/properties-example.js';
import './components/logic-example/logical-example.js';
import './components/event-example/event-example.js';
import './components/style-example/style-example.js';
import './components/data-binding/data-binding.js';
import './components/callback-component/callback-component.js';
import './components/formularios/my-form.js';

export class ExampleApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      myObject: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-center;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .my-box {
        width: 100%;
        border-style: solid;
        border-color: red;
        margin-bottom:20px;
        padding: 10px 15px;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.myObject = {
      name: 'Pau',
      surname: 'Maravi'
    }
  }

  myCallback(data){
    console.log('ejecutamos callback', data);
  }

  render() {
    return html`
      <main>
        <h1>LitElement</h1>

        <section class="my-box">
          <h3>Ejemplo básico</h3>
          <p>componente <b>basic-example</b> solo renderiza un simple texto</p>
          <basic-example />
        </section>

        <section class="my-box">
          <h3>Properties</h3>
          <p>componente <b>properties-example</b> declaración, inicializacion y uso properties</p>
          <properties-example />
        </section>

        <section class="my-box">
          <h3>Lógica</h3>
          <p>componente <b>logic-example</b> se le incluye un bucle y condicional</p>
          <logic-example />
        </section>

        <section class="my-box">
          <h3>Eventos</h3>
          <p>componente <b>event-example</b> cambiara el valor de un boolean y por lo tanto, el texto a enseñar</p>
          <event-example />
        </section>
        
        <section class="my-box">
          <h3>Estilos</h3>
          <p>componente <b>style-example</b> cambiamos el color de nuestro texto</p>
          <style-example />
        </section>

        <section class="my-box">
          <h3>data-binding</h3>
          <p>componente <b>data-binding</b> recibe un string y un objeto</p>
          <data-binding value="Hello" .myObject="${this.myObject}"/>
        </section>

        <section class="my-box">
          <h3>callback</h3>
          <p>componente <b>callback-component</b> ejecuta funcion que le pasa padre(mira en al consola)</p>
          <callback-component .callback="${this.myCallback}"/>
        </section>

        <section class="my-box">
          <h3>formulario</h3>
          <p>componente <b>form-component</b></p>
          <my-form .callback="${this.myCallback}"/>
        </section>
        
        
      </main>
    `;
  }
}
