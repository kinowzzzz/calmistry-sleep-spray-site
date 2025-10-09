import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "University Student",
      rating: 5,
      text: "As a student pulling all-nighters, I struggle to wind down after studying. Calmistry has been a game-changer! The lavender scent helps me relax instantly, and I fall asleep so much faster now.",
    },
    {
      name: "Carlos Reyes",
      role: "Night Shift Nurse",
      rating: 5,
      text: "Working nights means sleeping during the day, which was always difficult for me. Calmistry creates that nighttime atmosphere I need. It's become an essential part of my sleep routine.",
    },
    {
      name: "Ana Dela Cruz",
      role: "Young Professional",
      rating: 5,
      text: "I was skeptical about aromatherapy, but Calmistry really works! No harsh chemicals, just a gentle, natural scent that helps me unwind. I've recommended it to all my friends.",
    },
    {
      name: "Jennifer Lim",
      role: "Work from Home Mom",
      rating: 5,
      text: "Balancing work and family is stressful. Calmistry helps me transition from busy mom mode to sleep mode. The scent is calming but not overpowering. Love it!",
    },
    {
      name: "Rico Mendoza",
      role: "Call Center Agent",
      rating: 5,
      text: "My irregular schedule made it hard to maintain good sleep. Since using Calmistry, I sleep better and wake up feeling more refreshed. The 100ml bottle is perfect!",
    },
    {
      name: "Sarah Tan",
      role: "Graduate Student",
      rating: 5,
      text: "I appreciate that it's all natural and safe. No weird chemicals or artificial fragrances. Just pure, calming lavender and chamomile. Perfect for my sensitive skin too!",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>
    );
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">What Our Customers Say</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it – hear from people who have experienced the calming
            benefits of Calmistry
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft border-0">
              <CardContent className="pt-6">
                {renderStars(testimonial.rating)}
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Natural Ingredients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the calming benefits of Calmistry for yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="inline-block">
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-medium font-semibold h-12 rounded-md px-10 text-base transition-smooth">
                View Products
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
