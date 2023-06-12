import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
    async getUsers(): Promise<User[]> {
        return [
            {
                firstName: "Teste",
                lastName: "Teste",
                email: "teste@teste.com",
                password: "12345"
            }
        ];
    }

}