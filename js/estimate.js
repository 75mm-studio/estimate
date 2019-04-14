var bucket = [];

const shotStruct = {
	"id":"", // date로 설정할것. 나중에 삭제할 키로 사용하기
	"initAmount" : 300000.0,
	"num" : 1,
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
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
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
	var total = 0.0;
	document.getElementById("bucket").innerHTML = "";
	for (var i = 0; i < bucket.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("id", bucket[i].id);
		div.innerHTML += bucket[i].num;
		div.innerHTML += ` x Attributes(${bucket[i].attributes.length}) `;
		subTotal = bucket[i].initAmount * bucket[i].num;
		for (var j = 0; j < bucket[i].attributes.length; j++) {
			subTotal *= bucket[i].attributes[j].value
		}
		div.innerHTML += " = " + numberWithCommas(Math.round(subTotal));
		div.innerHTML += ` <i class="far fa-times-circle btn-outline-danger"></i>`;
		div.onclick = removeItem;
		document.getElementById("bucket").appendChild(div);
		total += subTotal;
	}
	document.getElementById("numOfItem").innerHTML = "Bucket: " + bucket.length;
	document.getElementById("total").innerHTML = "Total: " + numberWithCommas(Math.round(total));
}

// 매치무브 샷 조건을 장바구니에 넣는다.
function addBucket() {
	var shot = Object.create(shotStruct);
	var inputs = document.getElementsByTagName("input");
	var currentDate = new Date();
	shot.id = currentDate.getTime();
	shot.attributes = []; // 기존의 Attrbute를 초기화 한다.
	for (var i = 0; i < inputs.length; i++) {
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
	shot.num = document.getElementById("numberOfShot").value;
	bucket.push(shot)
	bucketRender()
}

function printMode() {
	window.print();
}
