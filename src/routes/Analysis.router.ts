import { Router } from "express";
import auth from "../middleware/auth";
import { toxicologicalSampleController } from "../useCases/toxicologicalAnalysis";

const router = Router();

router.use(auth)
router.post("/", (request, response) => {
    return toxicologicalSampleController.handle(request, response);
});

export default router;