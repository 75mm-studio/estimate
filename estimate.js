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

// Callback
document.getElementById('addBucket').addEventListener('click', addBucket);

// 장바구니를 렌더링한다.
function bucketRender() {
	document.getElementById("bucket").innerHTML = "";
	for (var i = 0; i < bucket.length; i++) {
		var div = document.createElement("div");
		div.innerHTML += " id " + bucket[i].id;
		div.innerHTML += " init value " + bucket[i].initAmount;
		div.innerHTML += " number of shot " + bucket[i].num;
		for (var j = 0; j < bucket[i].attributes.length; j++) {
			div.innerHTML += " id " + bucket[i].attributes[j].id;
			div.innerHTML += " name " + bucket[i].attributes[j].name;
			div.innerHTML += " value " + bucket[i].attributes[j].value;
		}
		document.getElementById("bucket").appendChild(div);
	}
}

// 장바구니의 모든 값의 견적의 합을 구한다.
function bucketTotal() {
	var total = 0.0;
	for (var i = 0; i < bucket.length; i++) {
		var subtotal = bucket[i].initAmount * bucket[i].num;
		for (var j = 0; j < bucket[i].attributes.length; j++) {
			subtotal *= bucket[i].attributes[j].value;
		}
		total += subtotal;
	}
	document.getElementById("total").innerHTML = total;
}


function addBucket() {
	var shot = Object.create(shotStruct);
	var inputs = document.getElementsByTagName("input");
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
	bucketTotal()
}


