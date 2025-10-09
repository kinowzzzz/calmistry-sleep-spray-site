import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I use Calmistry?",
      answer:
        "Shake the bottle well before use. Hold it 6-8 inches away from your pillows, bedding, or curtains and spray 2-3 times. Allow the mist to settle and dry for 2-3 minutes before use. For best results, use nightly as part of your bedtime routine.",
    },
    {
      question: "Is Calmistry safe for sensitive skin?",
      answer:
        "Yes! Calmistry is made with natural essential oils and is hypoallergenic. However, it's designed as a linen spray, not for direct skin application. If you have very sensitive skin or allergies, we recommend testing on a small fabric area first.",
    },
    {
      question: "Will it stain my sheets or pillowcases?",
      answer:
        "No, Calmistry is specifically formulated to be fabric-safe and won't leave stains or residue when used as directed. Always spray from a proper distance (6-8 inches) and allow to dry before use.",
    },
    {
      question: "How long does the scent last?",
      answer:
        "The calming aroma typically lasts 4-6 hours, which is perfect for a full night's sleep. The scent is gentle and won't be overpowering, creating a subtle relaxing atmosphere.",
    },
    {
      question: "Can I use it around pets or children?",
      answer:
        "When used as a linen spray (not applied directly), Calmistry is safe for households with children and pets. However, avoid spraying directly on pets or in their immediate vicinity. Allow the spray to settle before letting children or pets on the bed.",
    },
    {
      question: "What's the shelf life of Calmistry?",
      answer:
        "When stored properly in a cool, dry place away from direct sunlight, Calmistry has a shelf life of 12 months from the manufacturing date. The bottle includes the manufacturing date for your reference.",
    },
    {
      question: "How long will one bottle last?",
      answer:
        "The 50ml bottle provides approximately 30-40 uses, while the 100ml bottle offers 60-80 uses. This depends on how many sprays you use per application.",
    },
    {
      question: "Is this a sleep medication?",
      answer:
        "No, Calmistry is not a medication. It's a natural aromatherapy product designed to create a calming environment that supports relaxation and better sleep. It works by using the natural properties of lavender and chamomile essential oils.",
    },
    {
      question: "Can I use it during the day for relaxation?",
      answer:
        "Absolutely! While it's designed primarily for bedtime use, you can spray it on your linens, curtains, or fabric furniture anytime you want to create a calming atmosphere.",
    },
    {
      question: "What if I don't like the scent?",
      answer:
        "We stand behind our product! If you're not satisfied with Calmistry, please contact us through our social media channels or the contact form on our website to discuss your concerns.",
    },
    {
      question: "Where can I buy Calmistry?",
      answer:
        "Calmistry is available on Shopee and TikTok Shop. You can find direct links on our Products page or through the buttons on our homepage.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "For bulk orders or wholesale inquiries, please contact us through our Contact page. We're happy to discuss special pricing for larger quantities.",
    },
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about Calmistry
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg shadow-soft border-0 px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-secondary/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help! Feel free to reach out to us.
          </p>
          <a href="/contact">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-medium font-semibold h-12 rounded-md px-10 text-base transition-smooth">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default FAQ;
