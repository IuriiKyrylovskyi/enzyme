import React from "react";
import { shallow } from "enzyme";
import Task from "../components/Task";

describe("<Task />", () => {
  it("should display done task", () => {
    const props = {
      id: "mock-id",
      text: "mock-text",
      done: true,
      handleStatusChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should display undone task", () => {
    const props = {
      id: "mock-id-2",
      text: "Task 2",
      done: false,
      handleStatusChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should update task on checkbox checked", () => {
    const props = {
      id: "mock-id-3",
      text: "Task 3",
      done: false,
      handleStatusChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find(".list-item__checkbox").simulate("change");
    
    expect(props.handleStatusChange).toBeCalledWith("mock-id-3");
  });

  it("should delete task", () => {
    const props = {
      id: "mock-id-4",
      text: "Task 4",
      done: true,
      handleStatusChange: jest.fn(),
      handleTaskDelete: jest.fn(),
    };
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find(".list-item__delete-btn").simulate("click");

    expect(props.handleTaskDelete).toBeCalledWith("mock-id-4");
  });
});
