import User, { IUser } from "../../models/User";

export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export interface IUserRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
    list(): Promise<IUser[]>;
}