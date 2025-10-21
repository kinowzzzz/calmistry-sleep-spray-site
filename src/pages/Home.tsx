import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Moon, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-lavender.jpg";
import productImage from "@/assets/product-spray-branded.jpg";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Find Your Calm
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Sleep deeper with Calmistry – Your natural aromatherapy companion for peaceful nights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-soft border-0">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">100% Natural</h3>
                <p className="text-sm text-muted-foreground">
                  Made from pure lavender and chamomile essential oils
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Better Sleep</h3>
                <p className="text-sm text-muted-foreground">
                  Promotes relaxation and reduces mild restlessness
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft border-0">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Safe & Gentle</h3>
                <p className="text-sm text-muted-foreground">
                  Chemical-free, hypoallergenic, and fabric-safe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={productImage}
                alt="Calmistry aromatherapy linen spray bottle on white bedding with lavender"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Your Natural Sleep Companion</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Calmistry is crafted with care, blending the finest lavender and chamomile
                essential oils to create a soothing mist that transforms your bedroom into
                a sanctuary of peace.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Perfect for students, shift workers, and anyone seeking a natural way to
                improve their sleep quality.
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sleep?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join countless others who have discovered the calming power of Calmistry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shopee.ph"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Buy on Shopee
              </Button>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Shop on TikTok
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
