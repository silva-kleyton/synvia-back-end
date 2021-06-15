import { IUserRepository } from '../../interfaces/repositories/IUserRepository';
import { IUser } from "../../models/User";

export class ListUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(): Promise<IUser[]> {
        return await this.userRepository.list();
    }
}