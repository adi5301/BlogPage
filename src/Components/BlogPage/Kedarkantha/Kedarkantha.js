import React from "react";
import imgK1 from "./K1.jpg";
import imgK2 from "./K2.jpg";
import imgK3 from "./K3.jpg";
import imgK4 from "./k4.jpg";


const Kedarkantha = React.forwardRef((props, ref) => {
  return (
    <>
      {" "}
      <div ref={ref} className="card1Expanded" id="4">
        <div className="Heading">
          <h2 id="HKDHeading">KEDARKANTHA - ABODE OF LORD SHIVA</h2>
        </div>
        <div className="headImgContainer">
          <img id="headImage" src={imgK4} alt="Main" />
        </div>
        <h1 id="H1">
          <div className="H1">PEOPLE DON'T TAKE TRIPS, TRIPS TAKE PEOPLE.</div>
        </h1>
        <div className="Card1">
          <div className="textPart">
            <p>
              It was on the 2nd of May when the sun at the east was peeping out
              behind the clouds, and we were waiting for a few to join us. It
              was 9 a.m. on the fresh summer day. They finally arrived and we
              departed, in a train which took us to Dehradun. We then took a bus
              to Sankri. Accompanied by a group of enthusiastic people on the
              bus, we played Truth or dare, bluff, and Mafia with them. Despite
              our expectations, we developed a very good bond at the earliest.
              On the way, in our exciting journey, we were amazed by the scenic
              beauty of the Yamuna river and the wide-spread Pine forests.
              Meanwhile, the bus stopped. YES! We reached Sankri. Our joy bound
              no words. We kept our luggage safe in our base camp and got ready
              fast to start our first summer trek.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgK1}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <p>
              With no further delay, we all began. Our minds were all set with
              the aim of completing the trek within a few hours. Eventually, we
              felt exhausted during the journey and thought to rest. But then we
              realized that we had just finished a single kilometer! In Spite of
              the exhaustion and debilitation, our seniors motivated us to keep
              our spirits high. A part of our team who were playing songs was
              suggested to enjoy vocals and visuals, by a senior, instead of
              using electronics. Meanwhile, one of our friends shared a bagful
              of gummy bears with us, which really helped us to take easier
              breaths at higher altitudes. After climbing planes and rocks, we
              reached a checkpoint-a mesmerizing lake, hidden between the
              snow-covered majestic mountains, offering scenic Himalayan
              landscapes - JUDA KA TALAB. Greeneries around were enhancing the
              grace of Heaven. Nearby the lake, we encountered a hut-like place,
              where we were served hot Maggie to satiate our hunger. We
              continued our move. At a point in time, we realized that most of
              us were suffering mild headaches and the reason wondered us all
              because we had crossed 9000 ft !!! It was dusk and we decided to
              camp. The location was a semi-snowy ground with green trees around
              and we all worked together to make our tents. Yep! Our tents were
              ready and then it was bonfire time! However, gathering sticks was
              a hectic task. One of the seniors, who had been to almost 10-12
              treks, narrated us horror stories. We were thoroughly enjoying the
              moment with chit-chat commentaries. We then decided to doze off
              under the twinkly sky lit up with a million stars, admiring how
              the Milky Way was spewing its milk across the sky.Our next
              wonderful day started at 4 a.m.
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgK2}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>

        <div className="Card1">
          <div className="textPart">
            <p>
              After staying there for a long while, we decided to descend. We
              decided to enjoy it to the fullest as we were then aware of the
              path. Few of us slid the snowy steeps. It was undoubtedly fun. It
              was dusk again and we were again into tenting and chit-chat mode,
              sharing our memories with each other which multiplied the
              happiness. Next day of descending started with hesitation at dawn
              because the water was damn cold that none literally dared to touch
              it. We continued the descent. We were almost back to the bottom
              and noticed our tanned skin blaming the hot sun. Eventually, it
              was dusk again and we made our tents ready. We engaged our
              chit-chats with interesting games. We played Uno, True or Dare,
              and a few more. Again our chit-chats continued very long that we
              legit ended the conversation discussed Egyptian Mythology. OUR
              JOURNEY CONTINUES...
              <hr color="black" size="25"></hr>
            </p>
          </div>
          <div className="imgPart">
            <img
              className="Card1Image"
              src={imgK3}
              alt="This image cant be viewed."
            />
            <hr color="black" size="25"></hr>
          </div>
        </div>
      </div>
    </>
  );
});

export default Kedarkantha;
