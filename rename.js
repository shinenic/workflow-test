const fs = require("fs");

const directory = "/Users/weienting/Downloads/Design System";

fs.readdir(directory, (err, files) => {
  if (err) {
    throw err;
  }

  files.forEach(file => {
    const oldPath = `${directory}/${file}`;
    const number = file.match(/\d+/g);
    const type = file.includes("=Forecast") ? "outlined" : "filled";
    const newPath = `${directory}/${type}-symbol-${number}.svg`;

    fs.rename(oldPath, newPath, err => {
      if (err) {
        throw err;
      }
    });
  });
});
