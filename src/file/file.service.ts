import { Injectable } from '@nestjs/common';
import { PathLike, writeFile, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  getDestionatioPath() {
    return join(__dirname, '../', '../', 'storage', 'photos');
  }

  async upload(file: Express.Multer.File, filename: string) {
    const destinationPath = this.getDestionatioPath();
    const path: PathLike = join(destinationPath, filename);

    // Verificar se o diretório de destino existe, se não existir, criá-lo
    if (!this.directoryExists(destinationPath)) {
      mkdirSync(destinationPath, { recursive: true });
    }

    return new Promise<string>((resolve, reject) => {
      writeFile(path, file.buffer, {}, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path);
        }
      });
    });
  }

  private directoryExists(path: string): boolean {
    try {
      return existsSync(path);
    } catch (error) {
      return false;
    }
  }
}
