import React from "react";
import { shallow } from "enzyme";
import App from "../../App";

describe("<App />", () => {
  it("should display Header", () => {
    const wrappedComponent = shallow(<App />);

    expect(wrappedComponent.find("Header").exists()).toBeTruthy();
  });
});
