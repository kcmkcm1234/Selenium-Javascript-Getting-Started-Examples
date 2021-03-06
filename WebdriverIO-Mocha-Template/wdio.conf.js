exports.config = {
    runner: 'local',
    specs: [
        './tests/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: process.env.BROWSER||'chrome',
    }],
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:@babel/register'],
        timeout: 60000
    },
    before: function (capabilities, specs) {
        browser.setTimeout({ 'implicit': 60000 });
    }
}