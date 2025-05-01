const features = [
  {
    title: "Intuitive Design",
    description: "Clean interface that puts your needs first",
  },
  {
    title: "Smart Automation",
    description: "Let the system work for you while you focus on what matters",
  },
  {
    title: "Real-time Analytics",
    description: "Make informed decisions with up-to-the-minute data",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Designed for Excellence
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;