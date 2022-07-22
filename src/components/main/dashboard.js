import React, { useContext, useState } from "react";
import { requestClient } from "../../utils/request-client";
import AuthContext from "../../context/AuthContext";
import message from "antd/lib/mentions";
import DashNav from "../layout/DashNav";
import {
  FcApproval,
  FcDebt,
  FcCurrencyExchange,
  FcEngineering,
  FcMoneyTransfer,
} from "react-icons/fc";
import Footer from "../layout/Footer";
export default function Dashboard() {
 
  const [deposit] = useState("0");
  const [profit] = useState("0");
  const [packages] = useState("");
  const [bonus] = useState("0");
  const [withdraw] = useState("0");
  async function saveDash(e) {
    e.preventDefault();

    try {
      const dashData = {
        deposit,
        profit,
        packages,
        bonus,
        withdraw,
      };
      await requestClient.post("dash/", dashData, {
        withCredentials: true,
      });
      message.success("Details will be updated soon.");
    } catch (err) {
      console.error(err);
      message.error("Error Sending Request. Try again!");
    }
  }

  //END OF FORM
  const { loggedIn } = useContext(AuthContext);
  return (
    <div class="bg-gray-900 text-gray-800 h-full">
      {/* Content */}
      <div className="grid md:grid-cols-5">
        <DashNav />
        {/* End Nav */}
        <main class="px-16 py-6 md:col-span-4">
          <div className="card2 h-fit w-full p-2 shadow-2xl">
            <h2 className="mt-3 mr-10 p-2 text-gray-500 font-bold">
              Hello, {loggedIn.email}
            </h2>
            <h4 class="font-bold text-3xl text-gray-500 mt-2 text-center">
              WELCOME TO YOUR DASHBOARD
            </h4>
          </div>
          <form onSubmit={saveDash} className="mt-5">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h1>
                  Hi, an instagram handle will be comunicated to you shortly. Pending that use the support section on your dashboard! We apologize for any inconveniencies<br/>
                  <h1 className="text-red-500">Kindly Drop your instagram handle in the message box under the "support" section of your dashboard.</h1>
                </h1>
                {/* <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Import
                  </button>
                </div> */}
              </div>
            </div>
          </form>

          <div>
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Cards go here */}

              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcMoneyTransfer className="text-4xl mx-auto" />
                  <span class="font-bold">Deposited: </span>
                  <br />
                  <span>$1050</span>
                </div>
              </div>

              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcDebt className="text-4xl mx-auto" />
                  <span class="font-bold">Profit:</span>
                  <br />
                  <span>$11200</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcEngineering className="text-4xl mx-auto" />
                  <span class="font-bold">Package:</span>
                  <br />
                  <span>GOLD</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcApproval className="text-4xl mx-auto" />
                  <span class="font-bold">Bonus:</span>
                  <br />
                  <span> $100</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcCurrencyExchange className="text-4xl mx-auto" />
                  <span class="font-bold">withdrawn:</span>
                  <br />
                  <span>$0</span>
                </div>
              </div>
            </div>

            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Cards go here */}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
