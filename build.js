const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/dashboard/runtime.js',
    './dist/dashboard/polyfills.js',
    './dist/dashboard/main.js'
  ];
  await fs.ensureDir('dashboard-build');
  await fs.removeSync('dashboard-build/lr-dashboard.js');
  await concat(files, 'dashboard-build/lr-dashboard.js');

  await fs.copy('./src/app/app.component.css', 'dashboard-build/styles.css');
})();
