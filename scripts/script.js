var music = [
  {
    image: 'url("/public/images/rema_image.jpg")',
    music_title: "Infatuated",
    artist_name: "Valdo Dalow",
    music_audio: "/public/audio/infatuated_Valdo.mp3",
  },
  {
    image: 'url("/public/images/starr_image.jpg")',
    music_title: "Change",
    artist_name: "ML",
    music_audio: "/public/audio/change_ML.mp3",
  },
  {
    image: 'url("/public/images/starr2_image.jpg")',
    music_title: "Change",
    artist_name: "ML",
    music_audio: "/public/audio/change_ML.mp3",
  },
];

var currentIndex = 0;

function changeBg() {
  $(".hero").fadeOut(1000, "swing", function () {
    $(this).css("background-image", music[currentIndex].image);
    $(".music-title h1").text(music[currentIndex].music_title);
    $(".music-title h5").text(music[currentIndex].artist_name);
    $(this).fadeIn(1000, "linear");
  });
  currentIndex = (currentIndex + 1) % music.length;
}

setInterval(changeBg, 10000);
