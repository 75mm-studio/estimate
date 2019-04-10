var bucket = [];
var initAmount = 300000.0;

const shot = {
	// currentTotal = initAmount * shotnum * attributeRates
	"initAmount" : 300000.0,
	"shotnum" : 1,
	"attributes" : [], // attribute list
};

const attribute = {
	"id":"",
	"type":"", // camera, lens, scripts ...
	"rate":1.0,
};

// addBucket
document.getElementById('addBucket').addEventListener('click', addBucket);

function addBucket() {
	// projectOption
	var currentProjectOption = 1.0;
	var projectOption = document.getElementsByName("projectOption");
	for (var i = 0, length = projectOption.length; i < length; i++) {
		if (projectOption[i].checked) {
			currentProjectOption = projectOption[i].value;
			break;
		};
	}
	// lensOption
	var currentLensOption = 1.0;
	var lensOption = document.getElementsByName("lensOption");
	for (var i = 0, length = lensOption.length; i < length; i++) {
		if (lensOption[i].checked) {
			currentLensOption = lensOption[i].value;
			break;
		};
	}
	// stereoOption
	var currentStereoOption = 1.0;
	var stereoOption = document.getElementsByName("stereoOption");
	for (var i = 0, length = stereoOption.length; i < length; i++) {
		if (stereoOption[i].checked) {
			currentStereoOption = stereoOption[i].value;
			break;
		};
	}
	// serviceOption
	var currentServiceOption = 1.0;
	var serviceOptions = document.getElementsByName("serviceOption");
	for (var i = 0, length = serviceOptions.length; i < length; i++) {
		if (serviceOptions[i].checked) {
			currentServiceOption *= serviceOptions[i].value;
		};
	}

	// serviceDetailOption
	var currentServiceDetailOption = 1.0;
	var serviceDetailOption = document.getElementsByName("serviceDetailOption");
	for (var i = 0, length = serviceDetailOption.length; i < length; i++) {
		if (serviceDetailOption[i].checked) {
			currentServiceDetailOption = serviceDetailOption[i].value;
			break;
		};
	}
	// vfxScriptOption
	var currentVfxScriptOption = 1.0;
	var vfxScriptOptions = document.getElementsByName("vfxScriptOption");
	for (var i = 0, length = vfxScriptOptions.length; i < length; i++) {
		if (vfxScriptOptions[i].checked) {
			currentVfxScriptOption *= vfxScriptOptions[i].value;
		};
	}

	// reconstructOption
	var currentReconstructOption = 1.0;
	var reconstructOptions = document.getElementsByName("reconstructOption");
	for (var i = 0, length = reconstructOptions.length; i < length; i++) {
		if (reconstructOptions[i].checked) {
			currentReconstructOption *= reconstructOptions[i].value;
		};
	}

	// number of shot
	var nos = document.getElementById("numberOfShot").value;
	initAmount *= currentProjectOption;
	initAmount *= currentLensOption;
	initAmount *= currentStereoOption;
	initAmount *= currentServiceOption;
	initAmount *= currentServiceDetailOption;
	initAmount *= currentVfxScriptOption;
	initAmount *= currentReconstructOption;
	initAmount *= parseFloat(nos);
	console.log(initAmount);
	initAmount = 300000.0
}

// preset 설정하기

// featureFilm 추가함.
a = Object.create(attribute)
a.id = "featureFilm";
a.type = "project";
a.rate = 1.0;
shot.attributes.push(a)

// anamorphic lens 추가함.
b = Object.create(attribute)
b.id = "anamorphic lens";
b.type = "lens";
b.rate = 2.0;
shot.attributes.push(b)


console.log(shot.attributes);
bucket.push(shot);
console.log(bucket);
