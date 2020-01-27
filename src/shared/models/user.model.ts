import { IUserData } from "./user-data.model";

export interface IUser{
    jwt: string;
    refreshToken: string;
    user: IUserData;
}
