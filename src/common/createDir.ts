import * as fs from 'fs';
import * as path from 'path';
const basePath = path.join(__dirname, '../../storage');

//Funcion para crear directorios
export const createDir = (dirName: string) => {
  try {
    const newDir = path.join(basePath, dirName);
    fs.mkdirSync(newDir, { recursive: true });

    return newDir;
  } catch (e) {
    throw new Error(e.message);
  }
};
