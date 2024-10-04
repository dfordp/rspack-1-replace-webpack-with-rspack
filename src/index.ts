import { Api } from '@codemod.com/workflow';
import fs from 'node:fs';
import fg from "fast-glob"

export async function workflow({ files, astGrep }: Api) {
  // Define the pattern to match any script using webpack
  const webpackPattern = `"webpack"`;

  // Define the replacement pattern
  const rspackPattern = `"rspack"`;

  // Find all package.json files
  const packageJsonFiles = await files('**/package.json');

  for (const file of packageJsonFiles) {
    // Read the content of the package.json file
    const fileContent = fs.readFileSync(file, 'utf-8');

    // Use astGrep to find and replace 'webpack' with 'rspack'
    const updatedContent = astGrep(fileContent)
      .replace(webpackPattern, rspackPattern)
      .toString();

    // Write the updated content back to the package.json file
    fs.writeFileSync(file, updatedContent);
    console.log(`Updated scripts in file: ${file}`);
  }
}