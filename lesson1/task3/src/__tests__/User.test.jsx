import React from "react";
import { shallow } from "enzyme";
import User from "../User";

describe("User", () => {
  it("should render name", () => {
    const wrappedComponent = shallow(<User name={"Tom"} age={null} />);

    expect(wrappedComponent.find(".user__name").text()).isEqual("Tom");
  });
});
