import React from "react";
import { Steps, Button, message, Slider } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Pajamos",
    content: (
      <div>
        <h1>Jūsų/šeimos grynosios mėnesio pajamos</h1>
        <Slider defaultValue={0} />
      </div>
    ),
  },
  {
    title: "Įmokos",
    content: (
      <div>
        <h1>Jūsų/šeimos visų finansinių įsipareigojimų įmoka per mėn.</h1>
        <Slider defaultValue={0} />
      </div>
    ),
  },
  {
    title: "Suma",
    content: (
      <div>
        <h1>Pageidaujama paskolos suma</h1>
        <Slider defaultValue={0} />
      </div>
    ),
  },
  {
    title: "Terminas",
    content: (
      <div>
        <h1>Paskolos grąžinimo terminas</h1>
        <Slider
          // min={"1"}
          // max={"5"}
          // marks={{ 1: "1 metai", 5: "5 metai" }}
          defaultValue={0}
        />
      </div>
    ),
  },
  {
    title: "Santrauka",
    content: (
      <div>
        <h1>Preliminarus pasiūlymas</h1>
        <h2>
          Mėn. įmoka: <span>100 Eur</span>
        </h2>
        <h2>
          Didžiausia suma: <span>40 000 Eur</span>
        </h2>
      </div>
    ),
  },
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="form-wrapper">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Sekantis
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Paraiška išsiųsta")}
            >
              Siųsti paraišką
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => this.prev()}>
              Atgal
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
