import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox";

describe("Mailbox", () => {
  it("should not render count if no unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);

    expect(wrappedComponent.find("mailbox__count").exists()).toEqual(false);
  });
});
