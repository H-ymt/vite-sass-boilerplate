import { defineConfig } from 'vite';

//import設定を追記
import { resolve } from 'path';

// HTMLの複数出力を自動化する
//./src配下のファイル一式を取得
import fs from 'fs';
import path from 'path';

const files = [];
function readDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      // componentsディレクトリを除外する
      if (item === 'components') {
        continue;
      }

      readDirectory(itemPath);
    } else {
      // htmlファイル以外を除外する
      if (path.extname(itemPath) !== '.html') {
        continue;
      }

      // nameを決定する
      let name;
      if (dirPath === path.resolve(__dirname, 'src')) {
        name = path.parse(itemPath).name;
      } else {
        const relativePath = path.relative(path.resolve(__dirname, 'src'), dirPath);
        const dirName = relativePath.replace(/\//g, '_');
        name = `${dirName}_${path.parse(itemPath).name}`;
      }

      // pathを決定する
      const relativePath = path.relative(path.resolve(__dirname, 'src'), itemPath);
      const filePath = `/${relativePath}`;

      files.push({ name, path: filePath });
    }
  }
}
readDirectory(path.resolve(__dirname, 'src'));
const inputFiles = {};
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  inputFiles[file.name] = resolve(__dirname, './src' + file.path);
}
/*
  この形を自動的に作る
  input:{
    index: resolve(__dirname, './src/index.html'),
    list: resolve(__dirname, './src/about.html')
  }
*/

export default defineConfig({
  root: './src', //開発ディレクトリ設定
  build: {
    outDir: '../dist', //出力場所の指定
    rollupOptions: {
      //ファイル出力設定
      output: {},
      //生成オブジェクトを渡す
      input: inputFiles,
    },
  },
});
