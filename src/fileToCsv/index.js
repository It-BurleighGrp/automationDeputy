import fs from 'fs'

export function fileToCsv(arrayTimesheet){
    arrayTimesheet.filter((timesheet, index)=>{
        if(timesheet.Employee === 'Isadora'){
            if(index === 1){
                try{
                    const headerCsv = 'Name, Date, Start Time, End Time, Meal break, Total Time\n'
                    fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, headerCsv)
                } catch(error){
                    console.log(error)
                }    
            }
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Giovanna'){
            if(index === 1){
                try{
                    const headerCsv = 'Name, Date, Start Time, End Time, Meal break, Total Time\n'
                    fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, headerCsv)
                } catch(error){
                    console.log(error)
                }    
            }
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Asami'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Jackie'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Jade'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Karmen'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Rachel'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Shiho'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Ana Carolina'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Melissa'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee === 'Nathalia'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }

        if(timesheet.Employee === 'Danielle'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }

        if(timesheet.Employee === 'Dalila'){
            const testeCsv = `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            try{
                fs.appendFileSync(`./csv/${timesheet.Employee}.csv`, testeCsv)
            } catch(error){
                console.log(error)
            }
        }
        if(timesheet.Employee!=='IT'&&timesheet.Employee!=='Isadora'&&timesheet.Employee!=='Giovanna')
        try{
            fs.appendFileSync(`./csv/allEmployees.csv`, 
                `${timesheet.Employee}, ${timesheet.Date}, ${timesheet.StartTime}, ${timesheet.EndTime}, ${timesheet.MealBreak}, ${timesheet.TotalTime}\n`
            )
        } catch(error){
            console.log(error)
        }
    })
    
}
