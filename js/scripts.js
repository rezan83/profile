// google map
function initMap() {
  var latLang = {lat: 51.296, lng: 6.840};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: latLang
  });
  // add center marker
  var marker = new google.maps.Marker({
    position: latLang,
    map: map,
    draggable:true,
    title:"Hello..drg me!"
  });
  // add user marker
  google.maps.event.addListener(map, 'click',
    function(event) {placeMarker(event.latLng);
    }
  );
  function placeMarker(location) {
      var marker = new google.maps.Marker({
          position: location,
          map: map
      });
  };
};

$(document).ready(function(){
  // smothing nav plugin
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });
  // tooltip
  $(function () {
    var tooltip = $('[data-toggle="tooltip"]')
    tooltip.tooltip();
  });
  // hello message when nav brandname clicked
  $(".navbar-brand").on("click", function(){
    var name = prompt("please inter your name")
    if (!name){
      name = "Guest"
    }
    alert("hello "+name);
  });
  // shoing message back
  $("#message-submit").on("click", function(){
    // console.log("clicked");
    var message = $(".message-box").val();
    $(".message-label").css("color", "black");
    $(".re-message").html(message);
    $(".message-box").hide();
    return false;
  });
  // message count
  $(".message-box").on("keyup", function(){
    // console.log("key pressed");
    var messageLength = $(".message-box").val().length;
    // console.log(messageLength);
    if (messageLength>50){
      // console.log("too much!!");
      $(".message-length").html("more than 50 ..too much!!").css("color", "red");
    }else {
      // console.log(messageLength);
      $(".message-length").html(messageLength);
    }
  });
  // work section
  for (var i = 0; i < works.length; i++){
    var link = works[i].pic
    var linkTitle = works[i].title
    console.log(link);
    $(".project").append(
    '<div class="project-b col-md-4 col-sm-6 col-xs-12"><h2>Project b'
    +(i+1)+'</h2><a class="work-img" href='
    + link+'><img class="image-responsive" src='
    + link+'><span class="info"><p class="proj-title">Title:</p>'
    +linkTitle+' </span></a></div>'
    );
    var images = $(".project-b img")
    if (i%2 === 0){
      $(images[i]).css("border", "2px solid salmon");
      console.log("yes");
    }else {
      $(images[i]).css("border", "2px solid blue");
      console.log("no");
    };

  };
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });

});
// end ducument ready
