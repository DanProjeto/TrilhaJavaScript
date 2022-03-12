let language_courses = [{
	name: "English",
	price: 2500,
	hours: 160
}, {
	name: "Spanish",
	price: 1500,
	hours: 110
}, {
	name: "French",
	price: 3600,
	hours: 200
}, {
	name: "Chinese",
	price: 5500,
	hours: 400
}, {
	name: "German",
	price: 3800,
	hours: 230
}];

for (let course of language_courses) {

	let course_name = course.name;
	let course_price = course.price;
	let course_hours = course.hours;

	let course_hour_price = course_price / course_hours;

	console.log("Course name: " + course_name);
	console.log("Course hours: " + course_hours + " hours");
	console.log("Course price: $" + course_price + ",00");

	if (course_hour_price >= 15) {
		console.log("Hour/class greater than or equal to $15.00");
	} else {
		console.log("Hour/class less than $15.00");
	}

	console.log("\n");

}