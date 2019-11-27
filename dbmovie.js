// var movies = {[
//     first : {
//         title: "IT",
//         review: "2 stars",
//         watched: false
//     },
//     second = {

//     }
// ]}

// var movie = {
//     title : ["IT", "Captain Marvel", "Downton Abbey", "Fantastic Beasts"],
//     review: ["3 stars", "4 stars", "5 stars", "2 stars"],
//     watched: [false,true,false,true]
// }

var movies = [
    {
        title: "IT",
        review: "3 stars",
        watched: false
    },
    {
        title: "Captain Marvel",
        review: "4 stars",
        watched: true
    },
    {
        title: "Downton Abbey",
        review: "5 stars",
        watched: false
    },
    {
        title: "Fantastic Beasts",
        review: "2 stars",
        watched: true
    }
]
// This version is good if you do not need to check the data
// but if you need to check the data
// it is better to create a var result to build you string
// all within a for each
// even better build the string in a separate function and call it with a for each
function showMovie() {
    movies.forEach(function(show) {

        console.log("You have " + seenMovie(show) + " \"" + show.title + "\" - " + show.review);
    })
}
function seenMovie(yes) {
    movies.forEach(function(seen) {
        if ( seen.watched ) {
            yes = "seen";
        } else yes = "not seen";
    })
}

