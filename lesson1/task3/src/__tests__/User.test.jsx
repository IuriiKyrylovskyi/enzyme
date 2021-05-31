import React from "react";
import { shallow } from "enzyme";
import User from "../User";

describe("User", () => {
  it("should render name", () => {
    const wrappedComponent = shallow(<User name={"Tom"} age={null} />);

    expect(wrappedComponent.find(".user__name").text()).toEqual("Tom");
  });

  it("should render age", () => {
    const wrappedComponent = shallow(<User name={"Tom"} age={15} />);

    expect(wrappedComponent.find(".user__age").text()).toEqual("15");
  });
});
