import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import calendarImage from "@assets/image_1769643014461.png";
import type { ChurchEvent } from "@shared/schema";

const events: ChurchEvent[] = [
  {
    id: 1,
    title: "7 Tuesdays - Shout Your Victory",
    date: "February 3 - March 17, 2026",
    description: "7 Mardi - Join us for powerful praise and worship nights.",
  },
  {
    id: 2,
    title: "First Fruits",
    date: "March 15 - March 17, 2026",
    description: "A time of dedication and offering to the Lord.",
  },
  {
    id: 3,
    title: "Consecration",
    date: "May 3 - May 10, 2026",
    description: "A week of spiritual renewal and dedication.",
  },
  {
    id: 4,
    title: "Recreation - Sight & Sound Theater",
    date: "June 26, 2026",
    description: "A special trip to experience biblical stories come alive.",
  },
  {
    id: 5,
    title: "Couple Ministry Retreat",
    date: "August 5 - August 8, 2026",
    description: "Strengthening marriages through fellowship and the Word.",
  },
  {
    id: 6,
    title: "Annual Revival & 10 Years Church Anniversary",
    date: "August 16 - September 6, 2026",
    description: "Celebrating a decade of God's faithfulness!",
  },
  {
    id: 7,
    title: "Church Fundraising Banquet & Gala",
    date: "September 5-6, 2026",
    description: "10 Years Anniversary celebration at Kings Theater.",
  },
  {
    id: 8,
    title: "Pastor's Appreciation",
    date: "October 18, 2026",
    description: "Honoring Pastor Malory Laurent for his dedicated service.",
  },
  {
    id: 9,
    title: "Action de Grace - Thanksgiving Service",
    date: "November 14 - December 26, 2026",
    description: "7 Saturdays of thanksgiving and gratitude.",
  },
  {
    id: 10,
    title: "End of the Year Revival",
    date: "December 20-31, 2026",
    description: "Reveil du Fin Annee - Close the year with spiritual fire!",
  },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="py-20 lg:py-28 bg-primary text-primary-foreground"
      data-testid="section-events"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Church <span className="text-accent">Calendar</span> 2026
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Mark your calendars for these exciting events and celebrations!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-accent/20 rounded-lg transform -rotate-2" />
            <img
              src={calendarImage}
              alt="Church Calendar 2026"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors"
                data-testid={`card-event-${index}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      {event.description && (
                        <p className="text-primary-foreground/70 text-sm">
                          {event.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
