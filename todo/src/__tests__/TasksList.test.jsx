import React from "react";
import { shallow } from "enzyme";
import TasksList from "../components/TasksList";

describe("<TasksList />", () => {
  it("should display tasks list sorted by 'done' status", () => {
    const props = {
      handleStatusChange: jest.fn(),
      handleTaskDelete: jest.fn(),
      tasks: [
        {
          id: "id-1",
          done: true,
          text: "Task 1",
        },
        {
          id: "id-2",
          done: false,
          text: "Task 2",
        },
        {
          id: "id-3",
          done: true,
          text: "Task 3",
        },
      ],
    };
    const wrappedComponent = shallow(<TasksList {...props} />);

    expect(wrappedComponent).toMatchSnapshot();
  });
});
