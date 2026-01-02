import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Narain Karthikeyan",
    role: "Former Formula One Racer",
    avatar: "NK",
    rating: 5,
    testimonial: "I've known Ishaan for many years. He always seems to be able to produce the best quality karts for the right price. We are using the KnK Genesis Sport karts at our COAST track in Coimbatore and are very happy with their performance. We look forward to buying many more karts from them in the future."
  },
  {
    name: "Girish Agadi",
    role: "CEO Agadi Tola",
    avatar: "GA",
    rating: 5,
    testimonial: "We have been using KnK karts. All of them are performing very well. Suitable for all terrains. Guests have been experiencing adventure with safety. Karts are durable, well designed, and safety measures are also taken care of. Maneuverability in terms of muddy terrains, suspension design has been taken care of till the maximum extent."
  },
  {
    name: "Yohann Setna",
    role: "CEO CoASTT",
    avatar: "YS",
    rating: 5,
    testimonial: "I have a long standing relationship with KnK karts and Ishaan, over 10 years in fact. I have recommended them to all of the customers I have helped build tracks for, and every customer who has invested in them has been extremely happy with their purchase. Their team is excellent to deal with and have a very professional attitude. The customers love the karts too. They are a perfect blend between speed and reliability."
  }
];

const additionalTestimonials = [
  {
    name: "Rajesh Kumar",
    role: "Fleet Operations Manager",
    avatar: "RK",
    testimonial: "We have procured multiple go-karts from Luaskart Industries Pvt. Ltd., and our experience has been extremely positive. The karts demonstrate excellent build quality, reliable performance, and a strong focus on safety. Luaskart's team has been professional and supportive throughout the procurement and delivery process, ensuring clarity in technical specifications and timelines. The products are well-suited for commercial operations and have been well received by our end customers. We look forward to continuing our association with Luaskart Industries for future requirements."
  },
  {
    name: "Priya Selvam",
    role: "Procurement Director",
    avatar: "PS",
    testimonial: "As a bulk buyer, we chose Luaskart Industries Pvt. Ltd. for their commitment to quality, performance, and customer support. The go-karts supplied have been performing consistently well, with robust design and smooth handling. Their team demonstrates a professional approach in both sales and after-sales support, making them a reliable partner in the go-kart manufacturing space. Luaskart delivers a strong balance between performance, durability, and value."
  },
  {
    name: "Arjun Murugan",
    role: "Track Owner",
    avatar: "AM",
    testimonial: "What I liked most about your go-kart was the solid build quality and well-engineered design. The chassis feels strong and durable, the handling is smooth, and the overall fit and finish reflect professional manufacturing standards. It clearly feels reliable and performance-oriented."
  }
];

export function TeamSection() {
  return (
    <section id="testimonials" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT OUR <span className="text-gradient">CLIENTS SAY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Early feedback from our customers highlighting our commitment to quality and reliability.
          </p>
        </div>

        {/* Customer Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="font-display text-sm text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-sm text-foreground font-medium">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <Quote className="w-6 h-6 text-primary/60 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-primary text-xs font-medium">Verified Customer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
