import React from "react";
import styled from "styled-components";
import "./App.css";
import { useNavigate } from "react-router-dom";
// import Button from "./Button";
export default function Destinations() {
  const navigate = useNavigate();
  const data = [
    {
      name: "Cuba City",
      image:
        "https://wallpapercat.com/w/full/9/9/d/160912-1707x2560-mobile-hd-cuba-background.jpg",
    },
    {
      name: "Paris",
      image:
        "https://wallpapercat.com/w/full/b/d/0/293826-2160x3840-phone-4k-paris-wallpaper-image.jpg",
    },
    {
      name: "Japan",
      image: "https://i.redd.it/n4zswknsujia1.jpg",
    },
  ];
  return (
    <Section id="destination">
      <div className="info">
        <h2 style={{ marginLeft: "20px" }}>
          Top <span>Destinations</span> In The World
        </h2>
        <p style={{ marginLeft: "20px" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout from it.
        </p>
        {/* <Button text="Discover More" /> */}
        <button
          className="btn"
          style={{ backgroundColor: "#E97451", marginLeft: "30px" }}
          onClick={() => navigate("/packages")}
        >
          Discover More
        </button>
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => {
          return (
            <div className="destination" key={name}>
              <div className="image">
                <img src={image} alt="destinations" />
              </div>
              <div className="name">
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  gap: 5rem;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 3rem;
    h2 {
      font-size: 3rem;
      line-height: 3rem;
      span {
        color: var(--primary-color);
      }
    }
    p {
      color: var(--secondary-text);
    }
  }
  .destinations {
    flex: 2;
    display: flex;
    gap: 2rem;
    .destination {
      position: relative;
      img {
        height: 20rem;
      }
      .name {
        position: absolute;
        bottom: 0rem;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          to bottom,
          #ffffff14,
          #000000ae
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-left: 1rem;
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0rem 2rem;
    flex-direction: column;
    gap: 3rem;
    .destinations {
      flex-direction: column;
      .destination {
        img {
          width: 100%;
        }
      }
    }
  }
`;
