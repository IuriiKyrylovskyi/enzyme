import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("Login", () => {
  it("should user click on login button", () => {
    const mockLogin = jest.fn();
    const wrappedComponent = shallow(<Login onLogin={mockLogin} />);
    wrappedComponent.find(".login").simulate("click");

    expect(mockLogin).toBeCalled();
  });
});
