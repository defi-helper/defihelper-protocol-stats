"use strict";
const toolClass = process.argv[2];
try {
    require(`${__dirname}/tools/${toolClass}`).default();
}
catch (ex) {
    console.error(`Tool ${toolClass} doesn't exists`);
    console.info(ex);
}
