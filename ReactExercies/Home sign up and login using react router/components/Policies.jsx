
export default function Policies() {
  const features = [
    {
      title: "🚗 Car Insurance",
      desc: "Comprehensive coverage for your vehicle at competitive rates.",
    },
    {
      title: "🏠 Home Insurance",
      desc: "Comprehensive coverage for your home and belongings.",
    },
    {
      title: "💼 Custom Plans",
      desc: "Tailored insurance plans to fit your unique needs.",
    },
    {
      title: "🌍 Travel Insurance",
      desc: "Coverage for your trips, including medical emergencies and cancellations.",
    },
    {
      title: "🏥 Health Insurance",
      desc: "Comprehensive coverage for your health and well-being.",
    },
  ];

  return (
    <section id="policies" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Policies We Offer ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="border-my-cyan border-2 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-my-mustard">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
