import React from "react";
import { shallow } from "enzyme";
import GuestGreeting from "../GuestGreeting";

describe("GuestGreeting", () => {
  it("should display guest greeting", () => {
    const wrappedComponent = shallow(<GuestGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
