const testimonials = [
  {
    name: "Tanya Sinclair",
    position: "UX Engineer",
    text: "I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    img: "images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    img: "images/image-john.jpg",
  }];

var i = 0;

$("#prev").click(prev);

$("#next").click(next);

function prev(){
  console.log("prev");
  i = i-1;
  if (i<0) {
      i = testimonials.length-1;
  }
  // console.log(testimonials[i].text);
  changePerson(i);
}

function next(){
  console.log("next");
  i = i+1;
  if (i > testimonials.length-1){
    i = 0;
  }
    changePerson(i);
}

function changePerson(i){
  $("#person-img").attr("src",testimonials[i].img);
  $("#name").text(testimonials[i].name);
  $("#position").text(testimonials[i].position);
  $("#body-text").text(testimonials[i].text);
}
