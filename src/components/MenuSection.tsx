import Image from 'next/image';

const menuCategories = [
  {
    title: "Grills & Tandoor",
    description: "Smoky, spiced, and made for serious food cravings.",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Tandoori/Grill
    items: ["Grilled Chicken", "Tandoori Chicken", "Pepper Grill Chicken", "Chicken Tikka"]
  },
  {
    title: "Biryani Favorites",
    description: "Comforting rice dishes packed with aromatic flavors.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Biryani
    items: ["Chicken Dum Biryani", "Mutton Special Biryani", "Prawns Biryani"]
  },
  {
    title: "Snacks & More",
    description: "Perfect bites and refreshing beverages to complete your meal.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Snacks/Drinks
    items: ["Prawns 65", "Veg Schezwan Noodles", "Falooda", "Mint Lemon", "Tea"]
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmIvory mb-4">
            Made for Every Craving.
          </h2>
          <p className="text-mutedBeige text-lg">
            Explore flavorful favorites, from smoky grills to comforting biryanis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-espresso rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-goldenAmber mb-3">{category.title}</h3>
                <p className="text-mutedBeige text-sm mb-6 flex-grow">{category.description}</p>
                <ul className="space-y-2 mb-8">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-warmIvory text-sm border-b border-charcoal/50 pb-2 last:border-0">{item}</li>
                  ))}
                </ul>
                <button className="mt-auto w-full py-3 rounded-lg border border-burntOrange text-burntOrange font-medium hover:bg-burntOrange hover:text-white transition-colors">
                  View Full Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-mutedBeige italic">
          * Menu availability and prices may vary. Contact us for the latest menu.
        </div>
      </div>
    </section>
  );
}
