import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/hero/Hero.css";
import Carousel from "../components/Carousel";
// import { ReactComponent as LinkedinIcon } from "../../public/linkedin.svg";

export default function Home() {
  return (
    <main>
        <Navbar/>
        <div className="hero-bg-img">
        </div>
        <div className="w-full h-screen z-50 text-white flex justify-between items-center px-10">
            <div className="w-auto flex flex-col gap-3 text-center sm:text-left">
                <h3 className="text-3xl sm:text-5xl font-bold mb-5">Smart Environment Monitoring System</h3>
                <h4 className="text-xl sm:text-2xl">"Harness the Power of IOT System to Transform Your Farming Experience"</h4>
                <h3 className="text-2xl sm:text-4xl font-bold mt-10">Try the <span class="text-accent">Demo</span> Now!</h3>
            </div>
        </div>

        <section className="flex items-center">
          <div className="flex w-full px-12 md:ps-12 md:pr-6 py-16 flex-col text-center justify-center items-center md:justify-around md:flex-row md:text-left ">
            <div className="min-w-max flex justify-center mb-5 md:min-w-fit md:mb-0 ">
              <img width={372} src="/smart-farming.png"/>
            </div>
            <div className="flex flex-col justify-center max-w-xl">
              <h3 className="text-2xl font-bold">
                Monitor and Optimize Your Farming Environment
              </h3>
              <p className="text-lg mt-5">
                The Smart Environment Monitoring System is revolutionizing the way farmers manage their operations. By seamlessly integrating the IOT technologies with a state-of-the-art web application, our system empowers farmers to make informed decisions based on real-time data.
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center overflow-hidden relative">
          <div className="w-full ps-12 py-32">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold">
                Predict Pest Infestation to Prevent Crop Failure
              </h3>
              <p className="text-lg mt-5 w-3/5">
                Our system is equipped with a machine learning & statistical model that can predict the risk of pest infestation based on the environmental data. This allows farmers to take preventive measures to avoid crop failure.
              </p>
            </div>
          </div>
          <div className="absolute -right-24 -z-10">
            <img className="w-96 md:w-full opacity-90" src="/pest-prediction.png"/>
          </div>
        </section>

        <section className="flex items-center flex-col bg-slate-100 p-4">
          <h2 className="text-4xl font-bold">
            Our team
          </h2>
          <Carousel/>
        </section>
        <footer>
          <div className="flex justify-center items-center h-16 bg-neutral text-white">
            <p className="text-center font-semibold">© 2023 AGPOT. All rights reserved.</p>
          </div>
        </footer>
    </main>
  )
}
