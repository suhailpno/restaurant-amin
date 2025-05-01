const faqs = [
  {
    question: "How do I detect idle resources?",
    answer: "Our platform automatically scans and identifies unused AWS resources...",
    iconBg: "bg-pink-50",
  },
  {
    question: "Why can't I get any support?",
    answer: "We provide 24/7 dedicated support to help you with any AWS-related issues...",
    iconBg: "bg-purple-50",
  },
  {
    question: "How can I forecast accurately?",
    answer: "Our advanced analytics and machine learning models provide precise cost forecasting...",
    iconBg: "bg-blue-50",
  },
  {
    question: "Is it time to buy a savings plan?",
    answer: "Our platform analyzes your usage patterns to recommend optimal savings plans...",
    iconBg: "bg-pink-50",
  },
  {
    question: "How do I reduce data transfer costs?",
    answer: "We analyze your data transfer patterns and provide optimization recommendations...",
    iconBg: "bg-pink-50",
  },
  {
    question: "Why did I get a surprise AWS bill?",
    answer: "We help prevent unexpected costs by monitoring your usage in real-time...",
    iconBg: "bg-purple-50",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-4">
          <div className="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center">
            <span className="text-sm">?</span>
          </div>
          <span className="text-sm text-secondary">The problem</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          The cloud is complicated
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-6 ${faq.iconBg} rounded-full mb-6`} />
              <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
              <p className="text-secondary text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;