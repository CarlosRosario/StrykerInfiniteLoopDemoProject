module.exports = function(config){
    config.set({
        logLevel: 'all',
        files: [
            { pattern: 'app/js/dummy_service.js', mutated: true, included: true},
            'test/unit/dummy_service.spec.js',
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        coverageAnalysis: 'perTest',
        reporter: ['html', 'progress', 'event-recorder'],
        // Issue always seems to happen with 1 concurrent runner. I haven't been able to reproduce the issue for more than 1 concurrent runner (other than my project)
        maxConcurrentTestRunners: 1,
        timeoutMs: 240000,
        karmaConfig: {
            singleRun: false,
            browsers: ['Chrome'],
            preprocessors: {
                'app/js/dummy_service.js': ['browserify'],
                'test/unit/dummy_service.spec.js': ['browserify']
            },
            frameworks: ['browserify','jasmine'],
        }
    });
}