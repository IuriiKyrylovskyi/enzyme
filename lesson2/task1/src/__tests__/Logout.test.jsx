import React from "react";
import { shallow } from "enzyme";
import Logout from "../Logout";

describe("Logout", () => {
  it("should user ckick on logout button", () => {
    const mockLogout = jest.fn();
    const wrappedComponent = shallow(<Logout onLogout={mockLogout} />);
    wrappedComponent.find(".logout").simulate("click");

    expect(mockLogout).toBeCalled();
  });
});
