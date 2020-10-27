import chalk from 'chalk';
import matter from 'gray-matter';
import {readFile} from './utils';
import * as Handlebars from 'handlebars';

async function main() {
  console.info(chalk.green.bold`Welcome to the lab`);
  console.info(chalk.green`Read handlebar file with frontmatter`);
  const rawContent = await readFile('lab/test-with-frontmatter.hbs');
  const structuredData = matter(rawContent);
  const template = Handlebars.compile(structuredData.content);
  const result = template(structuredData.data);

  console.info(chalk.white`Result:${result}`);

  console.info(chalk.green`Read handlebar file without frontmatter`);
  const rawContent2 = await readFile('lab/test-without-frontmatter.hbs');
  const structuredData2 = matter(rawContent2);
  const template2 = Handlebars.compile(structuredData2.content);
  const result2 = template2(structuredData2.data);

  console.info(chalk.white`Result:${result2}`);

  console.info(chalk.green`Read handlebar file with frontmatter in the html`);
  const rawContent3 = await readFile('lab/test-with-frontmatter-in-html.hbs');
  const structuredData3 = matter(rawContent3);
  const template3 = Handlebars.compile(structuredData3.content);
  const result3 = template3(structuredData3.data);

  console.info(chalk.white`Result:${result3}`);
}

main();
