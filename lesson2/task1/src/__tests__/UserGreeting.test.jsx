import React from "react";
import { shallow } from "enzyme";
import UserGreeting from "../UserGreeting";

describe("UserGreeting", () => {
  it("should display user greeting", () => {
    const wrappedComponent = shallow(<UserGreeting />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
