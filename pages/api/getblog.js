import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const { slug } = req.query;
    const filePath = path.join(process.cwd(), 'public', 'blogdata', `${slug}.json`);
    const data = fs.readFileSync(filePath, 'utf-8');
    const blogData = JSON.parse(data);
    res.status(200).json(blogData);
  } catch (error) {
    res.status(404).json({ name: 'No such blog found' });
  }
}
