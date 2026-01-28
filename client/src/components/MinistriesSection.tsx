import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Heart,
  Music,
  BookOpen,
  Baby,
  UserPlus,
  Mic,
  HandHeart,
} from "lucide-react";
import type { Ministry } from "@shared/schema";

const ministries: (Ministry & { icon: typeof Users })[] = [
  {
    name: "Children's Ministry",
    description:
      "Nurturing young hearts with biblical teachings and fun activities.",
    icon: Baby,
  },
  {
    name: "Youth Ministry",
    description:
      "Empowering the next generation to live boldly for Christ.",
    icon: Users,
  },
  {
    name: "Worship Ministry",
    description:
      "Leading the congregation in spirit-filled praise and worship.",
    icon: Music,
  },
  {
    name: "Bible Study",
    description:
      "Deep diving into God's Word for spiritual growth and understanding.",
    icon: BookOpen,
  },
  {
    name: "Evangelism",
    description:
      "Sharing the good news of Jesus Christ in our community and beyond.",
    icon: Mic,
  },
  {
    name: "Couples Ministry",
    description:
      "Strengthening marriages and relationships through God's principles.",
    icon: Heart,
  },
  {
    name: "Welcome Team",
    description:
      "Creating a warm and inviting atmosphere for all who visit.",
    icon: UserPlus,
  },
  {
    name: "Outreach",
    description:
      "Serving our local community with love and compassion.",
    icon: HandHeart,
  },
];

export function MinistriesSection() {
  return (
    <section
      id="ministries"
      className="py-20 lg:py-28 bg-background"
      data-testid="section-ministries"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Ministries</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get involved and grow in your faith through our various ministry
            opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <Card
                key={index}
                className="border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                data-testid={`card-ministry-${index}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {ministry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ministry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
