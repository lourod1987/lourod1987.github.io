var course = new Object();

/*
Longhand
course.title = "JavaScript Essential Training";
course.instructor = "Morten Rand-Hendriksen";
course.Level = 1;
course.published = true;
course.views = 0;
*/

//shorthand
var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);