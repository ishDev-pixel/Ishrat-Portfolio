const About = ({ profileImg }) => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "30+" },
    { label: "Satisfied Clients", value: "20+" },
    { label: "Code Commits", value: "2.5k+" }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-wider uppercase font-mono">
            <User className="w-4 h-4" /> About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Driven by Passion, Focused on <span className="text-cyan-400">Impact</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-1 mx-auto lg:mx-0 shadow-xl shadow-cyan-500/20 overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Alex Morgan Profile"
                    className="w-full h-full object-cover rounded-[12px]"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>

                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-white">Alex Morgan</h3>
                  <p className="text-cyan-400 font-medium text-sm">Senior Full Stack Developer</p>
                  <p className="text-slate-400 text-xs">Based in San Francisco, CA (Remote Ready)</p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-3 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Focus</span>
                    <span className="font-semibold text-slate-200">Full Stack Web & Microservices</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Education</span>
                    <span className="font-semibold text-slate-200">B.S. Computer Science</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Availability</span>
                    <span className="font-semibold text-emerald-400">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white">
              Crafting seamless digital experiences from modern frontends to robust API servers.
            </motion.h3>

            <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed text-base">
              I am a passionate software developer with over 5 years of experience engineering modern web applications. My journey started with clean front-end UI design and evolved into full-stack architecture, building scalable React applications and optimized Express/Node REST APIs.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-slate-400 leading-relaxed text-base">
              I believe in writing clean, self-documenting code, practicing test-driven development, and prioritizing user experience. Whether optimizing MongoDB aggregations or polishing complex state logic with React Context and Motion, I aim for production excellence.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "Clean Modular Code Architecture",
                "Responsive Mobile-First UI/UX",
                "RESTful & GraphQL API Engineering",
                "CI/CD Pipeline & Deployment Strategy"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};