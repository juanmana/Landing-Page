let button = document.getElementById("icon")

let links = document.getElementById("links")


let counter = 0;


button.addEventListener("click", function(e){

    e.preventDefault();

if(counter==0){


    links.className =("links two")
    counter = 1;
}else{
    links.classList =("two")

    links.className =("links one")
    counter = 0;

}


})

