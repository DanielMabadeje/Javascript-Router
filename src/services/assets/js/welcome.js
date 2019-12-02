$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});

$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});

// document.getElementById('header_container').style.display='none !important';
// document.getElementById('page_container');
// document.getElementById('footer_container').style.display='none';

// let i=1;
// const image=['assets/images/odulade4.jpg', 'assets/images/2202744D-6C09-4576-8C1B-6ABDBBFAD942-696x696.jpeg']
// change= () =>{
//     document.body.style.backgroundImage ='linear-gradient(rgba(15, 15, 15, 0.8),rgba(15, 15, 15, 0.8)), url('+image[i]+')';
//     i=(i + 1)%image.length;
// }
// document.body.style.backgroundImage = 'linear-gradient(rgba(15, 15, 15, 0.8),rgba(15, 15, 15, 0.8)), url('+image[0]+')';
// setInterval(change, 9000);