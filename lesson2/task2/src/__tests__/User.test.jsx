import React from "react";
import { shallow } from "enzyme";
import User from "../User";
import { getUserData } from "../usersGateway";

jest.mock("../usersGateway", () => {
  return {
    getUserData: jest.fn(() => Promise.resolve()),
  };
});

describe("User", () => {
  it("should not render without data", () => {
    const wrappedComponent = shallow(<User />);

    expect(wrappedComponent.find(".user").exists()).toEqual(false);
  });

  it("should render user with data", () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        avatar_url: "https://join.com",
        name: "John",
        location: "Kyiv",
      },
    });

    expect(wrappedComponent.find(".user").exists()).toBeTruthy();
  });

  it("should render user with data for snapshot", () => {
    const wrappedComponent = shallow(<User />);
    wrappedComponent.setState({
      userData: {
        avatar_url: "https://join.com",
        name: "John",
        location: "Kyiv",
      },
    });

    expect(wrappedComponent.find(".user")).toMatchSnapshot();
  });

  it("should call getUserData", () => {
    shallow(<User />);

    expect(getUserData).toBeCalled();
  });
});
