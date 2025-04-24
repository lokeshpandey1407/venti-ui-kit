import "./App.css";
import { Button } from "./components/button/Button";
import { Heading } from "./components/heading1/Heading1";
import { Body } from "./components/body/Body";
import { Caption } from "./components/caption/Caption";
import { Surface } from "./components/surface/Surface";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ display: "flex", gap: 2 }}>
          <Button display="primary">Primary</Button>
          <Button display="secondary">Secondary</Button>
        </div>
        <Heading>This is the heading component.</Heading>
        <Body>This is the body component.</Body>
        <Caption>This is the caption component.</Caption>
        <Surface>This is a surface</Surface>
      </div>
    </>
  );
}

export default App;
