import React, { memo } from "react";

const About = () => {
  return (
    <div className="flex flex-col" id="about">
      <section className="flex justify-between px-[8rem] py-[5rem] bg-slate-300">
        <div>
            <h1 className="text-center text-5xl font-bold text-gradient mb-10">About Us</h1>
            <p className="font-nunito leading-relaxed text-lg px-[15rem]">Our mission is to create an inclusive and supportive platform that empowers creators to unlock their true potential by providing them with the essential tools, resources, and opportunities they need to succeed. We aim to bridge the gap between creativity and sustainability by offering creators the financial backing, visibility, and recognition they deserve. Through this, we strive to nurture an environment where every creator can flourish—not only in their financial pursuits but also in their artistic journeys and personal growth—ultimately fostering a world where creativity is celebrated, valued, and adequately rewarded.</p>
        </div>
      </section>
      <section className="flex justify-between px-[8rem] pb-[5rem] bg-slate-300">
        <div className="w-[60%] py-5 flex flex-col justify-center gap-[2rem] p-[6rem]">
          <h2 className="font-bold tracking-wide text-5xl font-inter leading-snug text-gradient">
            Create Amazing <br /> Content And Earn
          </h2>
          <p className="font-nunito leading-relaxed text-lg">
            Creators Earn is a platform designed to empower creators by
            providing them with the tools and opportunities to monetize their
            content and skills. Whether you&apos;re a writer, artist, or influencer,
            Creators Earn helps you turn your passion into profit.
          </p>
        </div>
        <div className="shadow-inside rounded-xl border-2 p-3 bg-white">
          <img src="money_collector.png" className="w-[450px] rounded-xl" />
        </div>
      </section>
      <section className="flex justify-between px-[8rem] py-[5rem] bg-slate-300">
        <div className="shadow-inside rounded-xl border-2 p-3 bg-white">
          <img src="worldmap_looking.png" className="w-[450px] rounded-xl" />
        </div>
        <div className="w-[60%] py-5 flex flex-col justify-center gap-[2rem] p-[6rem]">
          <h2 className="font-bold tracking-wide text-5xl font-inter leading-snug text-gradient">
            Explore World By <br /> Making Supporters
          </h2>
          <p className="font-nunito leading-relaxed text-lg">
            Expand your reach, foster meaningful connections, and watch your
            influence grow as your supporters become your greatest advocates. By
            offering exclusive content, personalized rewards, and direct
            engagement, you can build a strong supporter base that fuels your
            creative journey.
          </p>
        </div>
      </section>
      <section className="flex justify-between px-[8rem] py-[5rem] bg-slate-300">
        <div className="w-[60%] py-5 flex flex-col justify-center gap-[2rem] p-[6rem]">
          <h2 className="font-bold tracking-wide text-5xl font-inter leading-snug text-gradient">
            Join Our Creators <br /> Community
          </h2>
          <p className="font-nunito leading-relaxed text-lg">
          Join a vibrant community of creators dedicated to sharing their passions, growing their audience, and unlocking exciting opportunities to connect, collaborate, and earn from their creative work.
          </p>
          <button className="gradient px-10 py-5 w-max text-white font-poppins font-bold rounded-full">Join Now</button>
        </div>
        <div className="shadow-inside rounded-xl border-2 p-3 bg-white">
          <img src="worldmap.png" className="w-[450px] rounded-xl" />
        </div>
      </section>
    </div>
  );
};

export default memo(About);
