import fs from 'fs';
import path from 'path';

export const getSinglePageJson = (folder) => {
  const filesPath = fs.readdirSync(path.join(folder));
  const sanitizeFiles = filesPath.filter((file) => file.includes('.json'));

  const singlePages = sanitizeFiles.map((filename) => {
    const slug = filename.replace('.json', '');
    const pageData = fs.readFileSync(path.join(folder, filename), 'utf-8');

    const data = JSON.parse(pageData);
    const url = data.url ? data.url.replace('/', '') : slug;
    return { frontmatter: data.frontmatter, slug: url, content: data.content };
  });

  return singlePages.filter((page) => page.frontmatter?.layout !== '404' && page);
};
