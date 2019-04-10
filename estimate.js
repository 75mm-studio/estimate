var bucket = [];
var initAmount = 300000.0;

const shot = {
	// currentTotal = initAmount * shotnum * attributeRates
	"initAmount" : 300000.0,
	"shotnum" : 1,
	"attributes" : [], // attribute list
};

const attribute = {
	"name":"",
	"type":"", // camera, lens, scripts ...
	"rate":1.0,
};

// addBucket
document.getElementById('addBucket').addEventListener('click', addBucket);

function addBucket() {
	var currentProjectOption = 1.0;
	// projectOption
	var projectOption = document.getElementsByName("projectOption");
	for (var i = 0, length = projectOption.length; i < length; i++) {
		if (projectOption[i].checked) {
			currentProjectOption = projectOption[i].value;
			break;
		};
	}
	// number of shot
	var nos = document.getElementById("numberOfShot").value;
	console.log(initAmount * currentProjectOption * parseFloat(nos));
	console.log(nos);
}

// preset 설정하기

// featureFilm 추가함.
a = Object.create(attribute)
a.name = "featureFilm";
a.type = "project";
a.rate = 1.0;
shot.attributes.push(a)

// anamorphic lens 추가함.
b = Object.create(attribute)
b.name = "anamorphic lens";
b.type = "lens";
b.rate = 2.0;
shot.attributes.push(b)


console.log(shot.attributes);
bucket.push(shot);
console.log(bucket);
