import React, { useState, useRef, useEffect } from "react";
import "./BlogPage.css";
import HarkiDun1 from "../../img/harkidoon1.jpg";
import HamptaPass1 from "../../img/hampta_pass1.jpg";
import Bardarsar1 from "../../img/bardarsar1.jpg";
import Kedarkantha1 from "../../img/kedarkantha1.jpg";
import CollagePC from "../../img/CollagePC.png";
import CollagePhone from "../../img/aa.png";
import HarKiDun from "./HarKiDun/HarKiDun";
import HamptaPass from "./HamptaPass/HamptaPass";
import Baradasar from "./Baradasar/Baradasar";
import Kedarkantha from "./Kedarkantha/Kedarkantha";

import { Component } from "react";
import Slider from "react-slick";

export default function BLogPage() {
  const ref = useRef(null);
  const [blog, setBlog] = useState("");
  var settings = {
    accessibility: false,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerPadding: "50px",
    useCSS: true,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const scrollToView = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(ref.current);
  };
  useEffect(() => {
    scrollToView();
  }, [blog]);
  return (
    <div className="blog">
      <div>
        <div className="collage-container">
          <img className="PC_collage" src={CollagePC} />
          <img className="mobile_collage" src={CollagePhone} />
        </div>
      </div>

      <div className="part2">
        <div className="container">
          <Slider {...settings}>
            <div>
              <div className="card">
                <div className="card_img">
                  <img className="img2" src={HarkiDun1} />
                </div>
                <div className="card_content">
                  <div>
                    <h4>Har ki Dun- Having Kickstart to Dreamland</h4>
                    <p className="">
                      Feels like Lord Shiva resides in this dreamland Seems like
                      this magical beauty is done by a wand Rises like, it is
                      unreachable to even telephone and broadband Prizes like
                      here your heart and soul will........
                    </p>
                  </div>
                  <a>
                    <button
                      className="button"
                      style={{ verticalAlign: "middle" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setBlog(<HarKiDun ref={ref} />);
                      }}
                    >
                      <span className="anchor">Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <div className="card_img">
                  <img className="img1" src={HamptaPass1} />
                </div>
                <div className="card_content">
                  <div>
                    <h4>Hampta Pass: A Staircase to Heaven</h4>
                    <p className="">
                      Hampta pass is a moderate level trek which takes you from
                      the lush green valley of Kullu to the desert valley of
                      Lahaul. It is one of the most famous treks near Manali and
                      loved by all trekkers........
                    </p>
                  </div>
                  <a href="#2">
                    <button
                      className="button"
                      style={{ verticalAlign: "middle" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setBlog(<HamptaPass ref={ref} />);
                      }}
                    >
                      <span>Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <div className="card_img">
                  <img className="img2" src={Bardarsar1} />
                </div>
                <div className="card_content">
                  <div>
                    <h4>
                      Baraadsar Lake Trek - Trek to a lake amidst the meadows
                    </h4>
                    <p className="">
                      The trail to Baradsaar Lake takes you through picturesque
                      meadows, brown oak and pine forests, massive clearings
                      with breathtaking mountain views, and finally over a ridge
                      that separates........
                    </p>
                  </div>
                  <a href="#3">
                    <button
                      className="button"
                      style={{ verticalAlign: "middle" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setBlog(<Baradasar ref={ref} />);
                      }}
                    >
                      <span>Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="card">
                <div className="card_img">
                  <img className="img1" src={Kedarkantha1} />
                </div>
                <div className="card_content">
                  <div>
                    <h4>Kedarkantha - Abode of Lord Shiva</h4>
                    <p>
                      One of the most popular winter treks, camping at
                      Juda-ka-Talab, watching the sunrise at 12,500 ft.,
                      360-degree view of snow-covered mountains, resting in the
                      lap of Lord Shiva. The scenic beauty of the........
                    </p>
                  </div>
                  <a href="#4">
                    <button
                      className="button"
                      style={{ verticalAlign: "middle" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setBlog(<Kedarkantha ref={ref} />);
                      }}
                    >
                      <span>Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
          {blog}
        </div>
      </div>
    </div>
  );
}
