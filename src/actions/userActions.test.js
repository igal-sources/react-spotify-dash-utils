import allActions from "actions";
import * as types from "../shared/types";
import userData from "../../mock/current-user/user-profile.json";

describe("Test user actions", () => {
  it("should test set user", () => {
    const result = {
      type: types.SET_USER,
      payload: userData
    };

    expect(allActions.userActions.setUser(userData)).toEqual(result);
  });

  it("should test user logout", () => {
    const result = {
      type: types.LOG_OUT
    };

    expect(allActions.userActions.logOut()).toEqual(result);
  });
});
