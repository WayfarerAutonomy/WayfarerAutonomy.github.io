import { motion } from "framer-motion";

// TODO: Replace placeholder images with actual photos of each co-founder
// Place photos in /src/assets/ and import them here, e.g.:
// import leonPhoto from "@/assets/team/leon.jpg";
// import pedroPhoto from "@/assets/team/pedro.jpg";
// import ignacioPhoto from "@/assets/team/ignacio.jpg";
// import andresPhoto from "@/assets/team/andres.jpg";

const founders = [
  {
    name: "Leon Greiner",
    // TODO: Add role/title
    role: "Co-Founder",
    // TODO: Add short bio
    bio: "TODO: Add bio for Leon Greiner.",
    // TODO: Replace with actual photo
    photo: null,
  },
  {
    name: "Pedro Jinjun Dong",
    role: "Co-Founder",
    bio: "TODO: Add bio for Pedro Jinjun Dong.",
    photo: null,
  },
  {
    name: "Ignacio Dassori-Walker",
    role: "Co-Founder",
    bio: "TODO: Add bio for Ignacio Dassori-Walker.",
    photo: null,
  },
  {
    name: "Andres Gonzalez",
    role: "Co-Founder",
    bio: "TODO: Add bio for Andres Gonzalez.",
    photo: null,
  },
];

const TeamSection = () => {
  return (
    <section className="section-chassis py-16 md:py-[15vh] border-t border-border">
      <div className="grid-container">
        <div className="col-span-12 mb-12">
          <h2 className="text-section">Team</h2>
        </div>

        {founders.map((founder, i) => (
          <motion.div
            key={founder.name}
            className="col-span-12 sm:col-span-6 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Photo */}
            <div className="w-full aspect-square bg-secondary border border-border mb-4 overflow-hidden">
              {founder.photo ? (
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                // Placeholder until real photo is added
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-mono">
                  [ Photo ]
                </div>
              )}
            </div>

            {/* Info */}
            <p className="font-bold text-base leading-tight">{founder.name}</p>
            <p className="text-sm text-muted-foreground mb-2">{founder.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
