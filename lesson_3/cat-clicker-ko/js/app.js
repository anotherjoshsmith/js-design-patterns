var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/bill.jpg');
    this.imgAttribution = ko.observable('idk');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'newborn';
        } else if (this.clickCount() < 50) {
            return 'infant';
        }
        return 'teen';

    }, this);

};

ko.applyBindings(new ViewModel());