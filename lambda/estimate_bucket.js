var ACCOUNTID = process.env.ACCOUNTID;
var SNSTOPIC = process.env.SNSTOPIC;
var AWS = require("aws-sdk");

function numberWithCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
    msg += "회사명 : " + event.author +"\n";
    msg += "담당자 : " + event.person +"\n";
    msg += "프로젝트정보 : " + event.project + "\n";
    msg += "예상시작일 : " + event.startdate + "\n";
    msg += "예상마감일 : " + event.enddate + "\n";
    msg += "이메일 : " + event.email + "\n";
    msg += "코맨트 : " + event.comment + "\n";
    
    let line = "";
    line += "견적 : " + event.unit + numberWithCommas(event.total) + ", ";
    line += "샷수 : " + event.totalShotNum + ", ";
    line += "총프레임 : " + event.totalframe + "\n";
    let attr = [];
    for (let a = 0; a < event.attributes.length; a++) {
        attr.push(event.attributes[a].id);
    }
    line += "속성 : " + attr.join(",") + "\n";
    line += "objectTrackingRigid : " + event.objectTrackingRigid + "샷, ";
    line += "multiObjectTracking : " + event.multiObjectTracking + "샷, ";
    line += "rotoanimationBasic : " + event.rotoanimationBasic + "샷, ";
    line += "rotoanimationSoftDeform : " + event.rotoanimationSoftDeform + "샷, ";
    line += "layout : " + event.layout + "샷, ";
    msg += line;
    msg += "\n";
    
    var params = {
        Message: msg,
        Subject: `Estimate Notification - Bucket : ` + event.date,
        TopicArn: `arn:aws:sns:ap-northeast-2:${ACCOUNTID}:${SNSTOPIC}`
    };
    var sns = new AWS.SNS();
    sns.publish(params, context.done);
    return response;
};