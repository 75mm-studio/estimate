var ACCOUNTID = process.env.ACCOUNTID
var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    var eventText = JSON.stringify(event, null, 2);
    let responseBody = {
        message: `${event}`,
        input: event
    };
    let response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };
    var sns = new AWS.SNS();
    var params = {
        Message: eventText, 
        Subject: "Estimate Notification",
        TopicArn: `arn:aws:sns:ap-northeast-2:${ACCOUNTID}:estimate`
    };
    sns.publish(params, context.done);
    return response;
};