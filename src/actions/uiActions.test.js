import allActions from "actions";
import * as types from "../shared/types";

describe("Test ui actions", () => {
  it("should test update view type", () => {
    const title = "Artists";

    const result = {
      type: types.UPDATE_VIEW_TYPE,
      title
    };

    expect(allActions.uiActions.updateViewType(title)).toEqual(result);
  });
});
