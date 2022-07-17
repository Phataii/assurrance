import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
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
          <header></header>

          <div>
            {/* <h4 class="font-bold text-gray-500 text-2xl mt-10 pb-2">
              AVAILABLE <span className="text-green-500">NFTs</span> FOR YOU
            </h4> */}
            <div class="mt-8 grid lg:grid-cols-3 gap-10">
              {/* Cards go here */}

              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcMoneyTransfer className="text-4xl mx-auto"/>
                  <span class="font-bold">Deposited:</span>
                  <br />
                  <span>$500</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcDebt className="text-4xl mx-auto"/>
                  <span class="font-bold">Profit:</span>
                  <br />
                  <span>$8500</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcEngineering className="text-4xl mx-auto"/>
                  <span class="font-bold">Package:</span>
                  <br />
                  <span>SILVER</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcApproval className="text-4xl mx-auto"/>
                  <span class="font-bold">Bonus:</span>
                  <br />
                  <span> $100</span>
                </div>
              </div>
              <div class="card hover:shadow-xl">
                <div class="p-4">
                  <FcCurrencyExchange className="text-4xl mx-auto"/>
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
      <Footer/>
    </div>
  );
}
