import { AppError } from '../../errors/AppError';
import { UserRepositoryInMemory } from './../../repositories/in-memory/UserRepository';
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUserCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        createUserUserCase = new CreateUserUseCase(userRepositoryInMemory)
    });

    it("should be create user in memory", async () => {
        const objectUser = {
            name: "Name teste",
            email: "teste@teste.com",
            password: "123456"
        }

        const user = await createUserUserCase.execute(objectUser);

        expect(user).toHaveProperty("_id")
    });

    it("No more than one user with the same name should be created in memory.", async () => {
        expect(async () => {
            const objectUser = {
                name: "Name teste",
                email: "teste@teste.com",
                password: "123456"
            }

            await createUserUserCase.execute(objectUser);
            await createUserUserCase.execute(objectUser);

        }).rejects.toBeInstanceOf(AppError)
    });

})