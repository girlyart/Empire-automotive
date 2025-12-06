import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="flex-1 px-4 py-10 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* HeroSection */}
        <div className="relative mb-16 overflow-hidden rounded-xl">
          <div 
            className="flex min-h-[400px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 text-center" 
            style={{
              backgroundImage: 'linear-gradient(rgba(24, 24, 17, 0.8) 0%, rgba(24, 24, 17, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDfzEaeHG7hIo-HdS2Aqv11XQ0lTcEZ4N_0M6Ax_UhfcCsnJAtiXwoJS4StZnaKF5d48e2AAIo5aLTuD8Crq25b2B2mNQZzTLC31b6F2gMAVnT8QnRgdjTuK7z2nEl6uJC-ENgMEEN4Df_mTzC5RgVUS_yGEXlExGrViafIsv5B6skL2te2AiCs2aSkWy6JK6sBGNUt_NUev-cnrsbivjTzREghU1h227vNCjtVr76X2u_TXtuMh8RvJudv7WPGqGuUbPnR67l-qH1e")'
            }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white sm:text-5xl md:text-6xl">
                Get In Touch With Us
              </h1>
              <p className="mx-auto max-w-2xl text-base font-normal leading-normal text-white/80 sm:text-lg">
                Have a question or need to schedule a service? Reach out and our team will be happy to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column: Info */}
          <div className="flex flex-col gap-10 lg:col-span-2">
            {/* Contact Info Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">Contact Information</h2>
              <div className="flex flex-col gap-5">
                <a className="group flex items-start gap-4" href="#">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#393928] group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-background-dark">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Address</p>
                    <p className="text-sm text-white/70">123 Auto Lane, Mechanicville, USA 12345</p>
                  </div>
                </a>
                <a className="group flex items-start gap-4" href="tel:555-123-4567">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#393928] group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-background-dark">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Phone Number</p>
                    <p className="text-sm text-white/70">(555) 123-4567</p>
                  </div>
                </a>
                <a className="group flex items-start gap-4" href="mailto:contact@empireauto.com">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#393928] group-hover:bg-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-background-dark">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-sm text-white/70">contact@empireauto.com</p>
                  </div>
                </a>
              </div>
            </div>
            {/* Business Hours Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">Business Hours</h2>
              <div className="flex flex-col gap-2 rounded-lg bg-[#393928]/40 p-4">
                <div className="flex justify-between border-b border-white/10 pb-2 text-sm">
                  <span className="text-white/80">Monday - Friday</span>
                  <span className="font-medium text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 py-2 text-sm">
                  <span className="text-white/80">Saturday</span>
                  <span className="font-medium text-white">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 text-sm">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-medium text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map and Form */}
          <div className="flex flex-col gap-10 lg:col-span-3">
            {/* Map Section */}
            <div className="h-80 w-full overflow-hidden rounded-xl">
              <img 
                className="h-full w-full object-cover" 
                alt="A map showing the location of the auto shop, centered on Mechanicville, USA." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUvJfTlaU8Qt_LDyo5EfVRCYalNTVWdqzWIUgHU0SjcPeOw4jxH-ZfQedKxP26kOW_4vYKL66N4a2Wu4h1F-p_YAITjX-gg_PlYtkuRUFzgTIBQChA13FKTLZ2vAH631NlfOrVUXjK7-oZNLaab_xQPKZWL2aGJtebkxwIW_z3ZHVx8YXtKRVNjBl-2BaWHorz48btZmfjBVFgEc-vn0QVdA8HDWX0CX1rsvWfSIbGZsEeTAY2SkiO2B4DNzL7wMzlNIJMm0bd7tZE"
              />
            </div>

            {/* Contact Form Section */}
            <div className="rounded-xl bg-[#393928]/40 p-6 sm:p-8">
              <h2 className="mb-1 text-2xl font-bold tracking-tight text-white">Send Us a Message</h2>
              <p className="mb-6 text-sm text-white/70">We'll get back to you as soon as possible.</p>
              <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-white/90" htmlFor="full-name">Full Name</label>
                  <input 
                    className="w-full rounded-lg border-0 bg-background-dark/70 px-4 py-2.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-primary" 
                    id="full-name" 
                    name="full-name" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/90" htmlFor="email">Email Address</label>
                  <input 
                    className="w-full rounded-lg border-0 bg-background-dark/70 px-4 py-2.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-primary" 
                    id="email" 
                    name="email" 
                    placeholder="you@example.com" 
                    type="email"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/90" htmlFor="phone">Phone Number <span className="text-white/50">(Optional)</span></label>
                  <input 
                    className="w-full rounded-lg border-0 bg-background-dark/70 px-4 py-2.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-primary" 
                    id="phone" 
                    name="phone" 
                    placeholder="(555) 000-0000" 
                    type="tel"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-white/90" htmlFor="message">Message</label>
                  <textarea 
                    className="w-full rounded-lg border-0 bg-background-dark/70 px-4 py-2.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-primary" 
                    id="message" 
                    name="message" 
                    placeholder="How can we help you today?" 
                    rows={5}
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button 
                    className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-80" 
                    type="submit"
                  >
                    <span className="truncate">Submit Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;