import React from "react";
import { shallow } from "enzyme";
// import { Provider } from "react-redux";
import store from "../store";
import { ShallowMock } from "../mocks/shallow-mock";
import App from "../App";

describe("<App />", () => {
  it("should display todo list", () => {
    const wrappedComponent = shallow(ShallowMock(<App />, store));

    expect(wrappedComponent).toBeTruthy();
  });
});
