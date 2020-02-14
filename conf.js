exports.config = {
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['show-fps-counter=true']
        }
      },
      
    framework: 'jasmine',
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
    }
};