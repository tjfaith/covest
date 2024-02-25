import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className=" min-h-screen py-20  px-5 lg:px-32 mt-28 flex md:flex-row flex-col items-center gap-5 bg-muted justify-between w-full">
      <div className="flex gap-3  ">
        <div
          className=" md:w-60 h-screen-60 rounded-full shadow-xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src="/images/about/about1.jpg"
            alt="about image"
            width={200}
            height={200}
            className=" h-full w-full rounded-full object-cover"
          />
        </div>
        <div
          className=" object-cover md:w-60 h-screen-60 rounded-full mt-28 shadow-xl"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Image
            src="/images/about/about2.jpg"
            alt="about image"
            width={200}
            height={200}
            className=" h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <div className=" md:w-6/12  flex flex-col gap-10">
        <div>
          <div className="text-primary font-extrabold text-3xl flex-col inline-flex items-end mb-3">
            <div>About Us</div>
            <div className=" h-1 w-20 bg-primary"></div>
          </div>
          <div className="text-secondary/50" data-aos="fade-up">
            <div className=" font-bold text-5xl mb-3 ">
              Eradicating Poverty and Empowering thePeople
            </div>
            COvest Africa Limited is registered,
            certified and regulated by the Lagos state government with the
            primary purpose of eradicating poverty and empowering people. For
            us, the slogan is: Strategic Partnership, People Empowerment, and
            Poverty Eradication!
          </div>
        </div>

        <div>
          <div className="text-primary font-extrabold text-3xl flex-col inline-flex items-end mb-3">
            <div>Our Mission</div>
            <div className=" h-1 w-20 bg-primary"></div>
          </div>
          <div
            className="text-secondary/50"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit et qui suscipit. Excepturi hic facere nihil
            doloremque, dolor at explicabo ea laudantium, facilis repudiandae
            consectetur. Necessitatibus nobis voluptatibus nostrum perspiciatis.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
