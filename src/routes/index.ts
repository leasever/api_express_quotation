import { Request, Response, Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`Se está cargando la ruta... /${cleanName}`);
      router.use(`/api/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
