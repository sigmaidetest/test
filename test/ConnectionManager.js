module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["test3"] = {
        host: "test3.cvmlduwb8e2g.us-east-1.rds.amazonaws.com:3306",
        user: "rdsuser",
        password: "12345678",
        database: "firstDB",
    };
    
        this.getDBConnection = function(instanceIdentifier){
            return this.dbConnections[instanceIdentifier];
        };
    };