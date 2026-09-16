import express from 'express';
import config from './config/index.js';
import routes from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';
import { ensureDir } from './utils/fileHelpers.js';
import cors from "cors";
import dotenv from "dotenv";
import path from "path";  

dotenv.config();

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
app.use(cors({ origin: allowedOrigin }));

async function startServer() {
    try {
        // Ensure download directory exists
        await ensureDir(config.DOWNLOAD_DIR);

        // Middleware
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // ✅ Serve static files correctly
        app.use('/downloads', express.static(config.DOWNLOAD_DIR));

        // Routes
        app.use('/api', routes);

        // Error handling
        app.use(errorHandler);

        app.get("/",(req,res)=>{
            res.status(200).json({
                msg:"hi from the server"
            })
        })

        // Start server
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
}

startServer();
