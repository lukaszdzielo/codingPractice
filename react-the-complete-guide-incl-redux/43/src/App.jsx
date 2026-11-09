import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import configImg from './assets/config.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.imgSrc} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block."
              imgSrc={componentsImg}
            />
            <CoreConcepts
              title="Props"
              description="Properties passed to a component to configure its behavior."
              imgSrc={configImg}
            />
            <CoreConcepts
              title="JSX"
              description="Syntax extension for JavaScript that looks similar to HTML."
              imgSrc={jsxImg}
            />
            <CoreConcepts
              title="State"
              description="A component's internal data that can change over time."
              imgSrc={stateImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
