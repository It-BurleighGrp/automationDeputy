
import {handleDataProcessing} from '../reader/index.js'
import axios from 'axios'
import {fileToCsv} from '../fileToCsv/index.js'
import 'dotenv/config'


export async function service() {
    const params = {}
    await axios.post(`${process.env.ENDPOINT}`, params, {
        headers: {
            'Content-Type': "application/json",
            'Authorization' : `Bearer ${process.env.DEPUTY_TOKEN}`
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

