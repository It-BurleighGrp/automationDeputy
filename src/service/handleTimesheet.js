
import {handleDataProcessing} from '../reader/index.js'
import axios from 'axios'
import {fileToCsv} from '../fileToCsv/index.js'


export async function service() {
    console.log('tá batendo aqui')
    const params = {}
    const result = await axios.post('https://0cc11e24125303.au.deputy.com/api/v1/resource/Timesheet/QUERY', params, {
        headers: {
            'Content-Type': "application/json",
            'Authorization' : 'Bearer d41e466718910dcde8a256a4644fbe35'
        },
    })
    .then(async result => {
        const timesheetArrayData = handleDataProcessing(result.data)
        fileToCsv(timesheetArrayData)
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
}

