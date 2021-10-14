import { CONTROLL_APP } from "../types";

export function updateDrawer(progress: any) {
  return {
    type: CONTROLL_APP.UPDATE_DRAWER,
    progress
  };
}
