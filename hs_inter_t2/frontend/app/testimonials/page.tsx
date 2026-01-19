import Image from "next/image";
import ClientTestimonial from "@/components/ClientTestimonial";



export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Operations Manager",
      message:
        "H&S Solutions transformed our workflow using intelligent, scalable systems. The results were immediate.",
    },
    {
      name: "Emily Carter",
      role: "CTO",
      message:
        "A future-ready platform with exceptional UI/UX and performance. Highly recommended.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-[#050B14] via-[#0A1A2F] to-[#050B14] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Trusted by Industry <span className="text-cyan-400">Leaders</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              Discover how H&S Solutions leverages intelligent technology,
              futuristic design, and data-driven solutions to empower businesses.
            </p>

            {/* Data Highlights */}
            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-3xl font-bold text-cyan-400">98%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">3x</p>
                <p className="text-sm text-gray-400">Efficiency Boost</p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              controls
              muted
              loop
              playsInline
              poster="/video-poster.jpg"
            >
              <source src="/testimonial-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>

        {/* AI Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
             What Our <span className="text-cyan-400">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative bg-linear-to-br from-[#0B1F3A] to-[#060F1F] p-8 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition"
              >
                {/* Futuristic Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-bl-full" />

                {/* <p className="text-gray-300 leading-relaxed">
                  “{item.message}”
                </p> */}

                <div className="mt-6">
                  {/* <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-cyan-400">{item.role}</p> */}


                 <ClientTestimonial />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
