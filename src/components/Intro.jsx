import React from "react";
import { Button } from "antd";

const Intro = (props) => (
  <div className="intro-wrapper">
    <div className="intro-body">
      <h1>Vartojimo paskola</h1>
      <h2>Paskolos, kurios padeda</h2>

      <br />

      <p>
        Vartojimo paskola pravers, jei planuojate atnaujinti namus, remontuoti
        automobilį, įsigyti naujų baldų, buitinės technikos, ar kitą brangesnį
        daiktą. Paskola nuo 500 iki 20 000 Eur be užstato. Pinigus pervesime
        Jums į sąskaitą iš karto po sutarties sudarymo. Pasiskolintą sumą ar jos
        dalį galėsite grąžinti anksčiau laiko be papildomų mokesčių. Specialūs
        pasiūlymai saulės elektrinei įsirengti. Daugiau informacijos apie APVA
        paramą su paskola įsigyjamoms saulės elektrinėms galite rasti agentūros
        puslapyje.
      </p>

      <p>
        Paraišką užpildysite vos per keletą minučių. Atkreipiame dėmesį, kad
        naudodamiesi finansavimo paslaugomis Jūs prisiimate finansinius
        įsipareigojimus. Netinkamas finansinių įsipareigojimų vykdymas gali
        daryti neigiamą įtaką Jūsų kredito istorijai, pabranginti skolinimąsi,
        taip pat gali būti pradėtas priverstinis išieškojimas.
      </p>
    </div>

    <Button onClick={props.handleStart} size="large">
      Pradėti
    </Button>
  </div>
);

export default Intro;
