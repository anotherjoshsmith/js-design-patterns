var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/bill.jpg');
    this.imgAttribution = ko.observable('idk');
    this.nicknames = ko.observableArray(['Tabitha', 'Gone off a Tabby', 'Taberculosis']);

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'newborn';
        } else if (this.clickCount() < 50) {
            return 'infant';
        }
        return 'teen';

    }, this);
};

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());