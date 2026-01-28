import { Card, CardContent } from "@/components/ui/card";
import { Cross, Eye, Target, Heart } from "lucide-react";
import buildingImage from "@assets/image_1769643002282.png";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Us</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Salvation Church of God is a place where Jesus is lifted up, lives
              are transformed, and families are built on the Word of God. We
              believe you're here for a reason—and we're excited to walk this
              journey of faith with you.
            </p>
            <p className="text-2xl font-serif italic text-primary font-semibold">
              Welcome home.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-lg transform rotate-3" />
            <img
              src={buildingImage}
              alt="Salvation Church of God Building"
              className="relative rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Eye className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                To continue Jesus' mission of transforming individuals' lives
                spiritually, physically, and socially to glorify God.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-accent text-accent-foreground">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-accent-foreground/90 text-lg leading-relaxed">
                To create a community of believers that imitates Jesus' words by
                proclaiming the good news of the gospel, and deeds by caring and
                serving our local and global community selflessly.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Our Core <span className="text-accent">Values</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="border shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Cross className="h-5 w-5 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                  {value.verse && (
                    <p className="text-xs text-primary mt-2 italic">
                      {value.verse}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const coreValues = [
  {
    title: "Worship",
    description:
      "We value Worship because we were created for the purpose of worshiping God.",
  },
  {
    title: "Faith",
    description: "We value Faith because it is a requirement to please God.",
    verse: "Hebrews 11:6",
  },
  {
    title: "Leadership",
    description:
      "We believe in leadership development because both the Old and New Testaments emphasize its importance.",
  },
  {
    title: "Bible Teachings",
    description:
      "We value the Bible and its teachings because it is God's inerrant and infallible word.",
    verse: "1 Timothy 3:16",
  },
  {
    title: "Prayer",
    description:
      "We value Prayer because it is our main vehicle through which we communicate with God.",
  },
  {
    title: "Making Disciples",
    description:
      "We value Making Disciples because it is Jesus' last command to His followers.",
    verse: "Matthew 28:16-20",
  },
];
