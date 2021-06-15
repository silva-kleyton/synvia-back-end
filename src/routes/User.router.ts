import { Router } from "express";
import { createUserController } from "../useCases/createUser";
import { listUserController } from "../useCases/ListUser";

const router = Router();

router.post("/", (request, response) => {
    return createUserController.handle(request, response);
});

router.get("/", (request, response) => {
    return listUserController.handle(request, response);
});

export default router;