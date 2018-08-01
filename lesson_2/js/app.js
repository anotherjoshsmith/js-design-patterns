/* ========= Model ========= */


var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Steven',
            imgSrc : 'img/steve.jpg'
        },
        {
            clickCount : 0,
            name : 'Stephen',
            imgSrc : 'img/steph.jpg'
        },
        {
            clickCount : 0,
            name : 'William',
            imgSrc : 'img/will.jpg'
        },
        {
            clickCount : 0,
            name : 'Bill',
            imgSrc : 'img/bill.jpg'
        },
        {
            clickCount : 0,
            name : 'Edward',
            imgSrc : 'img/ed.jpg'
        }
    ]
};

/* ========= Octopus ========= */

var octopus = {
    init: function() {
        // set current cat to first in the model to start
        model.currentCat = model.cats[0];

        // tell views to initialize
        catListView.init();
        catView.init();
    },

    // function for catView to access current cat in the model
    getCurrentCat: function() {
        return model.currentCat;
    },

    // function for catListView to access list of cats
    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments counter for current cat
    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    }
};

/* ========= Views ========= */
var catView = {
    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            // call to octopus which increments counter and calls
            // back to catView.render() w/ updated count
            octopus.incrementCounter();
        });
        // render this view (update DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount.toString();
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view
        this.render();
    },

    render: function() {
        // get the cats we'll be rendering
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (var i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            var cat = cats[i];

            // make a new cat list item and set its text
            var elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop tick to connect
            // the view of the cat to the click event function)
            elem.addEventListener('click', (function(cat) {
                return function() {
                    octopus.setCurrentCat(cat);
                    catView.render();
                };
            })(cat)); // if we didn't have the outer function we'd always show ed

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        };
    }
};

// let 'er eat
octopus.init();