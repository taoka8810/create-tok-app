const readline = require("readline");
const fs = require("fs");
const { error } = require("console");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("テーマ名を入力してください：", (name) => {
  const jsCode = `console.log('${name}');`;
  const filePath = `${name}.js`;

  fs.writeFile(filePath, jsCode, (error) => {
    if (error) {
      console.error("Error creating the file:", error);
    } else {
      console.log(`File "${filePath}" created successfully.`);
    }
  });
  rl.close();
});
