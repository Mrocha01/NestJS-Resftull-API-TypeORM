import { Injectable } from '@nestjs/common';
import { PathLike, writeFile } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  getDestionatioPath() {
    return join(__dirname, '../', '../', 'storage', 'photos');
  }
  async upload(file: Express.Multer.File, filename: string) {
    const path: PathLike = join(this.getDestionatioPath(), filename);

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
