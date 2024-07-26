import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Campaign from "../components/Campaign";
import { useState, useEffect } from "react";

export default function Home() {
  const [campaigns, setCampaigns] = useState({});

  useEffect(() => {
    axios
      .get("campaigns")
      .then((response) => {
        setCampaigns(response.data.data);
      })
      .catch(() => { });
  }, []);

  return (
    <>
      <section className="mx-auto max-w-7xl mb-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col justify-between gap-6">
          <p className="font-medium text-gray-900">
            Join us in making a difference and creating a better world for the stray animals.
          </p>
          <h1 className="text-4xl font-bold text-violet-600">
            EarthKind
          </h1>
          <p className="text-black-400">
          At <span className="text-violet-500 font-bold">EarthKind</span>, we believe every stray animal—from dogs and cats to horses, cows, bulls, donkeys, and monkeys—deserves a chance to thrive. Our platform is dedicated to supporting these animals through donations and community-driven campaigns. We recognize that Mother Earth is home to all living beings, and it is our duty to care for every creature that shares this planet with us.
          <br></br>
          By providing essential care and support, we aim to reduce stray incidents and foster harmony between humans and animals. Whether you wish to contribute to our mission through donations or get involved in our campaigns, <span className="text-red-500 font-bold">EarthKind offers a compassionate space for all who share our vision of kindness.</span> Join us in making a difference and become part of a community that deeply cares for every animal.
          </p>
        </div>
        <div>
          <img src="/hero.png" alt="" width="500" height="500" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-20 mb-16">
        <h2 className="text-3xl text-center font-medium capitalize mb-3">
          Kindness for <span className="text-red-500">Every Creature</span>
        </h2>
        <p className="text-gray-400 text-center mb-3">
          Your kindness can transform lives. With each donation, you provide food, treatment, shelter, and love to those who need it most. Join us in giving stray animals the hope they deserve.
          <span className="text-red-500 font-bold"> Together, we can make a difference.</span>
        </p>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="bg-violet-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a5 5 0 015 5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6a5 5 0 015-5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v3m0 0a2 2 0 01-2-2h4a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">MEALS</p>
            <small className="text-violet-600 font-bold">
              Help us fill their bowls and hearts—every contribution makes a difference.
            </small>
          </div>
          <div>
            <span className="bg-red-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m-9-9h18"
                />

              </svg>
            </span>
            <p className="text-gray-900 font-medium">HEALTH</p>
            <small className="text-red-600 font-bold">
              Help us ensure every stray animal receives the health care they deserve—your generosity makes a vital difference.
            </small>
          </div>
          <div>
            <span className="bg-green-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 22V12h6v10"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">SHELTER</p>
            <small className="text-green-600 font-bold">
              Give strays a Safe Haven—your support transforms lives.
            </small>
          </div>
          <div>
            <span className="bg-sky-500 flex justify-center text-2xl shadow-md mb-2 items-center w-9 h-9 rounded p-1 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.238 4.662a4.5 4.5 0 00-6.67 5.617L12 12l-1.568-1.72a4.5 4.5 0 00-6.67-5.617A4.5 4.5 0 004.5 12.24a4.5 4.5 0 007.485 3.137L12 17.5l.015-.012a4.5 4.5 0 007.485-3.137 4.5 4.5 0 00-1.262-4.85z"
                />
              </svg>
            </span>
            <p className="text-gray-900 font-medium">CARE</p>
            <small className="text-sky-600 font-bold">
              Support our mission to offer compassion and comfort—your generosity truly makes a difference.
            </small>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-20">
        <h2 className="text-2xl text-center font-medium capitalize mb-6">
          Some of our recent campaigns
          <br />
          <span className="text-red-500 font-bold">
            to help the helpless animals
          </span>
        </h2>

        <div className="w-full">
          {campaigns.length > 0}
          {
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              autoplay
              responsive={{ 0: { items: 1 }, 600: { items: 3 } }}
              dots={false}
              margin={8}
            >
              {campaigns.length > 0 &&
                campaigns.map((campaign) => {
                  return <Campaign key={campaign.id} campaign={campaign} />;
                })}
            </OwlCarousel>
          }
        </div>
      </section>
    </>
  );
}
