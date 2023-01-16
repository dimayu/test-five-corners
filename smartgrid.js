let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '0px',
    mobileFirst: false,
    container: {
        maxWidth: '1600px',
        fields: '200px'
    },
    breakPoints: {
        xlm: {
            width: '1500px',
            fields: '50px'
        },
        lm: {
            width: '1240px',
            fields: '20px'
        },
        md: {
            width: '980px',
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
