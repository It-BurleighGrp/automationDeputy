const {service} = require('./src/service/handleTimesheet.js')


async function main(){
    await service()
    //handleDataProcessing(timesheetArray)


}


main();
