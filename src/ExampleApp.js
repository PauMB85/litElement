import { LitElement, html, css } from 'lit-element';
import './components/basic-example/basic-example.js';
import './components/properties-example/properties-example.js';
import './components/logic-example/logical-example.js';
import './components/event-example/event-example.js';
import './components/style-example/style-example.js'

export class ExampleApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
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
        
      </main>
    `;
  }
}
