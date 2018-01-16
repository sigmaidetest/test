module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["test3"] = {
        host: "test3.cvmlduwb8e2g.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "rdsuser",
        password: "12345678",
        database: "firstDB",
    };
    this.dbConnections["aurora_testa"] = {
        host: process.env.EndPoint_aurora_testa,
        port: ,
        user: "aurora_testa",
        password: "12345678",
        database: "aurora_testa",
    };
    this.dbConnections["aurora_test"] = {
        host: process.env.EndPoint_aurora_test,
        port: ,
        user: "aurora_test",
        password: "12345678",
        database: "aurora_test",
    };
    this.dbConnections["aurora_test"] = {
        host: process.env.EndPoint_aurora_test,
        port: ,
        user: "aurora_test",
        password: "12345678",
        database: "aurora_test",
    };
    
    };