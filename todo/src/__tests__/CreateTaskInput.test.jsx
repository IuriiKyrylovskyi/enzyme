import React from "react";
import { shallow } from "enzyme";
import CreateTaskInput from "../components/CreateTaskInput";

describe("<CreateTaskInput />", () => {
  it("should create task on submit", () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(<CreateTaskInput onCreate={mockOnCreate} />);
    const fakeEvent = { target: { value: "go away" } };

    wrappedComponent.find(".create-task__input").simulate("change", fakeEvent);
    wrappedComponent.find(".create-task__btn").simulate("click");

    expect(mockOnCreate).toBeCalledWith("go away");
  });

  it("should clean input on submit", () => {
    const mockOnCreate = jest.fn();
    const wrappedComponent = shallow(<CreateTaskInput onCreate={mockOnCreate} />);
    const fakeEvent = { target: { value: "go away" } };

    wrappedComponent.find(".create-task__input").simulate("change", fakeEvent);
    wrappedComponent.find(".create-task__btn").simulate("click");

    expect(wrappedComponent.find(".create-task__input").text()).toEqual("");
  });
});
