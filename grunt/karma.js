module.exports = {
    main: {
        configFile: "karma.conf.js",
        options: {
            files: [{
                pattern: "client/components/**/jquery.min.js"
            }, {
                pattern: "client/components/**/handlebars.js"
            }, {
                pattern: "client/puc-apps/**/*.js"
            }, {
                pattern: "tests/puc-specs/**/*.js"
            }]
        }
    }
};
