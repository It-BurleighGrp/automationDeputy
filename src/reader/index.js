import {employees} from '../types/employees/index.js'
import dayjs from 'dayjs'

export function handleDataProcessing(timesheetArray){
    const auxArray = []
    timesheetArray?.forEach((timesheet)=>{
        auxArray.push({
            Employee: employees(timesheet.Employee),
            Date: dayjs(timesheet.Date).format('DD/MM/YYYY'),
            StartTime: `${new Date(timesheet.StartTime*1000).getHours() < 10 ? `0${new Date(timesheet.StartTime*1000).getHours()}`: `${new Date(timesheet.StartTime*1000).getHours()}`}:${new Date(timesheet.StartTime*1000).getMinutes()}`, 
            EndTime: `${new Date(timesheet.EndTime*1000).getHours() < 10 ? `0${new Date(timesheet.EndTime*1000).getHours()}`: `${new Date(timesheet.EndTime*1000).getHours()}`}:${new Date(timesheet.EndTime*1000).getMinutes()}`,            
            MealBreak: String(timesheet.Mealbreak).split('T')[1].split('+')[0].split(':')[0].concat(':', String(timesheet.Mealbreak).split('T')[1].split('+')[0].split(':')[1]),
            TotalTime: timesheet.TotalTime
        })
    })
    return auxArray
}
