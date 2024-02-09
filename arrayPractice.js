// Task 1 
var favMovies = ["Home Alone", "KGF", "Friends", "Dark", "Jurassic Park"]
console.log(favMovies[1]);

// Task 2
var movies = new Array(5);
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
console.log(movies[0]);

// Task 3
var movies = new Array(5);
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";

movies.splice(2,0,"Matrix");
console.log(movies.length);


// Task 4
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
delete movies[0];
console.log(movies);

// Task 5
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";
for (let i in movies) {
    console.log(parseInt(i)+1 + ". " + movies[i]);
}

//Task 6
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";
k=1;
for (let i of movies) {
    console.log(k +". "+ i);
    k+=1;
}

// Task 7
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";
movies.sort()
k=1;
for (let i of movies) {
    console.log(k +". "+ i);
    k+=1;
}


// Task 8
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";

var leastFavMovies =[];
leastFavMovies[0]= "Meg";
leastFavMovies[1]= "Jaws";
leastFavMovies[2]= "Sharknado";

console.log("Movies I like:\n\n");
for (var i in movies) {
    console.log(movies[i] + " " + (parseInt(i)+1));
}
console.log("\n\n\n");

console.log("Movies I regret watching:\n\n");
for (var i in leastFavMovies) {
    console.log(leastFavMovies[i] + " " + (parseInt(i)+1));
}

// Task 9
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";

var leastFavMovies =[];
leastFavMovies[0]= "Meg";
leastFavMovies[1]= "Jaws";
leastFavMovies[2]= "Sharknado";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies);


// Task 10
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";

var leastFavMovies =[];
leastFavMovies[0]= "Meg";
leastFavMovies[1]= "Jaws";
leastFavMovies[2]= "Sharknado";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies.slice(-1)[0]);


// Task 11
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";

var leastFavMovies =[];
leastFavMovies[0]= "Meg";
leastFavMovies[1]= "Jaws";
leastFavMovies[2]= "Sharknado";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies.slice(0, 1)[0]);


// Task 12
var movies = [];
movies[0]= "Home Alone";
movies[1]= "KGF";
movies[2]= "Friends";
movies[3]= "Dark";
movies[4]= "Jurassic Park";
movies[5]= "Spiderman";
movies[6]= "Aquaman";

var leastFavMovies =[];
leastFavMovies[0]= "Meg";
leastFavMovies[1]= "Jaws";
leastFavMovies[2]= "Sharknado";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();

var indexArr=[];
movies.forEach((movie, i) => {
    if(leastFavMovies.includes(movie)){
        indexArr.push(i);
    }
});
console.log(indexArr);

var likedmovies = ["Hangover1", "Hangover2", "Hangover3"]
indexArr.forEach((i) => {
    movies[i] = likedmovies.shift();
});
console.log(movies);


// Task 13
var movies = [["Home Alone", 1], ["KGF", 2], ["Friends", 3], ["Spiderman", 4], ["Aquaman", 5]];

var newList = movies.filter((movie) => {
  return typeof movie[0] === "string";
});
console.log(newList.map(movie => movie[0]));

// Task 14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(employees) {
  console.log("Employees: \n\n");
  employees.forEach((emp) => {
    console.log(emp);
  });
};
showEmployee(employees);


// Task 15
var data = [58, '', 'abcd', true, null, false, 0];
var filteredResult = function(arr) {
    return arr.filter(value => { 
        if(value) return value
    });
};
console.log(filteredResult(data));

// Task 16
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var getRandomNo = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
console.log(getRandomNo(num));

// Task 17
var num = [14, 8, 90, 22, 8, -2, 50];
var getLargestNo = (n) => {
    return Math.max(...n);
}
console.log(getLargestNo(num));