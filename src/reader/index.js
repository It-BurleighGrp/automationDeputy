const {employees} = require('../types/employees/index')


function handleDataProcessing(timesheetArray){
    timesheetArray?.map((timesheet)=>{
        return(
            console.table(`
                Employee: ${employees(timesheet.Employee)}, 
                Date: ${timesheet.Date}, 
                StartTime: ${timesheet.StartTime}, 
                EndTime: ${timesheet.EndTime},
                MealBreak: ${timesheet.Mealbreak},
                TotalTime: ${timesheet.TotalTime}
            `)
        )
    })
}


module.exports = {
    handleDataProcessing
}