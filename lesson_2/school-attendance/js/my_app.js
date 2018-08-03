/* ------------ Model ------------ */
var model = {
    days: 12,
    students: [
        {
            name: 'Slappy the Frog',
            daysMissed: 0
        },
        {
            name: 'Lilly the Lizard',
            daysMissed: 0
        },
        {
            name: 'Paulrus the Walrus',
            daysMissed: 0
        },
        {
            name: 'Gregory the Goat',
            daysMissed: 0
        },
        {
            name: 'Adam the Anaconda',
            daysMissed: 0
        }
    ]
};


/* ------------ View ------------ */
var tableView = {
    init: function() {
        console.log('get data from model.');
        this.render();
    },

    render: function () {
        console.log('construct tableView.')
    }
};

/* ------------ Octopus ------------ */
var octopus = {
    init: function () {
        // initialize tableView
        tableView.init();

        // generate random attendance record and re-render
        // if record not found in localStorage
        this.generateRecord();
        tableView.render();
    },

    generateRecord: function () {
        console.log('generate record data if not in localStorage.');
    },

    countMissing: function () {
        console.log('count absences, update model, render view.');
    }
};

octopus.init();