import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Sun, BookOpen, Flame, Radio } from "lucide-react";
import type { ServiceTime } from "@shared/schema";

const services: ServiceTime[] = [
  { day: "Sunday", time: "8:00 AM", name: "First Worship Service" },
  { day: "Sunday", time: "11:30 AM", name: "Second Worship Service" },
  { day: "Tuesday", time: "7:00 PM", name: "Madi Pase Lòd" },
  { day: "Thursday", time: "7:00 PM", name: "Bible Study" },
  { day: "Saturday", time: "9:00 AM", name: "Fasting Service" },
];

const getServiceIcon = (name: string) => {
  if (name.includes("Worship")) return Sun;
  if (name.includes("Bible")) return BookOpen;
  if (name.includes("Fasting")) return Flame;
  return Calendar;
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-muted/50"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Service <span className="text-primary">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for worship and fellowship. All are welcome!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = getServiceIcon(service.name);
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{service.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Clock className="h-4 w-4" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-primary text-primary-foreground border-none shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-accent rounded-full">
                <Radio className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Radio Salvation</h3>
                <p className="text-primary-foreground/90 text-lg">
                  Listen to Radio Salvation{" "}
                  <span className="font-semibold text-accent">
                    6:00 AM - 12:00 PM
                  </span>{" "}
                  for Prayer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Visit Us At
            </h3>
            <p className="text-2xl font-semibold text-primary mb-2">
              5601 Ave N, Brooklyn, NY
            </p>
            <p className="text-muted-foreground">
              Pastor Malory Laurent
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.6861789834396!2d-73.9233799!3d40.6203321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24492a3c33e65%3A0x89c24492a3c33e65!2s5601%20Ave%20N%2C%20Brooklyn%2C%20NY%2011234!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salvation Church of God Location"
              data-testid="map-embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
