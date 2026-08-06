"use client";

import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

const STORE_IMAGES = [
  {
    src: "/img/store/katastima-1.jpg",
    alt: "Πρόσοψη καταστήματος Στεργιόπουλος Ιωάννης — Ηλεκτρολόγος",
    className: "md:col-span-1 aspect-[4/3]",
  },
  {
    src: "/img/store/katastima-2.jpg",
    alt: "Βιτρίνα καταστήματος με υπηρεσίες και στοιχεία επικοινωνίας",
    className: "md:col-span-1 aspect-[4/3]",
  },
  {
    src: "/img/store/katastima-3.jpg",
    alt: "Κατάστημα και επαγγελματικό όχημα GSS Electrician στη Νίκαια",
    className: "md:col-span-2 aspect-[16/7] md:aspect-[21/9]",
  },
] as const;

const MAPS_URL = "https://maps.app.goo.gl/ThjsgzdZro2xC9gQ6";
const ADDRESS = "Κύπρου 94, Νίκαια 184 51";

export function StoreSection() {
  return (
    <div className="mt-8 mb-4">
      <SectionTitle id="katastima" preTitle="Κατάστημα" title="Επισκεφθείτε μας">
        Βρείτε μας στο κατάστημά μας στη Νίκαια για να συζητήσουμε τις
        ηλεκτρολογικές ανάγκες σας.
      </SectionTitle>

      <Container>
        <motion.a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-10 flex w-fit max-w-full items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 px-5 py-3 text-indigo-700 transition hover:border-indigo-200 hover:bg-indigo-100 dark:border-trueGray-700 dark:bg-trueGray-800 dark:text-indigo-300 dark:hover:bg-trueGray-700"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <MapPinIcon className="h-5 w-5 shrink-0" aria-hidden />
          <span className="text-base font-medium sm:text-lg">{ADDRESS}</span>
          <span className="sr-only"> — άνοιγμα στο Google Maps</span>
        </motion.a>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {STORE_IMAGES.map((image, index) => (
            <motion.div
              key={image.src}
              className={`relative overflow-hidden rounded-xl bg-gray-100 dark:bg-trueGray-800 ${image.className}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  image.className.includes("md:col-span-2")
                    ? "(max-width: 768px) 100vw, 1200px"
                    : "(max-width: 768px) 100vw, 600px"
                }
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
