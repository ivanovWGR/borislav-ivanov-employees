import moment, { relativeTimeRounding } from 'moment';


export function getEmplyeesPrintInfo(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let currentEmp = data[i];
        for (let j = i + 1; j < data.length; j++) {
            let nextEmployee = data[j];

            if (currentEmp.ProjectID === nextEmployee.ProjectID) {
                //validate every date format
                let currentEmployeeStartDay = new Date(moment(currentEmp.DateFrom).format().slice(0, 10));
                let currentEmployeeEndDay = new Date(moment(currentEmp.DateTo).format().slice(0, 10));

                let nextEmployeeStartDay = new Date(moment(nextEmployee.DateFrom).format().slice(0, 10));
                let nextEmployeeEndDay = new Date(moment(nextEmployee.DateTo).format().slice(0, 10));

                if (Number(currentEmployeeStartDay) > + nextEmployeeStartDay && + currentEmployeeEndDay < + nextEmployeeEndDay && + nextEmployeeStartDay < + currentEmployeeEndDay) { // const daysWork = getsDays(nextEmployeeStartDay, currentEmployeeEndDay);
                    const daysWork = getsDays(currentEmployeeStartDay, currentEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);

                } else if (Number(currentEmployeeStartDay) > +nextEmployeeStartDay && +currentEmployeeEndDay < + nextEmployeeEndDay && +nextEmployeeStartDay < +currentEmployeeEndDay) {
                    const daysWork = getsDays(currentEmployeeStartDay, currentEmployeeEndDay);


                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);

                }
                else if (Number(currentEmployeeStartDay) < +nextEmployeeStartDay && +currentEmployeeEndDay < +nextEmployeeEndDay && +currentEmployeeEndDay > +nextEmployeeStartDay) {
                    const daysWork = getsDays(nextEmployeeStartDay, currentEmployeeEndDay);

                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) > +nextEmployeeStartDay && +currentEmployeeEndDay > +nextEmployeeEndDay) {
                    const daysWork = getsDays(currentEmployeeStartDay, nextEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) < +nextEmployeeStartDay && +currentEmployeeEndDay < +nextEmployeeEndDay && +currentEmployeeEndDay > +nextEmployeeStartDay) {
                    const daysWork = getsDays(nextEmployeeStartDay, currentEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) === + nextEmployeeStartDay && + currentEmployeeEndDay > + nextEmployeeEndDay) {
                    const daysWork = getsDays(nextEmployeeEndDay, nextEmployeeStartDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) === + nextEmployeeStartDay && + currentEmployeeEndDay < + nextEmployeeEndDay) {
                    const daysWork = getsDays(currentEmployeeEndDay, nextEmployeeStartDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) > + nextEmployeeStartDay && + currentEmployeeEndDay === + nextEmployeeEndDay) {
                    const daysWork = getsDays(currentEmployeeStartDay, currentEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
                else if (Number(currentEmployeeStartDay) < + nextEmployeeStartDay && + currentEmployeeEndDay === + nextEmployeeEndDay) {
                    const daysWork = getsDays(nextEmployeeStartDay, currentEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }

                else if (Number(currentEmployeeStartDay) === +nextEmployeeStartDay && +currentEmployeeEndDay === +nextEmployeeEndDay) {
                    const daysWork = getsDays(nextEmployeeStartDay, currentEmployeeEndDay);
                    let obj = {
                        'EmpID1': currentEmp.EmpID,
                        'EmpID2': nextEmployee.EmpID,
                        'ProjectID': nextEmployee.ProjectID,
                        'DaysWork': daysWork
                    };
                    res.push(obj);
                }
            }
        }
    }
   return res.sort((first, second)=>(second.DaysWork - first.DaysWork))             
      
}

function getsDays(d1, d2) {
    const TIME = Math.abs(d2 - d1);
    const DAYSTOGETHER = Math.ceil(TIME / (1000 * 60 * 60 * 24));
    return DAYSTOGETHER;
}
