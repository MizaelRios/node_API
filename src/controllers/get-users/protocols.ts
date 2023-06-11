import { User } from "../../models/user";
import { HttsResponse } from "../protocols";

export interface IGetUsersController {
    handle(): Promise<HttsResponse<User[]>>;
}

export interface IGetUsersRepository {
    getUsers(): Promise<User[]>
}