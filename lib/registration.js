var RegResult = function(args){
    var result = {
        success: args.success || false,
        message: args.message || null,
        user: args.user || null
    };

    return result;
};

exports.applyForMembership = function(args){
    return new RegResult({success: true, message: "Welcome!"});
};