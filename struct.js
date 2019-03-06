var shots = [];

const shot = {
	// currentTotal = initAmount * count * attributeRates
	"initAmount" : 300000.0,
	"count" : 1,
	"attributes" : [], // attribute list
};

const attribute = {
	"name":"",
	"type":"",
	"rate":1.0,
};

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
shots.push(shot);
console.log(shots);
