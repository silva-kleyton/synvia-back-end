import { AppError } from '../../errors/AppError';
import { UserRepositoryInMemory } from './../../repositories/in-memory/UserRepository';
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUserDTO } from 'src/interfaces/repositories/IUserRepository';

let createUserUserCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Authenticate User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory)
        createUserUserCase = new CreateUserUseCase(userRepositoryInMemory)
    });

    it("Faz autenticação de um usuário", async () => {
        const user: ICreateUserDTO = {
            name: "Teste",
            email: "user_teste@teste.com",
            password: '1234'
        }

        await createUserUserCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("accessToken");
    });

    it("Fazer login com usuário inexistente", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "error@error.com",
                password: "123456"
            });
        }).rejects.toBeInstanceOf(AppError)
    });

    it("Error ao tentar logar com senha incorreta", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "Name teste",
                email: "teste2@teste.com",
                password: "123"
            }

            await createUserUserCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "0000"
            });

        }).rejects.toBeInstanceOf(AppError)
    });

});