let college = {

    college_name: "Parul University",

    location: {
        area: "Limda",
        city: "Vadodara",
        state: "Gujarat"
    },

    departments: {
        cse: {
            hod: "Dr.Devanshu Patil",
            students: 1200,
            labs: 40
        },

        ece: {
            hod: "Dr.Suresh",
            students: 80,
            labs: 3
        }
    },

    students: {
        total: 1200,
        boys: 700,
        girls: 500
    },

    facilities: {
        library: "Available",
        canteen: "Available",
        hostel: "Available"
    },

    contact: {
        phone: 9392601520,
        email: "paruluniversity@gmail.com"
    }
};


// Retrieving the data

console.log(college["location"]);

console.log(college["location"]["city"]);

console.log(college["departments"]);

console.log(college["departments"]["cse"]);

console.log(college["departments"]["cse"]["hod"]);

console.log(college["students"]["total"]);


// Update the data

college["location"]["area"] = "Limda";

college["location"]["city"] = "Vadodara";

college["students"]["total"] = 1200;

console.log("After updating the data");

console.log(college["location"]);

console.log(college["students"]);


// Add new property

college["students"]["hostel_students"] = 300;

college["departments"]["cse"]["specialization"] = "Artificial Intelligence";

console.log("After adding a new property");

console.log(college["students"]);

console.log(college["departments"]["cse"]);


// Delete property

delete college["facilities"]["hostel"];

delete college["students"]["girls"];

console.log("After deleting");

console.log(college["facilities"]);

console.log(college["students"]);