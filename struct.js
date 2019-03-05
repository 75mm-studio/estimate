var items = [];
const item = {
	"initAmount" : 300000.0,
	"count" : 1,
	"attributes" : [], // attribute list
};

const attribute = {
	"name":"",
	"type":"",
	"rate":1.0,
};

// featureFilm 추가함.
a = Object.create(attribute)
a.name = "featureFilm";
a.type = "project";
a.rate = 1.0;
item.attributes.push(a)

// anamorphic lens 추가함.
b = Object.create(attribute)
b.name = "anamorphic lens";
b.type = "lens";
b.rate = 2.0;
item.attributes.push(b)


console.log(item.attributes);
items.push(item);
console.log(items);
