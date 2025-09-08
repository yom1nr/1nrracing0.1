const fs = require('fs');
const path = require('path');

function walk(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      console.log(prefix + '📁 ' + file);
      walk(fullPath, prefix + '   ');
    } else {
      console.log(prefix + '📄 ' + file);
    }
  });
}

walk('./'); // เริ่มจากโฟลเดอร์ปัจจุบัน
