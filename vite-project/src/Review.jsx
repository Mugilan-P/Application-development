import React from "react";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <Section id="blog">
      <div className="title">
        <h1>
          What our Happy Customers Say <br /> About Us
        </h1>
      </div>
      <div
        className="testimonials"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="testimonial-image-one">
          {/* <img src={testimonial1} alt="testimonials" /> */}
        </div>
        <div
          className="testimonial"
          style={{ width: "1000px", height: "400px" }}
        >
          <div className="title">
            <div className="image">
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                src="https://images.wallpaperscraft.com/image/single/man_loneliness_alone_171764_2160x3840.jpg"
                alt="Logo"
              />
            </div>
            <div className="info">
              <h3 style={{ color: "white" }}>Nagarjun</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className="description">
            Jetrips Hotel is an excellent choice for anybody for considering
            hosting their events there. Top level facilities and excellent staff
            make for a brilliant environment within which to operate. The hotel
            is meticulous in its planning.
          </p>
        </div>
        <div className="testimonial-image-two">
          {/* <img src={testimonial2} alt="testimonials" /> */}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .title {
    display: flex;
    justify-content: center;
    h1 {
      text-align: center;
      font-size: 2rem;
      width: 30%;
    }
  }
  .testimonials {
    display: flex;
    gap: 4rem;
    .testimonial {
      margin-top: 4rem;
      box-shadow: rgba(255, 255, 255, 10) 0px 7px 29px 0px;
      padding: 4rem 3rem;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border-top: 0.5rem solid var(--primary-color);
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        .image {
          img {
            height: 3rem;
          }
        }
        .info {
          span {
            color: var(--primary-color);
          }
        }
      }
      .desrciption {
        font-size: 5.1rem;
        line-height: 5.5rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
    .testimonials {
      flex-direction: column;
      overflow: hidden;
      .testimonial-image-one,
      .testimonial-image-two {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
  }
`;
