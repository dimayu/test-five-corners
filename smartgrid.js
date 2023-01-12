let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '0',
    mobileFirst: false,
    container: {
        maxWidth: '1600px',
        fields: '200px'
    },
    breakPoints: {
        lm: {
            width: '1024px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    }
};

smartgrid('./src/baseStyles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
