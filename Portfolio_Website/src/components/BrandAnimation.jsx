import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = [
  { img: "1", animationDealay: "" },
  { img: "2", animationDealay: "30" },
  { img: "3", animationDealay: "60" },
  { img: "4", animationDealay: "90" },
  { img: "5", animationDealay: "120" },
  { img: "6", animationDealay: "150" },
  { img: "7", animationDealay: "180" },
  { img: "9", animationDealay: "210" },
  { img: "10", animationDealay: "240" },
  { img: "11", animationDealay: "270" },
  { img: "12", animationDealay: "300" },
  { img: "13", animationDealay: "330" },
  { img: "14", animationDealay: "360" },
  { img: "15", animationDealay: "390" },
  { img: "16", animationDealay: "410" },
  { img: "17", animationDealay: "440" },
  { img: "18", animationDealay: "470" }
];

export default function BrandAnimation() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li className="item" key={i}>
            <img
              src={`img/partners/${val.img}.svg`}
              alt="partners brand"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay={val.animationDealay}
            />
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
