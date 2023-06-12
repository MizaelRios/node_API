import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface CreateUsersParams {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ICreateUserController {
    handle(httpRequest: HttpRequest<CreateUsersParams>): Promise<HttpResponse<User>>;
}

export interface ICreateUserRepository {
    createUser(params: CreateUsersParams): Promise<User>
}