
const {handleDataProcessing} = require('../reader/index')
const axios = require('axios')

async function service() {
    console.log('tá batendo aqui')
    const params = {}
    const result = await axios.post('https://0cc11e24125303.au.deputy.com/api/v1/resource/Timesheet/QUERY', params, {
        headers: {
            'Content-Type': "application/json",
            'Authorization' : 'Bearer 9826398cfe56b0718cd467dc5039ed33'
        },
    })
    .then(result => {
        console.log('aqui>>>', result.data)
        handleDataProcessing(result.data)
        return result.data

    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
}

module.exports = {service}



/* async function handleEmployeesTimesheet(){
    console.log('bateu aqui o trem ')
    try {
        const params  = {}
        const url = `${process.env.url}`
        const config = {
            headers: {
                'Content-Type': 'application/json',
              },
        }
        axios.defaults.headers.common = {
            "Content-Type": "application/x-www-form-urlencoded",
            'Authorization': `Bearer ${process.env.DEPUTY_TOKEN}`,
          }
    
        await axios.post(url, params , config)
        .then((result) =>{
            console.log('bateu aqui o trem>>>', result.data)
        })
    } catch (error) {
        console.log(error)
    }   
}
 */
