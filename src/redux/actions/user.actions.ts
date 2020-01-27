import { userConstants, alertConstants } from "../types/ActionsTypes";
import { IUser } from "../../shared/models/user.model";
import userService from "../../shared/services/user.service";
import { AxiosResponse } from "axios";
import localStorageService from "../../shared/services/local-storage.service";
import { alertActions } from "./alert.actions";
import { Dispatch, AnyAction } from "redux";

export type CurrentUserAction =
  | {
      type: userConstants.LOGIN_LOADING;
      status: boolean;
    }
  | {
      type: userConstants.LOGIN_SUCCESS;
      user: IUser;
    }
  | {
      type: userConstants.LOGIN_FAILURE;
      error: string;
    }
  | {
      type: alertConstants.ERROR;
      message: string;
    }
  | {
      type: userConstants.LOGOUT;
    };

export const userActions = {
  login: (data: IUser) => {
    return (dispatch: Dispatch<AnyAction>): void => {
      dispatch(isLoading(true));
      // fetchAPI
      userService
        .login(data)
        .then((response: AxiosResponse<AxiosResponse<IUser>>) => {
          dispatch(success(response.data.data));
          localStorageService.setItem("token", data.jwt);
          dispatch(isLoading(false));
        })
        .catch(error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
          dispatch(isLoading(false));
        });
    };

    function isLoading(status: boolean): CurrentUserAction {
      return { type: userConstants.LOGIN_LOADING, status };
    }
    function success(
      user: IUser
    ): CurrentUserAction {
      return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error: string): CurrentUserAction {
      return { type: userConstants.LOGIN_FAILURE, error };
    }
  },

  logout: () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
  }
};
