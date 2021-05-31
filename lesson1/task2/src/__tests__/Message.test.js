import React from "react";
import { shallow } from "enzyme";
import Message from "../Message";

describe("Message", () => {
  it("should render text", () => {
    const wrappedComponent = shallow(<Message text={"text"} />);

    expect(wrappedComponent.find(".message").text()).toEqual("text");
  });
});
