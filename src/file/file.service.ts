import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';

@Injectable()
export class FileService {
  async upload(file: Express.Multer.File, path: string) {
    return new Promise<void>((resolve, reject) => {
      writeFile(path, file.buffer, {}, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
