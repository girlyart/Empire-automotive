import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow bg-background-light dark:bg-background-dark text-white">
      <div className="flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
          
          {/* HeroSection */}
          <div className="@container mt-5">
            <div className="@[480px]:p-0">
              <div 
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10" 
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2gVsY1PEe2bsH0W8IPbtHxjCGVt-HHe2F0ngQEKkzSvpcSBoroEXtA7XkIfx2D279FOzCU3VDWu577NNk1B9SsUst52vOS3c30ltdrhAHsFohay_BXoEZKzVXO7sWnCcDXKldNnq_puX-MIEU80G-94DebgHELsmWblZGS5xz3bzhIiW4bmO6N1Y_ZbKz4IAnqGAiM0-0-A7Wht6q-9PRCxAB2gORkhZKYJMX-4Kd9lbSSadaicjs_86l7gRonlZshSHUOfVczCly")'
                }}
              >
                <div className="flex flex-col gap-2 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Our Expert Services
                  </h1>
                  <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    From routine maintenance to performance upgrades, our certified technicians have you covered.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* TextGrid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 py-4 mt-8">
            {[
              { icon: "verified_user", title: "State Inspections", desc: "Official state vehicle safety and emissions inspections." },
              { icon: "4g_mobiledata", title: "Wheel Alignments", desc: "Precision wheel alignment for better handling and tire life." },
              { icon: "album", title: "Brake Services", desc: "Complete brake system repair and maintenance services." },
              { icon: "moving", title: "Suspension & Steering", desc: "Expert service for shocks, struts, and steering components." },
              { icon: "tire_repair", title: "Tire Sales & Service", desc: "A wide selection of tires with mounting and balancing services." },
              { icon: "neurology", title: "Engine Diagnostics", desc: "Advanced diagnostic tools to identify and fix engine issues." },
              { icon: "light", title: "Lighting & Electrical", desc: "Repair and replacement for all vehicle lighting and electrical systems." },
              { icon: "upgrade", title: "Lift Kits & Customization", desc: "Professional installation of lift kits for trucks and SUVs." },
              { icon: "sports_volleyball", title: "Wheels & Rims", desc: "Upgrade your vehicle with our premium selection of custom wheels and rims." },
            ].map((service, index) => (
              <div key={index} className="flex flex-1 gap-3 rounded-xl border border-white/10 bg-white/5 p-6 flex-col hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">{service.icon}</span>
                <div className="flex flex-col gap-1 mt-2">
                  <h2 className="text-white text-base font-bold leading-tight">{service.title}</h2>
                  <p className="text-white/60 text-sm font-normal leading-normal">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTASection */}
          <div className="@container mt-10 mb-10">
            <div className="flex flex-col items-center justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 rounded-xl bg-[#222210]">
              <div className="flex flex-col gap-2 text-center items-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-xl">
                  Ready to Get Started?
                </h1>
                <p className="text-white/80 text-base font-normal leading-normal max-w-lg">
                  Trust our certified experts for top-quality service and customer satisfaction. Schedule your visit today and experience the Empire Automotive difference.
                </p>
              </div>
              <div className="flex flex-1 justify-center mt-4">
                <div className="flex justify-center">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow hover:opacity-90 transition-opacity"
                  >
                    <span className="truncate">Book an Appointment</span>
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

export default Services;