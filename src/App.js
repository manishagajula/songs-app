import React, { useState } from "react";
import "./styles.css";

const songsDb = {
  Bollywood: [
    {
      name: "Agar Tum Saath Ho",
      Artist: "Arijit Singh",
      Movie: "Tamasha",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=xRb8hxwN5zc",
      image: "https://i.ytimg.com/vi/xRb8hxwN5zc/maxresdefault.jpg"
    },

    {
      name: "Why This Kolaveri Di",
      Artist: "Dhanush, Anirudh Ravichander",
      Movie: "3",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=YR12Z8f1Dh8",
      image:
        "https://1.bp.blogspot.com/-sBgsls6OnEg/XpWZ1EXcGdI/AAAAAAAAABU/NT9goeCEx4U1CtZnB-Lc-F34f96iMb5vgCLcBGAsYHQ/s1600/kolaveri-di.jpg"
    }
  ],

  Tollywood: [
    {
      name: "Buttabomma",
      Artist: "Armaan Malik",
      Movie: "Ala Vaikunthapurramuloot",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=2mDCVzruYzQ",
      image:
        "https://www.ilyricshub.com/wp-content/uploads/2019/12/buttabomma-ala-vaikunthapurramuloo.jpg"
    },
    {
      name: "Rowdy Baby",
      Artist: "Dhee, Dhanush",
      Movie: "Maari 2",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=x6Q7c9RyMzk",
      image:
        "https://wemagazine.in/wp-content/uploads/2019/01/maxresdefault.jpg"
    }
  ],

  Hollywood: [
    {
      name: "Willow",
      Artist: "Taylor Swift",
      Album: "Studio album by Taylor Swift",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=RsEZmictANA",
      image:
        "https://musicchartsarchive.com/sites/default/files/singles-large/swift-taylor--willow.jpg"
    },
    {
      name: "Dandelions",
      Artist: "Ruth B",
      Album: "Studio album by Ruth",
      rating: "10/10",
      Link: "https://www.youtube.com/watch?v=W8a4sUabCUo",
      image:
        "https://external-preview.redd.it/sE75-hkB1pTiwQsnI-vrrPXg2vHxAUcQBDoPQw80ujA.jpg?auto=webp&s=2ec1c7b9397b87edf7081ae0fffe34a7a284dba8"
    }
  ],

  Kpop: [
    {
      name: "Make It Right",
      Artist: "BTS",
      Album: "MAP OF THE SOUL: PERSONA",
      rating: "10/10",
      Link:
        "https://www.youtube.com/watch?v=eXBu09fwe3I&list=OLAK5uy_nzEPBPA0x5BxgeWmvfkSQMqSoLL9MH1G4&index=3",
      image: "https://i.ytimg.com/vi/sXeThLO_EeA/maxresdefault.jpg"
    },

    {
      name: "How you like that",
      Artist: "Blackpink",
      Album: "Studio album by BLACKPINK",
      rating: "9/10",
      Link: "https://www.youtube.com/watch?v=ioNng23DkIM",
      image:
        "https://www.hellokpop.com/wp-content/uploads/2020/06/blackpink1-1-660x400.jpeg"
    }
  ]
};

// [Bollywood,Tollywood,]

const songsDbArray = Object.keys(songsDb);

export default function App() {
  const [selectedSongs, setSelectedSongs] = useState("Bollywood");

  function buttonClickHandler(dbItem) {
    setSelectedSongs(dbItem);
  }

  return (
    <div className="App">
      <main>
        <h1 className="heading">Good Music Good Mood</h1>
        <h3 className="subheading">
          {" "}
          Checkout your favourite music and enjoy..!!{" "}
        </h3>
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              margin: "2rem 0"
            }}
          >
            {songsDbArray.map((dbItem, index) => (
              <span
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "1rem",
                  cursor: "pointer"
                }}
                onClick={() => buttonClickHandler(dbItem)}
              >
                {dbItem}
              </span>
            ))}
          </div>
        </section>

        <section>
          {songsDb[selectedSongs].map((lists, index) => {
            return (
              <div className="mainArea" key={index}>
                <div className="imageArea">
                  <img
                    src={lists.image}
                    className="main"
                    alt="actualimage"
                  ></img>
                </div>
                <div className="mainDescription">
                  <h1>{lists.name}</h1>
                  <p>{lists.Artist}</p>
                  <p>{lists.Album}</p>
                  <h4>Rating: {lists.rating}</h4>
                  <h1>Movie: {lists.Movie}</h1>
                  <a href={lists.Link} target="_blank" rel="noreferrer">
                    TAP TO WATCH
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <footer>
        <div>Made with 💛 by Manisha Gajula</div>
      </footer>
    </div>
  );
}
