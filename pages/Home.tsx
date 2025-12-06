import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex w-full flex-col max-w-[960px] px-4 md:px-10">
          
          {/* HeroSection */}
          <div className="@container pt-5">
            <div className="@[480px]:p-0">
              <div 
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(24, 24, 17, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_1GKKEA_VTw_mslLPOLU-bV4PHB1Qo7OFIOQ7Bg5IVSsK3xKmZV0pMJL_7-Tk_zl7yKa9lF6_kUToquewVQnWWzBl42ptcEz2xU0y41XcPgyeJ629UPELNmr56xFz2IftpVK5fsfcUzyE7HIYRBCnwBeuVnlUt1TXkai31S9KsniBpKeNDG4AE30LiUXs8JxoWYuHjrhTiWHxGlKCYbhWc8cqnT_k8KSsyVPjh-e1IvC_3h-StzNJV8hwb7YNbnFKZ-uhqOh9dVcc")'
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Your Trusted Partner in Automotive Excellence
                  </h1>
                  <h2 className="text-white/80 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Expert service for everything from state inspections to custom lift kits.
                  </h2>
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90 transition-opacity"
                >
                  <span className="truncate">Schedule Your Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 p-0 mt-10">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#393928]">
              <p className="text-white/80 text-base font-medium leading-normal">Years in Business</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">15+</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#393928]">
              <p className="text-white/80 text-base font-medium leading-normal">Happy Customers</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">5,000+</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#393928]">
              <p className="text-white/80 text-base font-medium leading-normal">ASE Certified</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">100%</p>
            </div>
          </div>

          {/* FeatureSection */}
          <div className="flex flex-col gap-10 py-10 @container mt-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Our Core Services
              </h1>
              <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
                We offer a wide range of expert automotive services to keep your vehicle running smoothly.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-0">
              {[
                { icon: "shield", title: "State Inspections", desc: "Certified state vehicle inspections to ensure safety and compliance." },
                { icon: "straighten", title: "Alignments", desc: "Precision wheel alignments for better handling and tire life." },
                { icon: "album", title: "Brakes", desc: "Comprehensive brake services, from pads to rotors." },
                { icon: "stabilization", title: "Suspension", desc: "Suspension repair and upgrades for a smoother ride." },
                { icon: "tire_repair", title: "Tires", desc: "Tire sales, installation, rotation, and balancing." },
                { icon: "precision_manufacturing", title: "Diagnostics", desc: "Advanced diagnostics to pinpoint and fix any issue." },
                { icon: "lightbulb", title: "Lighting", desc: "Headlight, taillight, and interior lighting solutions." },
                { icon: "arrow_upward", title: "Lift Kits", desc: "Professional lift kit installation for trucks and SUVs." },
                { icon: "sports_volleyball", title: "Wheels", desc: "A wide selection of custom wheels and rims." },
              ].map((service, index) => (
                <div key={index} className="flex flex-1 gap-3 rounded-lg border border-[#393928] bg-[#222210] p-4 flex-col hover:border-primary/50 transition-colors">
                  <div className="text-primary"><span className="material-symbols-outlined">{service.icon}</span></div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-white text-base font-bold leading-tight">{service.title}</h2>
                    <p className="text-[#baba9c] text-sm font-normal leading-normal">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTASection */}
          <div className="@container mt-10 mb-10">
            <div className="flex flex-col items-center justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 rounded-xl bg-[#222210]">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Ready to get started?
                </h1>
                <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
                  Contact us today for a free quote or to schedule your next service.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-3 max-w-[480px] justify-center w-full">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                  >
                    <span className="truncate">Get a Quote</span>
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#393928] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:bg-[#393928]/80"
                  >
                    <span className="truncate">Schedule Service</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;