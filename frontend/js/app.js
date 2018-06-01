// /*var  person ={
//     "name": "Adrian",
//     "Age":28,
//     Address: {
//         "parish":"St Mary",
//         "city":"Kingston"
//     },
//     Friends:["Moya", "Shanoya", "Toya", "Tanny", "Charline", "Saudi"],
//     "email": "adrian@yahoon.com"
//
// }
// //
// // person = JSON.stringify(person);
// // person = JSON.parse(person);
//
// var people = [
//
// ];
//     var output = '';
//  //console.log(people[0].age);
//
// for (var i = 0; i < people.length; i++) {
//     //console.log(people[i].name);
//     output += '<li>'+people[i].name+'</li>';
// }
//
// document.getElementById('people').innerHTML = output;
// */
//
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200){
//         //console.log(xhttp.responseText);
//         var response = JSON.parse(xhttp.responseText);
//
//        // console.log(response.people);
//     }
// };
// xhttp.open("GET", "people.json", true);
// xhttp.send();