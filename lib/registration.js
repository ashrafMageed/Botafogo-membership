var application = require("../models/application");

var RegResult = function(args){
    var result = {};
        result.success= args.success || false;
        result.message= args.message || null;
        result.user= args.user || null;


    return result;
};

var validateInputs = function(app){
    if(!app.email || !app.password){
        app.setInvalid("Email and password are required");
    }else if(app.password !== app.confirm){
        app.setInvalid("passwords do not match");
    }else{
        app.validated();
    }
};
exports.applyForMembership = function(args){
    var app = new application(args);
    validateInputs(app);
    if(app.isValid())
        return new RegResult({success: true, message: "Welcome!", user: app});

    return new RegResult({});
};