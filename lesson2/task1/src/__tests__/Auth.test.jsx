import React from "react";
import { shallow } from "enzyme";
import Auth from "../Auth";

describe("Auth", () => {
  it("should display a Login button if user is logged out", () => {
    const wrappedComponent = shallow(<Auth />);

    expect(wrappedComponent.find("Login")).toBeTruthy();
  });

  it("should display a Login button if user is logged out", () => {
    const wrappedComponent = shallow(<Auth />);
    wrappedComponent.find("Login").prop("onLogin")(); // emulate Login gets prop=onLogin & call() it to fullfill
    wrappedComponent.find("Logout").prop("onLogout")(); // like: <Logout onLogout={true} />

    expect(wrappedComponent.find("Login")).toBeTruthy();
  });

  it("should display a Logout button if user is logged in", () => {
    const wrappedComponent = shallow(<Auth />);
    wrappedComponent.find("Login").prop("onLogin")();

    expect(wrappedComponent.find("Logout")).toBeTruthy();
  });
});
