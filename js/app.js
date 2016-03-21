var initialHouses = [
		{
			house2Src: 'img/house/house_bluegrey-min.jpg',
			buttonSrc: 'img/buttons/bluegrey.png'
		},

		{

			house2Src: 'img/house/house_frenchgrey-min.jpg',
			buttonSrc: 'img/buttons/frenchgrey.png'
		},

		{

			house2Src: 'img/house/house_wintergrey-min.jpg',
			buttonSrc: 'img/buttons/skygrey.png'
		},

		{

			house2Src: 'img/house/house_jefftan-min.jpg',
			buttonSrc: 'img/buttons/jeffhouse.png'
		},

		{

			house2Src: 'img/house/house_bsweet-min.jpg',
			buttonSrc: 'img/buttons/bsweetchoc.png'
		},

		{

			house2Src: 'img/house/house_greige.jpg',
			buttonSrc: 'img/buttons/greige.png'
		},

		{

			house2Src: 'img/house/house_charcoal.jpg',
			buttonSrc: 'img/buttons/charcoal.png'
		}
	];

var House = function(data) {

	this.house1Src = ko.observable(data.house1Src);
	this.house2Src = ko.observable(data.house2Src);
	this.buttonSrc = ko.observable(data.buttonSrc);


};

var ViewModel = function() {
	var self = this;

	this.houseList = ko.observableArray([]);

	initialHouses.forEach(function(houseItem) {
		self.houseList.push( new House(houseItem));
	});

	this.currentHouse = ko.observable(this.houseList() [0] );

	this.setHouse = function(clickedHouse) {
		self.currentHouse(clickedHouse);
	};

	/*this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};*/
};


ko.applyBindings(new ViewModel());