var initialCats = [
    {
        clickCount : 0,
        name : 'Steven',
        imgSrc : 'img/steve.jpg',
        imgAttribution: 'idk',
        nicknames: ['Tabitha', 'Gone off a Tabby', 'Taberculosis']
    },
    {
        clickCount : 0,
        name : 'Stephen',
        imgSrc : 'img/steph.jpg',
        imgAttribution: 'idk',
        nicknames: ['Steph']
    },
    {
        clickCount : 0,
        name : 'William',
        imgSrc : 'img/will.jpg',
        imgAttribution: 'idk',
        nicknames: ['billiam']
    },
    {
        clickCount : 0,
        name : 'Bill',
        imgSrc : 'img/bill.jpg',
        imgAttribution: 'idk',
        nicknames: ['will']
    },
    {
        clickCount : 0,
        name : 'Edward',
        imgSrc : 'img/ed.jpg',
        imgAttribution: 'idk',
        nicknames: ['ed']
    }
];


var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'newborn';
        } else if (this.clickCount() < 50) {
            return 'infant';
        }
        return 'teen';
    }, this);
};

var ViewModel = function(catArray) {
    var self = this;  // make dummy variable to allow access to outer this

    this.catList = ko.observableArray([]);

    catArray.forEach(function(catItem) {
        self.catList.push( new Cat(catItem))
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel(initialCats));