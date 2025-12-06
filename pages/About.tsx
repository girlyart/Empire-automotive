import React from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-10 md:gap-16 lg:gap-20 pb-20">
      <div className="@container pt-10 md:pt-16 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="@[480px]:p-0">
          <div 
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 rounded-lg" 
            style={{
              backgroundImage: 'linear-gradient(rgba(24, 24, 17, 0.8) 0%, rgba(24, 24, 17, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz2HLqjTFjnf8l_Y2oq3htdSwl2GnnlGdtWbAGX_Zx_1jvHYA_KuHm-EYzovI0XIHFP8eWRHEJATYcWG3CYzHZiYPDCQCzvZiNIZnB0lHoaRAC2KiAoWrZtIbrdcg2sEeosbVpppvCXeliWFum5_ypoiV20LWczp41WNmDCznSH6Vp41-JJ850Qyfktvd_8TJnsnvoTPRRCQTWH-hBjpQ2rNjJLqi5k1bpQ_U_CC15j3rqr_SE6TYASwWjFG9hSNB8lkzmd5HtAeOG")'
            }}
          >
            <div className="flex flex-col gap-2 text-center max-w-3xl">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Driven by Passion, Built on Trust
              </h1>
              <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Learn about the story, values, and the dedicated team that make Empire Automotive your trusted partner for quality automotive service.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="aspect-w-4 aspect-h-3 w-full h-80 rounded-lg overflow-hidden">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg hover:scale-105 transition-transform duration-700" 
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF7Rc_2YGPBqLw4tXW_no6N1pIhMd8HTLI9EXFI2zAWA83fsY8hjNh_LNcrXJcosQHEQcssFAWVJVwKxmQyrOiPRjN7EMIukpHHafLFao6piqbxt-t6plu0GcFAbBlwEf9zPjCWnmO-DOIfRgZbjpC61p1jXv9RX2AATuIBUMYI1qFUV-z2KuLECnAxsemtJ7yGFDn6mY_7V_G2vUG2VaPSV9ueI3p2ePFbf6Pp9EHZ4uvyrx-dYZkW7Rsqjyve_Yxpy7dBMTDrXy2")'
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Our Story</h2>
          <p className="text-white/80 text-base font-normal leading-relaxed">
            Founded in 2005, Empire Automotive started as a small, one-bay garage with a big mission: to provide honest, reliable, and high-quality automotive care to our community. Our founder, a master mechanic with over two decades of experience, built the business on a foundation of trust and technical excellence. Over the years, we've grown into a full-service workshop, but our core values remain the same. We're a family of passionate technicians dedicated to keeping your vehicle running safely and smoothly.
          </p>
        </div>
      </div>

      {/* FeatureSection / Our Core Values */}
      <div className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Our Core Values
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
            We are founded on the principles of quality, honesty, and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "shield", title: "Commitment to Quality", desc: "Using only the best parts and practices to ensure your vehicle is in top condition." },
            { icon: "sell", title: "Transparent Pricing", desc: "No hidden fees. We provide clear, upfront estimates for all our work." },
            { icon: "groups", title: "Customer-First Service", desc: "Your satisfaction is our priority. We're here to answer your questions and provide the best care." }
          ].map((feature, index) => (
            <div key={index} className="flex flex-1 gap-4 rounded-lg border border-[#393928] bg-[#222210]/50 p-6 flex-col text-center items-center hover:bg-[#222210] transition-colors">
              <div className="text-primary flex items-center justify-center bg-primary/20 rounded-full size-12 mb-2">
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{feature.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-lg font-bold leading-tight">{feature.title}</h2>
                <p className="text-white/70 text-sm font-normal leading-normal">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col gap-8 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-white text-[32px] font-bold leading-tight tracking-[-0.015em]">Meet Our Expert Team</h2>
          <p className="text-white/80 text-base font-normal leading-normal max-w-2xl">
            Our certified technicians are the heart of Empire Automotive. With a shared passion for cars and a commitment to excellence, they bring years of experience to every job.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "John Doe", role: "Founder & Master Technician", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZKGjaThYGzwD5cs2rNwdxHngkyhVjIEy1b6P5VBlRagr4GLYtyVYFzuR8ybvAHomZXbppmp65J5zVh45eH_i6i9kzIMnmrHZxa984LkNR_VfhbFtXzQ2fZQw4rhp2Xb2eQQw4bvUgUlRId-c8I7MwC8HLzxtfjqDPfF9OxQOLAWWrGH3SAzT-lPZ5syYFw4dOET8ztQp7oe1z-AkhBKTyIDiuVw7DHnMZtXcvoszPRndneXRx-SG_9x6yeATsy47p5tiyMc-cieKF" },
            { name: "Jane Smith", role: "Service Manager", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbw4umm3zo9G7hf2r-ZoSeuM5BFI9QyYm9eftfSMR1RXdmeKpuaTyVdrpeWxnTtGqyw9LLNvidsQW8IJFfWAfmDi1EjwRcG9iv2Nzn1tKudplPDqDH5SGnBh6sER7VC1O2lNNwTtQrez9ECRoi7y5o3kqtWNiEkwvX_ksvr9_K17xGDTkqSO7QSdTID9tB4XVAqHRoGo4TBykgHVLqOvCQEzLtLErasir6qw7XZR9DMa5jPixAsKPHSilgc4qLKmdx1B9fUOSe3czy" },
            { name: "Mike Johnson", role: "Lead Diagnostic Specialist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj19i_0wBndElK6JA32o0ifNeCxyZ-BPUqwKUAt7AKO4LvT3EY-q83DvuxatvGtjuUX4Btvot8t9IjmlqLlUz5zm_I-YBcV2nGXbEPf8-VG2v75Qp6aNFV6h1cJB7ZETW3NRFMtTvQdQuN_qJpUPhKOLPmAQkdWFJRHjCMcD0KwT_kS3mj5oz3isJb7wb8N4CQ_uiOAuqQcVUWAS3hZEinCTYNPupNKwOWA2YnJtsNsdhj0JrYIod-W-uJDkvPfcgbcJTNzuaP7m1U" },
            { name: "Sarah Williams", role: "ASE Certified Technician", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsuUWD_YMfSBEk-7kzttAePYGzfBZMgxnoGkc1ZHFWvFSHgppk4lW8lBGc3DzxvtPqGGO6ekAdPdkfLLbVFJxCI-sBqQ4MhSxu-82on3enobKGpdUygM0w6BxFHQ1mo-uiLSObMkb32Mb4BHJ8KKYt00_n9xCwz9nHR3qfL1-BBiyqE39uMd1GoLljwscbSiLkjBUhHXP92KOrUGxn_8a-kah8m4_JFt_o-3yIOu5q6KG6PGHJRRi56a1ZxYcRHw7kAesuHmsnFbQj" }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div 
                className="w-full aspect-square rounded-lg bg-cover bg-center mb-4 transition-transform duration-300 group-hover:scale-105" 
                style={{ backgroundImage: `url("${member.img}")` }}
              ></div>
              <h3 className="text-white text-lg font-bold">{member.name}</h3>
              <p className="text-primary text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Block */}
      <div className="px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="bg-primary/90 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-background-dark text-3xl font-bold">Ready for Exceptional Service?</h2>
            <p className="text-background-dark/80 mt-1">Trust your vehicle with the experts at Empire Automotive.</p>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="flex w-full md:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-background-dark text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-black transition-colors"
          >
            <span className="truncate">Book Your Appointment</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;