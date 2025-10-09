import { Card, CardContent } from "@/components/ui/card";
import ingredientsImage from "@/assets/ingredients-natural.jpg";

const About = () => {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Calmistry</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from a passion for natural wellness and the belief that everyone deserves restful sleep
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Calmistry was created with a simple mission: to help people find peace in their nightly routine
              through the power of nature. We understand the challenges of modern life – the stress, the
              irregular schedules, the difficulty unwinding after a long day.
            </p>
            <p className="text-muted-foreground mb-4">
              That's why we developed a linen spray that harnesses the time-tested benefits of lavender
              and chamomile, two botanicals renowned for their calming properties. Our formula is
              carefully crafted to be gentle yet effective, bringing the tranquility of nature into your
              bedroom.
            </p>
            <p className="text-muted-foreground">
              Every bottle of Calmistry represents our commitment to quality, safety, and your well-being.
              We believe in transparency, using only natural ingredients that you can trust.
            </p>
          </div>
          <div>
            <img
              src={ingredientsImage}
              alt="Natural lavender and chamomile essential oils with fresh botanicals"
              className="rounded-lg shadow-medium w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Natural First</h3>
                <p className="text-muted-foreground">
                  We believe in the power of nature. Every ingredient is carefully selected
                  for its purity and effectiveness, with no harsh chemicals or synthetic fragrances.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Quality Assured</h3>
                <p className="text-muted-foreground">
                  From sourcing to bottling, we maintain the highest standards. Each batch is
                  tested to ensure it meets our rigorous quality criteria for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Wellness Focused</h3>
                <p className="text-muted-foreground">
                  Your well-being is at the heart of everything we do. We're dedicated to creating
                  products that genuinely improve your daily life and sleep quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Lavender Essential Oil</h3>
              <p className="text-muted-foreground mb-4">
                Known for centuries for its calming properties, lavender has been scientifically proven
                to reduce anxiety and promote relaxation. Its gentle, floral aroma creates a peaceful
                atmosphere perfect for sleep.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Reduces stress and anxiety</li>
                <li>Promotes deeper sleep</li>
                <li>Natural and non-habit forming</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Chamomile Essential Oil</h3>
              <p className="text-muted-foreground mb-4">
                Chamomile has been used for generations as a natural sleep aid. Its soothing properties
                help calm the mind and body, making it easier to transition into restful sleep.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Gentle sedative effect</li>
                <li>Reduces mild restlessness</li>
                <li>Safe for sensitive individuals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
