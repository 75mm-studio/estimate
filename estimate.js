var bucket = [];

const shotStruct = {
	"initAmount" : 300000.0,
	"num" : 1,
	"attributes" : [], // attribute list
};

const attributeStruct = {
	"id":"",
	"name":"", // camera, lens, scripts ...
	"value":1.0,
};

// addBucket
document.getElementById('addBucket').addEventListener('click', addBucket);

function addBucket() {
	shot = Object.create(shotStruct);
	shot.attributes = []; // 기존의 Attrbute를 초기화 한다.
	// project
	var currentProject = 1.0;
	var project = document.getElementsByName("project");
	for (var i = 0, length = project.length; i < length; i++) {
		if (project[i].checked) {
			currentProject = project[i].value;
			attr = Object.create(attributeStruct);
			attr.id = project[i].id;
			attr.name = project[i].name;
			attr.value = project[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// lens
	var currentLens = 1.0;
	var lens = document.getElementsByName("lens");
	for (var i = 0, length = lens.length; i < length; i++) {
		if (lens[i].checked) {
			currentLens = lens[i].value;
			attr = Object.create(attributeStruct);
			attr.id = lens[i].id;
			attr.name = lens[i].name;
			attr.value = lens[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// multicam
	var currentMulticam = 1.0;
	var multicam = document.getElementsByName("multicam");
	for (var i = 0, length = multicam.length; i < length; i++) {
		if (multicam[i].checked) {
			currentMulticam = multicam[i].value;
			attr = Object.create(attributeStruct);
			attr.id = multicam[i].id;
			attr.name = multicam[i].name;
			attr.value = multicam[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// service
	var currentService = 1.0;
	var service = document.getElementsByName("service");
	for (var i = 0, length = service.length; i < length; i++) {
		if (service[i].checked) {
			currentService *= service[i].value;
			attr = Object.create(attributeStruct);
			attr.id = service[i].id;
			attr.name = service[i].name;
			attr.value = service[i].value;
			shot.attributes.push(attr)
			break;
		};
	}

	// serviceDetail
	var currentServiceDetail = 1.0;
	var serviceDetail = document.getElementsByName("serviceDetail");
	for (var i = 0, length = serviceDetail.length; i < length; i++) {
		if (serviceDetail[i].checked) {
			currentServiceDetail *= serviceDetail[i].value;
			attr = Object.create(attributeStruct);
			attr.id = serviceDetail[i].id;
			attr.name = serviceDetail[i].name;
			attr.value = serviceDetail[i].value;
			shot.attributes.push(attr)
			break;
		};
	}
	// vfxScript
	var currentVfxScript = 1.0;
	var vfxScripts = document.getElementsByName("vfxScript");
	for (var i = 0, length = vfxScripts.length; i < length; i++) {
		if (vfxScripts[i].checked) {
			currentVfxScript *= vfxScripts[i].value;
			attr = Object.create(attributeStruct);
			attr.id = vfxScripts[i].id;
			attr.name = vfxScripts[i].name;
			attr.value = vfxScripts[i].value;
			shot.attributes.push(attr)
		};
	}

	// reconstructOption
	var currentReconstruct = 1.0;
	var reconstructs = document.getElementsByName("reconstruct");
	for (var i = 0, length = reconstructs.length; i < length; i++) {
		if (reconstructs[i].checked) {
			currentReconstruct *= reconstructs[i].value;
			attr = Object.create(attributeStruct);
			attr.id = reconstructs[i].id;
			attr.name = reconstructs[i].name;
			attr.value = reconstructs[i].value;
			shot.attributes.push(attr)
		};
	}

	// number of shot
	var nos = document.getElementById("numberOfShot").value;
	shot.num = parseFloat(nos);
	initAmount = 300000.0;
	initAmount *= currentProject;
	initAmount *= currentLens;
	initAmount *= currentMulticam;
	initAmount *= currentService;
	initAmount *= currentServiceDetail;
	initAmount *= currentVfxScript;
	initAmount *= currentReconstruct;
	initAmount *= parseFloat(nos);
	console.log(initAmount);
	bucket.push(shot)
	console.log(bucket);
}
