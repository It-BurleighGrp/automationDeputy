
import {handleDataProcessing} from '../reader/index.js'
import axios from 'axios'
import {fileToCsv} from '../fileToCsv/index.js'


export async function service() {
    console.log('tá batendo aqui')
    const params = {}
    const result = await axios.post('https://0cc11e24125303.au.deputy.com/api/v1/resource/Timesheet/QUERY', params, {
        headers: {
            'Content-Type': "application/json",
            'Authorization' : 'Bearer 9826398cfe56b0718cd467dc5039ed33'
        },
    })
    .then(async result => {
        const timesheetArrayData = handleDataProcessing(result.data)
        console.log('here>>>>>', timesheetArrayData)
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
}

