import { Utensils, MapPin, ShoppingBag, Users } from 'lucide-react';

const features = [
  {
    icon: <Utensils className="w-10 h-10 text-goldenAmber" />,
    title: "A Variety of Flavors",
    description: "From South Indian comfort food to grilled favorites and biryani, explore a menu with something for every mood."
  },
  {
    icon: <MapPin className="w-10 h-10 text-goldenAmber" />,
    title: "Conveniently Located on OMR",
    description: "An accessible food destination in Mettukuppam, Thoraipakkam."
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-goldenAmber" />,
    title: "Dine In or Order Out",
    description: "Enjoy your meal at the restaurant or choose convenient takeaway and delivery options."
  },
  {
    icon: <Users className="w-10 h-10 text-goldenAmber" />,
    title: "Made for Every Occasion",
    description: "Whether it's a casual meal, family gathering, or food outing with friends, make it a delicious one."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-espresso">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warmIvory">
            Something Delicious for Everyone.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-charcoal p-8 rounded-2xl border border-charcoal/50 hover:border-burntOrange/50 transition-colors group cursor-default"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-warmIvory mb-3">
                {feature.title}
              </h3>
              <p className="text-mutedBeige text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
