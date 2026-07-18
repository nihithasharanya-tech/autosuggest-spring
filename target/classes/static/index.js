// alert("Hellooo from js")
console.log("hellooo from js");

var users=[
    {
        "name": "John Doe",
        "gender": "Male",
        "img": "john.png"
    },
    {
        "name": "Jane Doe",
        "gender":"Female",
        "img": "jane.png"
    }
]

var id=0;

function toggleUser(){
    id=(id+1)%2
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    var userName= document.getElementsById("user-name");
    userName.innerHTML = users[id].name;

    var userGender= document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;
}

function randomuser(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        var userdata = data.results[0];

        var userImage = document.getElementById("user-image");
    userImage.src = userdata.picture.large;

    var userName= document.getElementsById("user-name");
    userName.innerHTML = userdata.name.first + " " + userdata.name.last;

    var userGender= document.getElementById("user-gender");
    userGender.innerHTML = userdata.gender;
    })
    .catch(function(error){
        console.log(error);
    })
}
