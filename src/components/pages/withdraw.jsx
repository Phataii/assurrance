import { requestClient } from "../../utils/request-client";
import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "antd/dist/antd.css";
import { message } from "antd";
import DashNav from "../layout/DashNav";
import Footer from "../layout/Footer";

function TransactionsForm({ getTransactions }) {
  const [banks] = useState([
    { id: 1, name: "Bank Of America", code: "001" },
    { id: 2, name: "Capital One", code: "023" },
    { id: 3, name: "Citibank", code: "063" },
    { id: 4, name: "Chase", code: "005" },
    { id: 5, name: "JPMorgan Chase", code: "006" },
    { id: 6, name: "Wells Fargo", code: "008" },
    
  ]);
  const { loggedIn } = useContext(AuthContext);
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [crypto, setCrypto] = useState("");
  const [bank, setBank] = useState("");
  const [status] = useState("Pending");
  const [type] = useState("Withdrawal");
  
  

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        amount,
        walletAddress,
        crypto,
        bank,
        
        status,
        type,
      };
      await requestClient.post("transaction/", transactionData, {
        withCredentials: true,
      });
      message.success("Request has been sent! Would be processed within the next 24hrs");
     
    } catch (err) {
      console.error(err);
      message.error("Error Sending Request. Try again!");
    }
  }

  return (
    <div>
      <div class="grid md:grid-cols-5 bg-gray-900 text-gray-300">
        <DashNav />
        {/* End Nav */}
        <main class="px-16 py-6 md:col-span-4">
          <header>
            <h2 className="text-gray-300 font-bold text-xl text-right">
              Hi, {loggedIn.email}
            </h2>
          </header>

          <div className="">
            <h2 className="font-bold text-5xl text-gray-300 uppercase mt-7 pb-2 border-b border-gray-200 text-center">
              Enter Withdrawal details below
            </h2>

            <form onSubmit={saveTransaction} className="mt-5">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Need to make a Withdrawal?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <select
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      value={crypto}
                      required
                      onChange={(e) => setCrypto(e.target.value)}
                      style={{ transition: "all .15s ease" }}
                    >
                      <option>Choose coin/Currency</option>
                      <option>Bitcoin BTC</option>
                      <option>Etherium ETH</option>
                      <option>USDT</option>
                      <option>USD</option>
                      <option>EURO</option>
                      <option>Pound Sterling</option>
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                  <select
                    //name="banks"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    style={{ transition: "all .15s ease" }}
                  >
                    <option value="">Select bank</option>
                    {banks.map((bank, key) => (
                      <option key={key} value={bank.name}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
                  <div className="relative w-full mb-3">
                    <input
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Address/Account Number"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="amount"
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                  {/* <div className="relative w-full mb-3">
                    <input
                      value={date1}
                      onChange={(e) => setDate(e.target.value)}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      // placeholder="Address/Account Number"
                      style={{ transition: "all .15s ease" }}
                      
                    />
                  </div> */}
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Send request
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default TransactionsForm;
