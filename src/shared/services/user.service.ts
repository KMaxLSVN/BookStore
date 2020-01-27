import { environment } from "../../environments/environments";
import localStorageService from "./local-storage.service";
import axios, { AxiosResponse, AxiosPromise } from "axios";
import { IUser } from "../models/user.model";

class UserService {
  public login(data: IUser): AxiosPromise<AxiosResponse<IUser>> {
    return axios.post(
      `${environment.apiUrl}/authenticate`,
      { email: data.user.userEmail, password: data.user.userPassword },
      { withCredentials: true }
    );
  }

  public logout() {
    // remove user from local storage to log user out
    localStorageService.removeItem("token");
  }
}

const userService = new UserService();

export default userService;
