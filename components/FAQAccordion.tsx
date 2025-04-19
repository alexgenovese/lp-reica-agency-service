
export default function FAQAccordion() {
    return (
        <section className="pricing-faq-section py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              {/* FAQ Accordion */}
              <div className="max-w-3xl mx-auto divide-y divide-gray-200">
                {[
                  {
                    question: "What is Growmodo?",
                    answer: "Growmodo provides on-demand design and development services with a subscription model. We offer unlimited requests and revisions with dedicated project managers to help scale your business efficiently."
                  },
                  {
                    question: "How do I request a new task or project?",
                    answer: "You can submit requests through our client portal. Each request is reviewed by your dedicated project manager who will assign it to the appropriate team members and provide you with regular updates on progress."
                  },
                  {
                    question: "Do I communicate directly with the designer and developer?",
                    answer: "You&apos;ll primarily communicate with your dedicated project manager who serves as your main point of contact. They coordinate with the design and development team on your behalf to ensure efficient communication and project delivery."
                  },
                  {
                    question: "Can we communicate via Slack or MS Teams?",
                    answer: "Yes, we can integrate with your preferred communication tools including Slack and MS Teams. This allows for seamless collaboration and real-time updates on your projects."
                  },
                  {
                    question: "How does your pricing work?",
                    answer: "We offer a flat monthly rate with no hidden fees. You can choose the plan that best suits your needs, and you&apos;re free to upgrade, downgrade, pause, or cancel at any time without any long-term commitment."
                  },
                  {
                    question: "What do you mean by Requests?",
                    answer: "Requests can be anything from design tasks (like creating graphics, landing pages) to development tasks (like website updates, feature implementations). Each request is evaluated by our team and broken down into manageable tasks."
                  },
                  {
                    question: "What&apos;s the difference between Tasks and Projects?",
                    answer: "Tasks are smaller requests that typically take 1-3 days to complete. Projects are larger initiatives composed of multiple tasks that require more extensive planning and execution time."
                  },
                  {
                    question: "What does your 100% Satisfaction Guarantee include?",
                    answer: "Our satisfaction guarantee ensures that we&apos;ll work on your request until you&apos;re completely happy with the result. If you&apos;re not satisfied with our service in the first month, we offer a full refund."
                  },
                  {
                    question: "How long does it take to build a simple website?",
                    answer: "A simple website typically takes 2-4 weeks depending on complexity, content availability, and revision cycles. We provide clear timelines at the start of each project and keep you updated throughout the process."
                  },
                  {
                    question: "What is the difference between the Maintenance Plan and the All-Inclusive Plan?",
                    answer: "The Maintenance Plan focuses on updates and support for existing websites and applications. The All-Inclusive Plan covers everything including new designs, development work, and ongoing maintenance with more allocated resources."
                  }
                ].map((faq, index) => (
                  <div key={index} className="py-6 w-full">
                    <details className="group w-full">
                      <summary className="flex justify-between items-center cursor-pointer w-full">
                        <h3 className="text-lg font-medium text-gray-900 pr-6">{faq.question}</h3>
                        <span className="ml-6 flex-shrink-0">
                          <svg className="h-6 w-6 transform group-open:rotate-180 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-4 pr-6 prose max-w-none">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </section>
    );
}