// Javascript document



window.addEventListener("DOMContentLoaded", bookmarkProject, false);
var bookmark = document.getElementById("bookmark");
bookmark.addEventListener("click", function() {
    var counting = 0;
    if (counting % 2 == 0){
        bookmark.style.backgroundColor = "blue";
    }
});







/*

function checkForm(){
    var noReward = document.querySelector("#no-reward");
    var bambooReward = document.querySelector("#bamboo-stand-reward");
    var blackReward = document.querySelector("#black-edition-reward");
    var mahoganiReward = document.querySelector("#mahogani-reward");
    var arr = [noReward, bambooReward, blackReward, mahoganiReward];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].setAttribute("checked","true") == true){
            
        }
    }
        
}

*/
//window.addEventListener("DOMContentLoaded", checkForm, false);

