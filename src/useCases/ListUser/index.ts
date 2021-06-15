import { UserRepository } from './../../repositories/UserRepository';
import { ListUserController } from './ListUserController';
import { ListUserUseCase } from './ListUserUseCase';

const userRepository = UserRepository.getInstance();
const createUserUseCase = new ListUserUseCase(userRepository);
const listUserController = new ListUserController(createUserUseCase);

export { listUserController }