import React from "react";
import { shallow } from "enzyme";
import Counter from "../Counter";

describe("Counter", () => {
  let wrappedComponent;

  beforeEach(() => {
    wrappedComponent = shallow(<Counter />);
  });

  it("should display counter with initial value 0", () => {
    expect(wrappedComponent.find(".counter")).toMatchSnapshot();
  });

  it("should display counter value 0", () => {
    expect(wrappedComponent.find(".counter__value").text()).toEqual("0");
  });

  it("should increase counter value on click by 1", () => {
    wrappedComponent.setState({
      counter: 2,
    });
    wrappedComponent.find(".counter__button").at(1).prop("onClick")();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("3");
  });

  it("should decrease counter value on click by 1", () => {
    wrappedComponent.setState({
      counter: 2,
    });

    wrappedComponent.find(".counter__button").at(0).prop("onClick")();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("1");
  });

  it("should decrease counter value on click by 1", () => {
    wrappedComponent.setState({
      counter: 2,
    });
    
    wrappedComponent.find(".counter__button").at(0).prop("onClick")();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("1");
  });

  it("should reset counter value to 0", () => {
    wrappedComponent.setState({
      counter: 2,
    });

    wrappedComponent.find(".counter__value").prop("onClick")();

    expect(wrappedComponent.find(".counter__value").text()).toEqual("0");
  });
});
