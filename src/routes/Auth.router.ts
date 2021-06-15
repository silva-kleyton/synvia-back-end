import { Router } from "express";
import { authenticateUserController } from "../useCases/authenticateUser";

const router = Router();

router.post("/", (request, response) => {
    return authenticateUserController.handle(request, response)
});

export default router;