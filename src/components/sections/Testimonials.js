import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "https://cdn.discordapp.com/attachments/940184471783751720/940910624412667954/IMG_2217g.png",
    userName: "Othman Ghazlani",
    subtitle: "UI/UX Designer",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    avatar: "https://cdn.discordapp.com/attachments/940184471783751720/940910624412667954/IMG_2217g.png",
    userName: "Othman Ghazlani",
    subtitle: "Web developer at Upwork",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 3,
    avatar: "https://cdn.discordapp.com/attachments/940184471783751720/940910624412667954/IMG_2217g.png",
    userName: "Othman Ghazlani",
    subtitle: "Graphics designer at Dribbble",
    review:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
