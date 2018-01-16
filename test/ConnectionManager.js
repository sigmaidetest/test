module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["aurora_test"] = {
        host: process.env.EndPoint_aurora_test,
        port: 3306,
        user: "aurora_test",
        password: "12345678",
        database: "aurora_test",
    };
    
    };