let bucket = [];

const shotStruct = {
	"id":"", // date로 설정할것. 나중에 삭제할 키로 사용하기
	"cameraTrackingAmount" : 300000.0, // KRW model
	"cameraTracking" : 1,
	"objectTrackingRidgidAmount" : 250000.0, // KRW model
	"objectTrackingRidgid" : 0,
	"objectTrackingNoneRidgidAmount" : 350000.0, // KRW model
	"objectTrackingNoneRidgid" : 0,
	"rotoanimationBasicAmount" : 500000.0, // KRW model
	"rotoanimationBasic" : 0,
	"rotoanimationSoftDeformAmount" : 500000.0, // KRW model
	"rotoanimationSoftDeform" : 0,
	"frameAmount" : 1000.0, // KRW model
	"frame" : 1,
	"attributes" : [],
};

const attributeStruct = {
	"id":"",
	"name":"", // type
	"value":1.0,
};

//init Write infomation
writeDate()

// Callback
document.getElementById('addBucket').addEventListener('click', addBucket);

function numberWithCommas(n) {
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 날짜를 넣는다.
function writeDate() {
	let date = new Date();
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	document.getElementById("date").innerHTML = `Pre-estimate Date: ${y}. ${m}. ${d}`;
}

function removeItem(e) {
	id = e.target.parentElement.getAttribute("id");
	for (i = 0; i < bucket.length; i++) {
		if ( bucket[i].id == id ) {
			console.log(id);
			bucket.splice(i,1);
		}
	}
	bucketRender()
}

// 장바구니를 렌더링한다.
function bucketRender() {
	let total = 0.0;
	document.getElementById("bucket").innerHTML = "";
	for (let i = 0; i < bucket.length; i++) {
		let div = document.createElement("div");
		div.setAttribute("id", bucket[i].id);
		let shotnum = 0;
		shotnum += parseInt(bucket[i].cameraTracking);
		shotnum += parseInt(bucket[i].objectTrackingRidgid);
		shotnum += parseInt(bucket[i].objectTrackingNoneRidgid);
		shotnum += parseInt(bucket[i].rotoanimationBasic);
		shotnum += parseInt(bucket[i].rotoanimationSoftDeform);
		div.innerHTML += `${shotnum} Shot,`;
		div.innerHTML += ` ${bucket[i].attributes.length} Attrs,`;
		div.innerHTML += ` ${bucket[i].frame} f`;
		// 가격을 합친다.
		subTotal = bucket[i].cameraTrackingAmount * bucket[i].cameraTracking;
		subTotal += bucket[i].objectTrackingRidgidAmount * bucket[i].objectTrackingRidgid;
		subTotal += bucket[i].objectTrackingNoneRidgidAmount * bucket[i].objectTrackingNoneRidgid;
		subTotal += bucket[i].rotoanimationBasicAmount * bucket[i].rotoanimationBasic;
		subTotal += bucket[i].rotoanimationSoftDeformAmount * bucket[i].rotoanimationSoftDeform;
		subTotal += bucket[i].frameAmount * bucket[i].frame;
		// 적용된 속성을 곱한다.
		let att = [];
		for (let j = 0; j < bucket[i].attributes.length; j++) {
			subTotal *= bucket[i].attributes[j].value;
			att.push(bucket[i].attributes[j].id);
		}
		div.setAttribute("title", att.join(","));
		div.innerHTML += " = ￦" + numberWithCommas(Math.round(subTotal));
		div.innerHTML += ` <i class="far fa-times-circle btn-outline-danger"></i>`;
		div.onclick = removeItem;
		document.getElementById("bucket").appendChild(div);
		total += subTotal;
	}
	document.getElementById("numOfItem").innerHTML = "Bucket: " + bucket.length;
	document.getElementById("total").innerHTML = "Total: ￦" + numberWithCommas(Math.round(total));

	// 데이터전송
	let data = {
	name: "Donald Duck",
	city: "Duckburg"
	}

	$.post("https://75mm.studio/estimate", function(data, status){
		alert("Data: " + data + "\nStatus: " + status);
	});
}

// 매치무브 샷 조건을 장바구니에 넣는다.
function addBucket() {
	let shot = Object.create(shotStruct);
	let inputs = document.getElementsByTagName("input");
	let currentDate = new Date();
	shot.id = currentDate.getTime();
	shot.attributes = []; // 기존의 Attrbute를 초기화 한다.
	for (let i = 0; i < inputs.length; i++) {
		type = inputs[i].getAttribute("type")
		if (!(type == "radio" || type=="checkbox")){
			continue;
		};
		if (inputs[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = inputs[i].id;
			attr.name = inputs[i].name;
			attr.value = inputs[i].value;
			shot.attributes.push(attr)
		};
	}
	shot.cameraTracking = document.getElementById("cameraTracking").value;
	shot.objectTrackingRidgid = document.getElementById("objectTrackingRidgid").value;
	shot.objectTrackingNoneRidgid = document.getElementById("objectTrackingNoneRidgid").value;
	shot.rotoanimationBasic = document.getElementById("rotoanimationBasic").value;
	shot.rotoanimationSoftDeform = document.getElementById("rotoanimationSoftDeform").value;
	shot.frame = document.getElementById("frame").value;
	bucket.push(shot)
	bucketRender()
}

function printMode() {
	window.print();
}
