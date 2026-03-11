import {
    Controller, Post, UploadedFile,
    UseInterceptors, BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

const UPLOAD_DIR = './public/uploads';

// Garantir pasta uploads
if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });

@Controller('upload')
export class UploadController {
    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: UPLOAD_DIR,
                filename: (_req, file, cb) => {
                    const unique = Date.now() + '-' + Math.round(Math.random() * 1e6);
                    cb(null, unique + extname(file.originalname));
                },
            }),
            fileFilter: (_req, file, cb) => {
                const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
                if (allowed.includes(file.mimetype)) cb(null, true);
                else cb(new BadRequestException('Apenas imagens são permitidas'), false);
            },
            limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
        }),
    )
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        if (!file) throw new BadRequestException('Nenhum arquivo enviado');
        return { url: `/uploads/${file.filename}` };
    }
}
