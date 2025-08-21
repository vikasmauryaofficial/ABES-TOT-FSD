const employee={
    ename: 'mohan', 
    eage: 30,
    edesignation: 'developer',
    esalary: 50000,  
    planguage:[{
        pl1: 'java',
        pl2: 'javascript',
        pl3: 'python'
    }],
    databases: [{
        database1: 'mysql',
        database2: 'mongodb',
        database3: 'postgresql'
    }],framework:[{
        framework1: 'spring',
        framework2: 'react',
        framework3: 'angular'
    }]
}

employee.company = 'Tech Solutions';
console.log(employee); // Output: 'java'

employee.planguage[0].pl1 = 'typescript';
console.log(employee.planguage[0].pl1); // Output: 'typescript'