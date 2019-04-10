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
	shot = Object.create(shotStruct);
	shot.attributes = []; // 기존의 Attrbute를 초기화 한다.
	// project
	var project = document.getElementsByName("project");
	for (var i = 0; i < project.length; i++) {
		if (project[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = project[i].id;
			attr.name = project[i].name;
			attr.value = project[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// lens
	var lens = document.getElementsByName("lens");
	for (var i = 0; i < lens.length; i++) {
		if (lens[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = lens[i].id;
			attr.name = lens[i].name;
			attr.value = lens[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// multicam
	var multicam = document.getElementsByName("multicam");
	for (var i = 0; i < multicam.length; i++) {
		if (multicam[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = multicam[i].id;
			attr.name = multicam[i].name;
			attr.value = multicam[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// service
	var service = document.getElementsByName("service");
	for (var i = 0; i < service.length; i++) {
		if (service[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = service[i].id;
			attr.name = service[i].name;
			attr.value = service[i].value;
			shot.attributes.push(attr)
			break;
		};
	}

	// serviceDetail
	var serviceDetail = document.getElementsByName("serviceDetail");
	for (var i = 0; i < serviceDetail.length; i++) {
		if (serviceDetail[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = serviceDetail[i].id;
			attr.name = serviceDetail[i].name;
			attr.value = serviceDetail[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// vfxScript
	var vfxScripts = document.getElementsByName("vfxScript");
	for (var i = 0; i < vfxScripts.length; i++) {
		if (vfxScripts[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = vfxScripts[i].id;
			attr.name = vfxScripts[i].name;
			attr.value = vfxScripts[i].value;
			shot.attributes.push(attr)
		};
	}

	// reconstructOption
	var reconstructs = document.getElementsByName("reconstruct");
	for (var i = 0; i < reconstructs.length; i++) {
		if (reconstructs[i].checked) {
			attr = Object.create(attributeStruct);
			attr.id = reconstructs[i].id;
			attr.name = reconstructs[i].name;
			attr.value = reconstructs[i].value;
			shot.attributes.push(attr)
		};
	}
	shot.num = document.getElementById("numberOfShot").value;
	bucket.push(shot)
	bucketRender()
	bucketTotal()
}


