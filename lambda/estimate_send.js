var ACCOUNTID = process.env.ACCOUNTID;
var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    let responseBody = {
        message: `${event}`,
        input: event
    };
    let response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };

    let msg = "";
    msg += "작성일 : " + event.date +"\n";
    msg += "작성자 : " + event.author +"\n";
    msg += "프로젝트정보 : " + event.project + "\n";
    msg += "이메일 : " + event.email + "\n";
    msg += "코맨트 : " + event.comment + "\n";
    msg += "총견적 : " + event.total + "\n";
    msg += "세부항목 : " + event.items.length + "건\n";
    msg += "\n";
    msg += "test\n";
    msg += "test\n";

    var params = {
        Message: msg,
        Subject: `Estimate Notification - Send : ` + event.date,
        TopicArn: `arn:aws:sns:ap-northeast-2:${ACCOUNTID}:estimate_send`
    };
    var sns = new AWS.SNS();
    sns.publish(params, context.done);
    return response;
};
