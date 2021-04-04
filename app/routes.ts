import express from 'express';
import multer from 'multer';
import wireCtrls from './wireCtrls';
let upload = multer();

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/editor', c.site.editor.bind(c.site));
  router.get('/books', c.book.all.bind(c.book));
  router.post('/books', upload.none(), c.book.add.bind(c.book));
  router.get('/chapters/:bookId', c.book.chapters.bind(c.book));
  router.post('/chapters', upload.none(), c.book.addChapter.bind(c.book));
  router.get('/sections/:chapterId', c.book.sections.bind(c.book));
  router.post('/sections', upload.none(), c.book.addSection.bind(c.book));

  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    res.status(500).send(err.message);
  });

  return router;  
}