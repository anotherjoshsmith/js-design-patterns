/* ------------ Model ------------ */
var model = {
    days: 12,
    students: [
        {
            name: 'Slappy the Frog',
            attendance: [],
            daysMissed: 0
        },
        {
            name: 'Lilly the Lizard',
            attendance: [],
            daysMissed: 0
        },
        {
            name: 'Paulrus the Walrus',
            attendance: [],
            daysMissed: 0
        },
        {
            name: 'Gregory the Goat',
            attendance: [],
            daysMissed: 0
        },
        {
            name: 'Adam the Anaconda',
            attendance: [],
            daysMissed: 0
        }
    ]
};


/* ------------ View ------------ */
var tableView = {
    init: function() {
        console.log('get data from model.');
        //this.tableElem = document.getElementById('attendance-table');
        this.headerElem = document.getElementById('attendance-table-header');
        this.bodyElem = document.getElementById('attendance-table-body');

        this.render();
    },

    render: function () {
        console.log('construct tableView.');
        var days = octopus.getNumberOfDays();

        var header = document.createElement('TR');
        var nameCol = document.createElement('TH');
        nameCol.setAttribute('class', 'name-col');
        nameCol.textContent = 'Student Name';
        header.appendChild(nameCol);

        for (var i = 1; i <= days; i++) {
            var dayCol = document.createElement('TH');
            dayCol.textContent = i.toString();
            header.appendChild(dayCol);
        }

        var missedCol = document.createElement('TH');
        missedCol.setAttribute('class', 'missed-col');
        missedCol.textContent = 'Days Missed';
        header.appendChild(missedCol);

        this.headerElem.appendChild(header);
    }
};

/* ------------ Octopus ------------ */
var octopus = {
    init: function () {
        console.log('initializing...');
        // initialize tableView
        tableView.init();

        // generate random attendance record and re-render
        // if record not found in localStorage
        //this.generateRecord();
        //tableView.render();
    },

    generateRecord: function () {
        console.log('generate record data if not in localStorage.');
    },

    getNumberOfDays: function () {
        return model.days
    },

    countMissing: function () {
        console.log('count absences, update model, render view.');
    }
};

octopus.init();