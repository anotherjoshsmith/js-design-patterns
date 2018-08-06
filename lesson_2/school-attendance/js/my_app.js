/* ------------ Model ------------ */
var model = {
    days: 12,
    students: [
        {
            name: 'Slappy the Frog',
            attendance: null,
            daysMissed: 0
        },
        {
            name: 'Lilly the Lizard',
            attendance: null,
            daysMissed: 0
        },
        {
            name: 'Paulrus the Walrus',
            attendance: null,
            daysMissed: 0
        },
        {
            name: 'Gregory the Goat',
            attendance: null,
            daysMissed: 0
        },
        {
            name: 'Adam the Anaconda',
            attendance: null,
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
        var students = octopus.getStudents();

        // construct header
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

        // build table
        for (var i = 0; i < students.length; i++) {
            // this is the student we're currently looping over
            var student = students[i];
            // construct body elem
            var row = document.createElement('TR');
            var nameCol = document.createElement('TD');
            nameCol.setAttribute('class', 'name-col');
            nameCol.textContent = student.name;
            row.appendChild(nameCol);

            for (var j = 1; j <= days; j++) {
                var dayCol = document.createElement('TD');
                var box = document.createElement('INPUT');
                box.setAttribute('type', 'checkbox');
                box.checked = student.attendance[j - 1];
                box.setAttribute('onclick', 'octopus.updateRecord(this)');
                dayCol.appendChild(box);
                row.appendChild(dayCol);
            }

            var missedCol = document.createElement('TD');
            missedCol.setAttribute('class', 'missed-col');
            missedCol.textContent = student.daysMissed.toString();
            row.appendChild(missedCol);

            this.bodyElem.appendChild(row);
        }
    }
};

/* ------------ Octopus ------------ */
var octopus = {
    init: function () {
        console.log('initializing...');
        for (var i = 0; i < model.students.length; i++) {
            // this is the student we're currently looping over
            var student = model.students[i];
            student.attendance = this.getRecord(student.name);
        }
        // save to localStorage for persistence
        localStorage.attendance = JSON.stringify(model);
        this.countMissing();
        // initialize tableView
        tableView.init();
    },

    getStudents: function () {
        return model.students;
    },

    getRecord: function(name) {
        if (!localStorage.attendance) {
            return this.generateRecord();
        }

        var student_idx = JSON.parse(localStorage.attendance).students
            .findIndex(function (student) {
                return student.name == name;
        });

        return JSON.parse(localStorage.attendance).students[student_idx].attendance
    },

    generateRecord: function () {
        console.log('Creating attendance record...');
        var attendanceArray = [];

        function getRandom() {
            return (Math.random() >= 0.5);
        }

        for (var idx = 0; idx < model.days; idx++) {
            attendanceArray.push(getRandom());
        }
        return attendanceArray
    },

    getNumberOfDays: function () {
        return model.days
    },

    countMissing: function () {
        console.log('count absences, update model, render view.');
        for (var i = 0; i < model.students.length; i++) {
            var student = model.students[i];

            var sum = 0;
            for (var j = 0; j < student.attendance.length; j++) {
                if (student.attendance[j] == 0) {
                    sum++
                }
            }
            student.daysMissed = sum;
        }
    },

    updateRecord: function (thing) {
        console.log(thing);
        this.countMissing();
        // tableView.render();
    }
};

octopus.init();