function xapiTestSubmit(score) {

    var statement = {
        "actor": {
            "mbox": "mailto:user@example.com",
            "name": userName,
            "objectType": "Agent"
        },
        "verb": {
            "id": "http://adlnet.gov/expapi/verbs/completed",
            "display": {
                "en-US": "completed"
            }
        },
        "object": {
            "id": "http://adlnet.gov/expapi/tutorials/xapiwrapper/assessment",
            "definition": {
                "name": {
                    "en-US": "Training Tests Assessment"
                },
                "description": {
                    "en-US": "xAPI Wrapper used with an assessment form"
                }
            },
            "objectType": "Activity"
        },
        "result": {
            "score": {
                "raw": score,
                "min": 0,
                "max": 1
            }
        },
    };
    ADL.XAPIWrapper.sendStatement(statement);
}