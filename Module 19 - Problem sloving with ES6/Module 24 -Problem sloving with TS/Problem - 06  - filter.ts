interface Employees{
    name : string;
    onDuty : boolean;
}

const findOnDutyEmployees =(employees:Employees[]):Employees[]=>{
        const On_duty = employees.filter((employees)=>employees.onDuty === true)
        return On_duty;
}

console.log(findOnDutyEmployees([{name:"Lima",onDuty:true},{name:"Karim",onDuty:false}]

));

console.log(findOnDutyEmployees([{name:"Nusrat",onDuty:false}]));
console.log(findOnDutyEmployees([]));