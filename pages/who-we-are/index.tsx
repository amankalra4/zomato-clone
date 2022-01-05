import {
    basicStyles,
    otherStyles,
    someMoreBasicStyles,
    someCssAsObject,
    combinedAsArray,
    cxExample
} from "../../styles/style";

const WhoWeAre = () => (
    <div>
        Who we are
        <div>
      <h1>Emotion Vanilla examplessss</h1>
      <div className={basicStyles}>Basic styles using emotion</div>
      <div className={otherStyles}>Some more styles using emotion</div>
      <div className={someMoreBasicStyles}>Well why not here is some more</div>
      <div className={someCssAsObject}>Object styles using emotion css</div>
      <div className={combinedAsArray}>Array of styles using emotion css</div>
      <div className={cxExample}>cx example from emotion</div>
    </div>
    </div>
);

export default WhoWeAre;
