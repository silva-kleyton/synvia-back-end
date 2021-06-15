import { AppError } from './../errors/AppError';
import { UserRepository } from './../repositories/UserRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string
}

export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        throw new AppError("Faltando token")
    }

    const parts = authHeader.split(' ');

    if (parts.length < 1) {
        throw new AppError("Erro no token")
    }

    const [schema, token] = parts;

    if (schema !== 'Bearer') {
        throw new AppError("Token mal formatado")
    };

    try {
        const { sub: userId } = verify(token, process.env.ACCESS_TOKEN_SECRET!) as IPayload;

        const userRepository = new UserRepository();

        const user = await userRepository.findById(userId);

        if (!user) {
            throw new AppError("Usuario não existe", 401)
        }

        next()
    } catch (error) {
        throw new AppError("Token invalido", 401)
    }
}