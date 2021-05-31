import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox";

describe("Mailbox", () => {
  it("should render unread messages", () => {
    const unreadMessages = [1, 2, 3];
    const wrappedComponent = shallow(<Mailbox unreadMessages={unreadMessages} />);

    expect(wrappedComponent.find(".mailbox__count").text()).toEqual('3');
  });

  it("should not render count if no unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);

    expect(wrappedComponent.find(".mailbox__count").exists()).toEqual(false);
  });
});
