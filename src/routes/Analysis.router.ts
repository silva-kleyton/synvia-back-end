import { Router } from "express";
import auth from "../middleware/auth";
import { toxicologicalSampleController } from "../useCases/toxicologicalAnalysis";
import { listToxicologicalSampleController } from "../useCases/ListSample";

const router = Router();

router.use(auth)
router.post("/", (request, response) => {
    return toxicologicalSampleController.handle(request, response);
});

router.get("/", (request, response) => {
    return listToxicologicalSampleController.handle(request, response);
});

export default router;