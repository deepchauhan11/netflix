import express from 'express'
import { addToLikedMovies, getLikedMovies, removeFromLikedMovies } from '../controllers/UserContoller.js'
const router = express.Router()

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/remove", removeFromLikedMovies)





export default router

