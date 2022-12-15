// var email = prompt("What is your email address?"); 
var userName = 'testUser';
var conf = {  
    "endpoint" : "https://lrs.adlnet.gov/xapi/",  
    "auth" : "Basic " + toBase64("xapi-tools:xapi-tools")                
};  
ADL.XAPIWrapper.changeConfig(conf);  