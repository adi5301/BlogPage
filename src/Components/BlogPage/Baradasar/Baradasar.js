import React from "react";
import imgB1 from "./B1.jpg";
import imgB2 from "./B2.jpg";
import imgB3 from "./B3.jpg";
import imgB4 from "./B4.jpg";


const Baradasar = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="card1Expanded" id="3">
        <div className="Heading">
          <h2 id="HKDHeading">
            BARAADSAR LAKE TREK - TREK TO A LAKE AMIDST THE MEADOWS
          </h2>
        </div>
        <div className="headImgContainer">
          <img id="headImage" src={imgB1} alt="Main" />
        </div>
        <h1 id="H1">
          <div className="H1">
            WHEN EVERYTHING FEELS LIKE AN UPHILL STRUGGLE, JUST THINK OF THE
            VIEW FROM THE TOP.
          </div>
        </h1>

        <div className="Card1">
          <div className="textPart">
            <p>
              On 13th of September as per the plan we need to start our journey
              for Baraadsar lake trek. The trek of Baraadsar lake is located at
              an altitude of 4400 meters between Rupin and Supin valley in the
              Himalayas. We rent a car from Dehradun and started heading towards
              Himri in the afternoon. It was a 7-hour drive through Purola
              village. All four of us knew driving and it was very easy. We
              reached there at around 10 pm and camped there. The splashing
              sound of Rupin river over there was really amazing and we enjoyed
              it a lot.
              <hr color="black"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgB2}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <p>
              The next day, we traveled to Bheetri village. The trek started
              there actually crossing beautiful villages and a pond to reach
              Kurla thach. Kurla thach is a grassy meadow located at a height of
              2600 meters and it is home to Gujjars. The view over there was
              fascinating and we took many photos from there. This place is
              surrounded by forests. We made a tent and stayed there. On the
              next day, we were actually leaving the forest area .
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgB3}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <p>
              The ascent trek started and reached the top of the mountain face.
              Then we crossed a ridge and reached Eitikat Odi which is the
              junction between Rupin and Supin valley. Realized that it will be
              a trouble for beginners and we won't recommend it for them. We
              continued the trek after taking a rest.The trek to Dalhar started
              the next day. Dalhar is a grassy top that offered us a splendid
              view of snow-capped peaks. That was truly a feast for our eyes. We
              could see Kedar Kantha peak on one side and Sewa village on the
              other side from this spot. After spending some time there, we
              moved to reach Devbasa. It is a campsite situated at a height of
              3650 meters.
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgB4}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>
        <div className="Card1">
          <div className="textPart">
            <p>
              Then came the most challenging part of our trek; from Devbasa to
              Baraadsar campsite which was our final destination. It was mostly
              uphill with a steep climb to Baraadsar Ridge. The climb was
              literally more tricky than we expected and we encountered snow and
              glaciers on our way. But we all had a strong desire to reach the
              top and it motivated us. Finally, we reached the top and its
              beauty proved that our efforts were worth it. Such an amazing
              view!!! It was so beautiful that we could not get our eyes off it!
              We took a lot of pictures and it was very exciting.
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgB1}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <p>
          On 17th, we started our return journey back to Dehradun. That was also
          slightly challenging. We carefully walked to Devbasa and camped at
          Sara forest. It took 2 days. After that, we went for a small trek to
          Boincha and Jakhol and finally reached Dehradun.
        </p>

        <p>
          The view over there was splendid and will remain a beautiful
          experience for all of us.
        </p>
      </div>
    </>
  );
});

export default Baradasar;
