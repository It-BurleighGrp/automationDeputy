import dayjs from 'dayjs'
import fs from 'fs'
import {sendMail} from '../mailer/index.js'

function appendCsv(employeeName, date, referenceDate, csvString, discarded){
    if(dayjs(date) >= referenceDate && discarded === null){
        try{
            fs.appendFileSync(`./csv/${employeeName}.csv`, csvString)
        } catch(error){
            console.log(error)
        }
    }
}

export function fileToCsv(arrayTimesheet){
    arrayTimesheet.filter((timesheet) => {
        const auxReferenceDate = dayjs().subtract(1, 'w')
        if(timesheet.Employee === 'Isadora'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Giovanna'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
           appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Asami'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Jackie'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Jade'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
           appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Karmen'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Rachel'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Shiho'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
           appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Ana Carolina'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
           appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Melissa'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee === 'Nathalia'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }

        if(timesheet.Employee === 'Danielle'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }

        if(timesheet.Employee === 'Dalila'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv(timesheet.Employee, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded)
        }
        if(timesheet.Employee!=='IT'&&timesheet.Employee!=='Isadora'&&timesheet.Employee!=='Giovanna'){
            const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            appendCsv('allEmployees', timesheet.ReferenceDate, auxReferenceDate, csvInfo)
        }
        
    })
    sendMail()
}
