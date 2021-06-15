import { UserRepository } from './../../repositories/UserRepository';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

const userRepository = UserRepository.getInstance();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController }