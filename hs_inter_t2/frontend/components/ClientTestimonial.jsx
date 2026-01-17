import { formatDistanceToNow } from "date-fns";

export default function ClientSay() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#050B14] to-[#0A1A2F] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <span className="text-cyan-400">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Real feedback from real clients
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0B1F3A] to-[#060F1F] border border-white/10 rounded-2xl p-8 shadow-lg relative">
          {/* Glow Accent */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl" />

          {/* Stars */}
          <div className="flex items-center gap-1 text-pink-500 text-xl">
            ★ ★ ★ ★ ★
          </div>

          {/* Feedback */}
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            “Amazing work by <span className="font-semibold text-white">Azwa</span>.
            The project was delivered with great quality and professionalism.”
          </p>

          {/* Project Info */}
          <div className="mt-6 text-sm text-gray-400">
            <p>
              <span className="text-gray-300 font-medium">Project:</span> New Project
            </p>
            <p>
              <span className="text-gray-300 font-medium">Budget:</span> ₹6,500 INR
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "PHP",
              "JavaScript",
              "Web Development",
              "Backend Development",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Client Info */}
          <div className="mt-8 flex items-center justify-between text-sm text-gray-400">
            <div>
              <p className="text-white font-medium">Abhi P.</p>
              <p>Ahmedabad, India</p>
            </div>
            <p>
              {formatDistanceToNow(new Date("2025-12-15"), { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
