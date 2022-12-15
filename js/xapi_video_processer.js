function videoSendxAPIStatement(action) {
    var statement = {
        "actor": {
            "account": {
                "homePage": "http://www.example.com",
                "name": userName
            },
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/video/" + action,
            "display": { "en-US": action }
        },
        "object": {
            "id": "http://example.com/index.html",
            "definition": {
                "name": { "en-US": "Training Video " + action}
            },
            "objectType": "Activity"
        }
    };
    ADL.XAPIWrapper.sendStatement(statement, function(){});
};  


