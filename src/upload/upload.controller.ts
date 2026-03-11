import {
    Controller, Post, UploadedFile,
    UseInterceptors, BadRequestException, Query, Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
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
                destination: (req, _file, cb) => {
                    const folder = (req.query.folder as string) || '';
                    // Sanitizar nome do folder para prevenir path traversal
                    const safeFolder = folder.replace(/[^a-zA-Z0-9_-]/g, '');
                    const dir = path.join(UPLOAD_DIR, safeFolder);
                    if (!existsSync(dir)) {
                        mkdirSync(dir, { recursive: true });
                    }
                    cb(null, dir);
                },
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
    uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: any) {
        if (!file) throw new BadRequestException('Nenhum arquivo enviado');
        const folder = (req.query.folder as string) || '';
        const safeFolder = folder.replace(/[^a-zA-Z0-9_-]/g, '');
        const relativePath = safeFolder ? `/uploads/${safeFolder}/${file.filename}` : `/uploads/${file.filename}`;
        return { url: relativePath };
    }
}
