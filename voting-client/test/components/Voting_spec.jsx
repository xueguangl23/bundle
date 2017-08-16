import React from "react";
import ReactDOM from "react-dom";
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from "react-addons-test-utils";
import Voting from "../../src/components/Voting.jsx";
import {expect} from 'chai';

describe("Voting", () => {
  it("renders a pair of buttons", () => {
    const components = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(components, 'button');
    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });
});
