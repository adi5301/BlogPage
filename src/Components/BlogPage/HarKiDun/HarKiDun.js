import React from "react";
import imgHKD1 from "./Har ki doon (4).jpg";
import imgHKD2 from "./Har ki doon (1).jpg";
import imgHKD3 from "./Har ki doon (2).jpg";
import imgHKD4 from "./Har ki doon (3).jpg";
import imgHKD5 from "./harkidoon6.jpeg";


const HarKiDun = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="card1Expanded" id="1">
        <div className="Heading">
          <h2 id="HKDHeading">HAR KI DOON TREK</h2>
        </div>

        <div className="headImgContainer">
          <img id="headImage" src={imgHKD1} alt="Main" />
        </div>
        <h1 id="H1">
          <div className="H1">THE HARDEST CLIMB GIVES YOU THE BEST VIEW</div>
        </h1>
        <div className="Card1">
          <div className="textPart">
            <h3>1. The Trek From Taluka To Gangad</h3>
            <p>
              Most trekkers know Har Ki Dun for its culture and history and trek
              to only Har Ki Dun but end up missing out on the beauty and
              variety the Ruinsara Tal has to offer. This is one of the most
              underrated sections of the trek. In less than five minutes of
              starting your trek, you find yourself on an undulating trail right
              beside the Thamsa river. You are constantly under a canopy of
              fresh green. Quaint old wooden bridges across the river appear out
              of nowhere giving you great picture opportunities. You cover miles
              on this trail without breaking a sweat. You’ll notice that the
              coniferous forest gets denser as you go further. The narrow trail
              snakes through this dense dark forest for a good hour before
              opening up to the traces of civilization — the ancient village of
              Gangad. We are not used to such leafy starts on treks. It was
              almost like a walk in a picture-perfect pine tree park.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgHKD2}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <h3>2. Swargarohini- The Way to HEAVEN</h3>
            <p>
              You never hear trekkers talk about any campsite on the Har Ki Dun
              trek. Like everyone else, I assumed Kalkatiyadhar to either be a
              small settlement or just beside it. Quite contrary to my
              expectations, Kalkatiyadhar turned out to be a vast green meadow.
              What blew me away was the expanse of the valley. We were in the
              middle of multi-level cricket-field-sized meadows, set at a
              vantage height. To my distant left, the trail climbed towards
              Swargrohini peaks, which were just peeking on the horizon. To my
              far right were dense jungles with mountains rising behind them.
              This was the trail to Ruinsara. To my right across the river was a
              meadow set amidst a boundary of pine trees. Behind me, I could
              trace the trail all the way down to Seema and even see the
              Kedarkantha summit miles away behind Kotgaon.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgHKD3}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <h3>3. The stories of the ancient villages</h3>
            <p>
              A lot has been said everywhere about the ancient villages of Har
              Ki Dun. You spot these villages from a distance, spread out on the
              mountainside, with houses almost hanging in the air. I could not
              wait to climb up to them and see what the interiors looked like.
              Spending a night in the village home takes you back hundreds of
              years. The stories of the village elders and the smiles of the
              youngsters are something that you want to capture and take back
              with you. The villages complete the famed Har Ki Dun experience.
              On our trek, you get to stay in at least two different villages –
              Gangad and Osla. Flowering bushes border the meadows throughout
              while tiny colorful flowers grow from the ground almost everywhere
              in spring.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgHKD4}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>
        <div className="Card1">
          <div className="textPart">
            <h3>4. Har Ki Dun and Ruinsara Tal valleys</h3>
            <p>
              I loved the expanse of the Har Ki Dun valley. The valley has
              everything going for it. Big snow-clad mountains towering right in
              front of you. A big river flowing right in the middle. Lovely
              green meadows stretching far and wide. I could sit there and just
              take in this scene the whole day. Ruinsara Tal on the other hand
              feels like a faraway world. The isolation grips you. It’s just
              you, the mountains and the lake. Looking at the mountains
              reflecting in the clear blue lake had a big calming effect on me.
              Devs Thatch turned out to be the best-kept secret of the entire
              Har Ki Dun – Ruinsara trail. You hardly see much of this meadow
              from anywhere else but when inside it. The secret is indeed well
              wrapped around by pine trees! I loved the meadows because they
              flow down from top to bottom for 600 meters and stretch for almost
              2 km in length.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgHKD5}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>
        <h2>Last but not the least</h2>
        <p>
          The splendor of nature, the stillness in the valleys, the astounding
          views of the night sky, the ardent display of colors during the
          sunset, the delight of staying in the tents out there in open, etc.
          had always fascinated me. However, I had not realized that a trek
          experience can teach us so much about LIFE!
        </p>

        <h2>
          "It is good to have an end to journey toward; but it is the journey
          that matters, in the end."
        </h2>
      </div>
    </>
  );
});

export default HarKiDun;
