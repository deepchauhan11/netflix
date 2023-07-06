import express from 'express'
import cors from 'cors'
import Connection from './database/db.js';
import Router from './routes/routes.js'


const PORT = 8000;
const app = express();
app.use(cors())
app.use(express.json())
Connection();

app.use("/api/user", Router)









app.listen(PORT, () => console.log(`successfully listening on port ${PORT}`))

