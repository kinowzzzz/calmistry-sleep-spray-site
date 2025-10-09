import { Card, CardContent } from "@/components/ui/card";
import { Moon, Heart, Leaf, Shield, Clock, Sparkles } from "lucide-react";
import bedroomImage from "@/assets/bedroom-calm.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Moon,
      title: "Promotes Better Sleep",
      description:
        "The calming aroma of lavender and chamomile helps you fall asleep faster and enjoy more restful sleep throughout the night.",
    },
    {
      icon: Heart,
      title: "Reduces Stress & Anxiety",
      description:
        "Natural aromatherapy properties help calm your mind and reduce the day's stress, creating a peaceful transition to sleep.",
    },
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description:
        "Made exclusively from pure essential oils with no synthetic fragrances, chemicals, or harsh additives.",
    },
    {
      icon: Shield,
      title: "Safe for Everyone",
      description:
        "Hypoallergenic formula is gentle on skin and fabrics. Safe for use around children and pets when used as directed.",
    },
    {
      icon: Clock,
      title: "Non-Habit Forming",
      description:
        "Unlike sleep medications, Calmistry provides natural support for better sleep without creating dependency.",
    },
    {
      icon: Sparkles,
      title: "Fabric Safe",
      description:
        "Specially formulated to be gentle on all types of fabrics without leaving stains or residue.",
    },
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Why Choose Calmistry?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the natural way to improve your sleep quality and create a peaceful bedroom sanctuary
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Who It's For Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft border-0 bg-secondary/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Students</h3>
                <p className="text-muted-foreground">
                  Manage exam stress and irregular sleep schedules with natural aromatherapy
                  that helps you unwind after long study sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-secondary/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Shift Workers</h3>
                <p className="text-muted-foreground">
                  Create a consistent sleep environment regardless of the time of day,
                  helping your body adjust to changing schedules.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0 bg-secondary/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Sleep Seekers</h3>
                <p className="text-muted-foreground">
                  Anyone looking for a natural, non-medicated way to improve sleep quality
                  and establish a calming bedtime routine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={bedroomImage}
              alt="Peaceful bedroom with white bedding and lavender accents showing calm sleep environment"
              className="rounded-lg shadow-medium w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Transform Your Sleep Space</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Your bedroom should be a sanctuary of peace and rest. Calmistry helps create
              that perfect environment by infusing your space with calming, natural aromas
              that signal to your body it's time to relax.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Unlike air fresheners or synthetic sprays, Calmistry is specifically formulated
              to support sleep and relaxation. Each spray releases a gentle mist of pure
              essential oils that work with your body's natural rhythms.
            </p>
            <p className="text-lg text-muted-foreground">
              Make Calmistry part of your nightly ritual and experience the difference that
              natural aromatherapy can make in your sleep quality.
            </p>
          </div>
        </div>

        {/* Scientific Backing */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Backed by Nature, Trusted by Science</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            The calming effects of lavender and chamomile have been studied extensively. Research
            shows that these essential oils can help reduce anxiety, improve sleep quality, and
            create a more relaxing environment.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            While Calmistry is not a medical treatment, it offers a natural complement to good
            sleep hygiene practices, helping you create the ideal conditions for restful sleep.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Benefits;
