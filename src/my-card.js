import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
    name: { type: String },
    image: { type: String },
    alt: { type: String },
    description: { type: String },
    toggle: { type: Boolean, reflect: true }
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--my-card-background-color);
    }



    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }

    .wrapper {
  width: 400px;
  border: 6px solid black;
}
.btn-wrapper {
  margin: 24px auto;
}
.btn-wrapper button {
  font-size: 24px;
  color: blue;
  background-color: white;
}
.btn-wrapper button:hover {
  color: white;
  background-color: blue;
}

@media screen and (max-width: 799px) and (min-width: 501px) {
  .button {
    display: block;
  }
}

@media screen and (max-width: 500px) {
  .card {
    transform: scale(0.8);
  }
  .card img {
    width: 80%;
  }
}

.wrapper {
  background-color: gray;
  padding: 20px;
  margin-bottom: 10px;
}

button {
  margin: 3px;
}

.dupButton button:hover{
  color: white;
  background-color: blue;
}
.dupButton button:focus{
  color: white;
  background-color: blue;
}

.backgroundColorButton button:hover{
  color: white;
  background-color: blue;
}
.backgroundColorButton button:focus{
  color: white;
  background-color: blue;
}

.headingButton button:hover{
  color: white;
  background-color: blue;
}
.headingButton button:focus{
  color: white;
  background-color: blue;
}

.deleteCard button:hover{
  color: white;
  background-color: blue;
}
.deleteCard button:focus{
  color: white;
  background-color: blue;}
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
   
      <div class="wrapper">
<img class="image"
  src="https://brand.psu.edu/images/backgrounds/atheltic-wrong.png"
  alt="Penn State Logo" width="400" height="225">

<div class="header">
  <h2>Penn State Football</h2>
</div>
  <h3>Description</h3>
    <div class="description">
  <h5>Penn State Football, represented by the famous Nittany Lion logo, is a D1 football program located in State College, PA. Penn State football has won 2 national championships in program history and are predicted to make an apperance in playoffs in 2024. </h5>
</div>
<div class="btn-wrapper">
    <button onclick="hideDescription()">Details</button>
</div>
</div>

<div class="dupButton">
  <button>Duplicate</button>
</div>
    
<div class="backgroundColorButton">
  <button onclick="changeBackgroundColor()"> Change Background Color</button>
</div>

<div class="headingButton">
  <button onclick="changeHeading()"> Change Heading</button>
</div>

<div class="deleteCard">
  <button onclick="deleteDupCard()">Delete</button>
</div>
</div>
    `;
  }
}

customElements.define('my-card', MyCard);