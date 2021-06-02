import React from "react";
import { shallow, mount } from "enzyme";
import Dialog from "../Dialog";

describe("Dialog", () => {
  it("should be closed if isOpen=false", () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog onClose={() => mockOnClose()} />);

    // expect(wrappedComponent.type()).toEqual(null);
    expect(wrappedComponent.find(".dialog").exists()).toBeFalsy();
  });

  it("should be open if isOpen=true", () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog isOpen onClose={() => mockOnClose()} />);

    expect(wrappedComponent.find(".dialog").exists()).toBeTruthy();
  });

  it("should be closed on icon click", () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = mount(<Dialog isOpen onClose={mockOnClose} />);
    wrappedComponent.find(".dialog__close-btn").simulate("click");

    expect(mockOnClose).toBeCalled();
  });

  it("should render title", () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog title={"Dialog"} isOpen onClose={() => mockOnClose()} />);

    expect(wrappedComponent.find(".dialog__title").text()).toEqual("Dialog");
  });

  it("should render children", () => {
    const mockOnClose = jest.fn();
    const wrappedComponent = shallow(<Dialog children={"children"} isOpen onClose={() => mockOnClose()} />);

    expect(wrappedComponent.find(".dialog__content").text()).toEqual("children");
  });
});
