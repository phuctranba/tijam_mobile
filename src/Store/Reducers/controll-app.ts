import { CONTROLL_APP } from "../types";
import { createReducer } from "../../Utils/Helpers";
import Animated from "react-native-reanimated";

const initialState = {
  progressDrawer: new Animated.Value(0)
};

const actionHander = {
  [CONTROLL_APP.UPDATE_DRAWER]: (state = initialState, action: any) => {
    return {
      ...state,
      progressDrawer: action.progress
    };
  }
};

export default createReducer(initialState, actionHander);
