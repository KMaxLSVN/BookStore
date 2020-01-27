import { alertConstants } from "../types/ActionsTypes";

export type alertAction =
  | {
      type: alertConstants.SUCCESS;
      message: string;
    }
  | {
      type: alertConstants.ERROR;
      message: string;
    }
  | {
      type: alertConstants.CLEAR;
    };

export const alertActions = {
  success: (message: string) => ({
    type: alertConstants.SUCCESS,
    message
  }),
  error: (message: string) => ({
    type: alertConstants.ERROR,
    message
  }),
  clear: () => ({
    type: alertConstants.CLEAR
  })
};
