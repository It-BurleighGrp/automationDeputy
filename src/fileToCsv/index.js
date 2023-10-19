import dayjs from 'dayjs'
import fs from 'fs'
import 'dotenv/config'
import {employeesToCSVInfo} from '../types/employees/index.js'
import {sendMail} from '../mailer/index.js'

const emailNames = []
const employeeTotalTime = {};
const employeeInfoAdded = {};

function appendCsv(employeeName, date, referenceDate, csvString, discarded, totalTime){
    if(dayjs(date) >= referenceDate && discarded === null){
        const filePath = `./reports/${employeeName}.csv`;
        const csvHeader = `Name, Date, Start Time, End Time, Meal Break, Time, Total Time, Wages\n`
        try{
            if(!fs.existsSync(filePath)){
                fs.appendFileSync(filePath, csvHeader)
                employeeTotalTime[employeeName] = 0
            }
            fs.appendFileSync(filePath, csvString)
            emailNames.push(employeeName)
            employeeTotalTime[employeeName] = employeeTotalTime[employeeName] + totalTime
        } catch(error){
            console.log(error)
        }
    }
}

export function fileToCsv(arrayTimesheet) {
    arrayTimesheet.filter((timesheet) => {
        const auxReferenceDate = dayjs().subtract(8, 'd');
        const employeeName = employeesToCSVInfo[timesheet.Employee];
        console.log('employee name', employeeName)
        const csvInfo = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`;
        if(timesheet.TimeApproved === true){
            appendCsv(employeeName, timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded, timesheet.TotalTime);
            appendCsv('allEmployees', timesheet.ReferenceDate, auxReferenceDate, csvInfo, timesheet.Discarded, timesheet.TotalTime);
        }
      });
      console.log(emailNames)

      emailNames.push('allEmployees')

      arrayTimesheet.forEach((timesheet) => {
        const totalTime = employeeTotalTime[timesheet.Employee];
        const employeeName = employeesToCSVInfo[timesheet.Employee] || 'allEmployees';
        const filePath = `./reports/${employeeName}.csv`;
      
        if (employeesToCSVInfo[timesheet.Employee] && !employeeInfoAdded[employeeName]) {
           let csvInfo = ''; 
          if(timesheet.Employee === 'Ana Carolina' || timesheet.Employee === 'Danielle' || timesheet.Employee === 'Dalila')  {
            csvInfo = `, , , , , , ${parseFloat(totalTime).toFixed(2)}, ${parseFloat(totalTime * 26.73).toFixed(2)}\n`;
          }
            csvInfo = `, , , , , , ${parseFloat(totalTime).toFixed(2)}, - \n`;
          if(totalTime){
              fs.appendFileSync(filePath, csvInfo);
              employeeInfoAdded[employeeName] = true;
            }
        }
      });
      
      const uniqueEmails = new Set(emailNames)

console.log(uniqueEmails)

      /* uniqueEmails.forEach((name) => {
        if(process.argv[2] === 'exception'){
            if(name === 'Melissa'){
                sendMail(name)
                return 
            }
        }
        if(!process.argv[2] && name !== 'Melissa'){
            sendMail(name)
        }
    }) */
}
