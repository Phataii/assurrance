import React, { useState } from "react";
import axios from "axios";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import { BiBitcoin } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { FcRightDown2 } from "react-icons/fc";
import { FcRightUp } from "react-icons/fc";

export default function Landing() {
  const [price, setPrice] = useState("");
  const getApi = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=USD&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
        {
          withCredentials: false,
        }
      )
      .then((res) => {
        setPrice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Navbar transparent />
      <main onLoad={getApi}>
        <section className="md:grid grid-cols-2">
          <div className="pt-56 p-28">
            <h1 className="text-5xl">assuranceetrade</h1>
            <h2 className="text-xl mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              molestiae minima modi quod fugit corporis nostrum placeat dolore
              facilis cumque laudantium voluptate, veniam tempore, ab, dolor
              commodi molestias? Dolores, eaque.
            </h2>
            <span>
              <button className="bg-blue-300 p-2 text-white font-bold text-xl uppercase rounded-sm my-7">
                Start Trading
              </button>
            </span>
          </div>
          <div>
            <img
              src={require("../../images/bg.png").default}
              alt="Team"
              className="rounded-md"
              width="80%"
            />
          </div>
        </section>
        <section className="md:flex justify-around p-10 bg-gray-100">
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ">
              <i className="text-green-500 text-3xl">T</i>
            </div>
            <h2>TETHER (USDT)</h2>
            <p>
              Tether is a cryptocurrency that is hosted on the Ethereum and
              Bitcoin blockchains, among others. Its tokens are issued by the
              Hong Kong company Tether Limited, which in turn is controlled by
              the owners of Bitfinex
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.tether.usd}</p>
            )}
          </div>
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
              <BiBitcoin className="text-yellow-500 text-3xl" />
            </div>
            <h2 className="font-bold">BITCOIN (BTC)</h2>
            <p>
              Bitcoin is a decentralized digital currency, without a central
              bank or single administrator, that can be sent from user to user
              on the peer-to-peer bitcoin network without the need for
              intermediaries
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.bitcoin.usd}</p>
            )}
          </div>
          <div className="text-center shadow-2xl p-5 mx-10">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
              <FaEthereum className="text-gray-500 text-3xl" />
            </div>
            <h2>ETHEREUM (ETH)</h2>
            <p>
              Ethereum is a decentralized, open-source blockchain with smart
              contract functionality. Ether is the native cryptocurrency of the
              platform. Among cryptocurrencies, Ether is second only to Bitcoin
              in market capitalization
            </p>
            {price && (
              <p className="mt-3">Current Price: ${price.ethereum.usd}</p>
            )}
          </div>
        </section>
        <section className="md:flex justify-around">
          <div className="">
            <img
              src={require("../../images/about.png").default}
              alt="Team"
              className="rounded-md"
              width=""
            />
          </div>
          <div>
            <h1 className="font-bold text-3xl mt-32">about us</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              molestiae minima modi quod fugit corporis nostrum placeat dolore
              facilis cumque laudantium voluptate, veniam tempore, ab, dolor
              commodi molestias? Dolores, eaque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odit molestiae minima modi quod
              fugit corporis nostrum placeat dolore facilis cumque laudantium
              voluptate, veniam tempore, ab, dolor commodi molestias? Dolores,
              eaque.
            </p>
          </div>
        </section>
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl">how it works</h1>
          <div className="grid grid-cols-2">
            <div>
              <div className="text-center shadow-2xl p-5 mx-10">
                <h2>SignUp/Login</h2>
                <FcRightDown2/>
              </div>
              <div className="text-center shadow-2xl p-5 mx-10">
                <h2>SignUp/Login</h2>
                
                <span className="flex justify-between">
                  <p>hjbklhjbhjbnkjhjbnj</p>
                  <FcRightUp className="ml-10"/>
                </span>
              </div>
            </div>
            <div>
            <div className="text-center shadow-2xl p-5 mx-10 border-2 border-blue-500 mb-4">
                <h2>SignUp/Login</h2>
                <span className="flex">
                  <p>hjbklhjbhjbnkjhjbnj</p>
                <FcRightDown2/>
                </span>
                
              </div>
              <div className="text-center shadow-2xl p-5 mx-10">
                <h2>SignUp/Login</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-around">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sng!4v1657849297524!5m2!1sen!2sng"
            width="600"
            height="auto"
            style={{ border: 0, padding: 10 }}
            title="assuranceEtrade"
            className=""
          ></iframe>
          <div>
            <h2 className="text-3xl">Kindly drop Us a message</h2>
            <div>
              <form className="">
                {/* <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required
                  placeholder="Email"
                  className="border-l-4 text-gray-900 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
                /> */}
                <br />
                <input
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Name"
                  className="text-gray-900 border-blue-600 w-full rounded-sm shadow-md p-2 mt-1 mb-3"
                />
                <br />

                <textarea
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  type="number"
                  rows={6}
                  required
                  placeholder="Message..."
                  className="text-gray-900 border-blue-600 w-full rounded-sm shadow-md p-2 mt-1 mb-3 italic"
                />
                <br />
                <input
                  type="submit"
                  value="Send"
                  className="p-2 mb-10 rounded-sm w-full cursor-pointer text-white bg-blue-600 opacity-75 hover:opacity-50"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
