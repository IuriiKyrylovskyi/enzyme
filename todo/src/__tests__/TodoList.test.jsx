import React from "react";
import { shallow } from "enzyme";
import TodoList from "../components/TodoList";

const props = {
  getTasksList: jest.fn(() => Promise.resolve([])),
  updateTask: jest.fn(),
  deleteTask: jest.fn(),
  createTask: jest.fn(),
};

describe("<TodoList />", () => {
  it("should request tasks list", () => {
    shallow(<TodoList {...props} />);

    expect(props.getTasksList).toBeCalled();
  });

  it("should display tasks list", () => {
    const wrappedComponent = shallow(<TodoList {...props} />);

    expect(wrappedComponent.find("Connect(CreateTaskInput)").length).toEqual(1);
  });
});
