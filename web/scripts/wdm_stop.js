const wdm = require('webdriver-manager');

const options = {
  browserDrivers: [{
    name: 'chromedriver'
  }],
  server: {
    name: 'selenium',
    runAsNode: true,
    runAsDetach: true
  },
  outDir: 'downloads'
}

async function main() {
  wdm.setLogLevel('INFO');
  await wdm.shutdown(options);
}

main().then(() => {});
