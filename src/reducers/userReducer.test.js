import userReducer from "./userReducer";
import allActions from "actions";
import userData from "../../mock/current-user/user-profile.json";

describe("User Reducer tests", () => {
  it("should check user data after login", () => {
    const action = allActions.userActions.setUser({ ...userData });
    const newState = userReducer(userData, action);
    expect(newState.display_name).toEqual("igal");
    expect(newState.email).toEqual("igal2025@gmail.com");
  });
});
