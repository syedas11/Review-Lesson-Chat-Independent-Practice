var yourName = "Syeda";
var friendsName = "Nanami";

$(".sent").show(function(){});

$(".yourbutton").click(function() {
    var yourInput = $(".your-input").val();
    $(".sent").append(yourInput + "<br>");
});

$(".friendbutton").click(function() {
    var friendInput = $(".friend-input").val();
    $(".received").append(friendInput + "<br>");
});

$(".received").css("color", "forestgreen");

/* spicy below */
var messagesReceived = 1;












//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}