import localStorageService from "../services/local-storage.service"
import { IUser } from "../models/user.model";
export function authHeader() {
  // return authorization header with jwt token
  let user: IUser = JSON.parse(localStorageService.getItem("user"));

    if (user && user.jwt) {
        return { "Authorization": "Bearer" + user.jwt }
    } else {
        return {};
    }
}
