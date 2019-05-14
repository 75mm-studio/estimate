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
    let date = new Date();
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	
    var sns = new AWS.SNS();
    var params = {
        Message: eventText,
        Subject: `Estimate Notification - Send: ${y}.${m}.${d}`,
        TopicArn: `arn:aws:sns:ap-northeast-2:${ACCOUNTID}:estimate_send`
    };
    sns.publish(params, context.done);
    return response;
};