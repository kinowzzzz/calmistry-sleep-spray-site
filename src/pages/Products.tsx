import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import productImage from "@/assets/product-spray.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Calmistry 50ml",
      price: "₱189",
      size: "50ml",
      description: "Perfect for trying Calmistry or keeping in your travel bag",
      features: ["Travel-friendly size", "Lasts 30-40 uses", "Same premium formula"],
    },
    {
      id: 2,
      name: "Calmistry 100ml",
      price: "₱249",
      size: "100ml",
      description: "Our most popular size – best value for regular use",
      features: ["Best value", "Lasts 60-80 uses", "Family-size bottle"],
      popular: true,
    },
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect size for your needs. Both contain the same premium blend of lavender
            and chamomile essential oils.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {products.map((product) => (
            <Card key={product.id} className="shadow-medium border-0 relative">
              {product.popular && (
                <Badge className="absolute top-4 right-4 bg-primary">Most Popular</Badge>
              )}
              <CardHeader>
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={productImage}
                    alt={`${product.name} - Natural aromatherapy linen spray`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{product.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="text-primary" size={14} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <a
                  href="https://shopee.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="hero" size="lg" className="w-full">
                    Buy on Shopee
                  </Button>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    Shop on TikTok
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Product Details */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">What's Inside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lavender Essential Oil</li>
                <li>• Chamomile Essential Oil</li>
                <li>• Distilled Water</li>
                <li>• Natural Emulsifier</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 100% Natural Essential Oils</li>
                <li>• No Harsh Chemicals</li>
                <li>• Hypoallergenic Formula</li>
                <li>• Safe for All Fabrics</li>
                <li>• Cruelty-Free</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">How to Use</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li>1. Shake well before each use</li>
              <li>2. Hold bottle 6-8 inches away from linens</li>
              <li>3. Spray 2-3 times on pillows and bedding</li>
              <li>4. Allow to air dry before use (about 2-3 minutes)</li>
              <li>5. Use nightly for best results</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
