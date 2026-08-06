import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { Container } from "@/components/Container";

const contactItems = [
  {
    label: "Στεργιόπουλος Ιωάννης",
    href: "/",
    icon: UserIcon,
  },
  {
    label: "Ηλεκτρολόγος",
    href: "/",
    icon: BoltIcon,
  },
  {
    label: "+30 694 533 5942",
    href: "tel:+306945335942",
    icon: PhoneIcon,
  },
  {
    label: "electrician.stergiopoulos@gmail.com",
    href: "mailto:electrician.stergiopoulos@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    label: "Κύπρου 94, Νίκαια Πειραιά",
    href: "https://maps.app.goo.gl/ThjsgzdZro2xC9gQ6",
    icon: MapPinIcon,
    external: true,
  },
] as const;

export function Footer() {
  const navigation = [
    "Αρχική",
    "Υπηρεσίες",
    "Έργα",
    "Συχνές ερωτήσεις",
    "Επικοινωνία",
  ];
  const links = ["#home", "#ypiresies", "#erga", "#faq", "#contact"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div>
              {" "}
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                  <span>
                    <Image
                      src="/img/logo-white.svg"
                      alt="N"
                      width="80"
                      height="80"
                      className="w-[160px]"
                    />
                  </span>
                </span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              <Image
                src="/img/qrcode.png"
                alt="QR Code"
                width="120"
                height="120"
              />
            </div>
          </div>

          <div>
            <div className="mb-2 font-bold w-full -ml-3 lg:ml-0">
              <h3 className="w-full px-4 py-2 text-indigo-600 rounded-md dark:text-gray-300 ">
                Sitemap
              </h3>
            </div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={links[index]}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item}
                </Link>
              ))}

              <div className="lg:px-4 mt-8 text-indigo-600 rounded-md dark:text-gray-300 font-bold px-4">
                <div>Ακολουθήστε μας</div>
                <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
                  {/* <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a> */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100067818661953"
                    target="_blank"
                    rel="noopener"
                    id="fbLogo"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </a>
                  <a
                    href="https://www.instagram.com/gsselectrician/"
                    target="_blank"
                    rel="noopener"
                    id="igLogo"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                  {/* <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="contact" className="mb-2 font-bold w-full -ml-3 lg:ml-0">
              <h3 className="w-full px-4 py-2 text-indigo-600 rounded-md dark:text-gray-300 ">
                Επικοινωνία
              </h3>
            </div>
            <div className="flex w-full flex-col -mt-2 -ml-3 lg:ml-0">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isExternal = "external" in item && item.external;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex w-full items-start gap-3 rounded-md px-4 py-2 text-gray-500 transition hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-trueGray-800 dark:text-indigo-400">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 break-words pt-1.5 text-sm leading-snug sm:text-base">
                      {item.label}
                    </span>
                  </Link>
                );
              })}

              <div className="mt-4 w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm dark:border-trueGray-700">
                <div className="relative aspect-[4/3] w-full">
                  <iframe
                    title="Τοποθεσία καταστήματος — Κύπρου 94, Νίκαια"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.3667838725423!2d23.640825312871108!3d37.96856877182005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bba1cf8e8989%3A0x6ec72f24021d7fc4!2sKiprou%2094%2C%20Nikea%20184%2051!5e0!3m2!1sen!2sgr!4v1781717748312!5m2!1sen!2sgr"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Created by{" "}
          <a
            href="https://www.linkedin.com/in/george-chervatidis-6773b716b/"
            target="_blank"
            rel="noopener"
            className="text-indigo-600 dark:text-blue-400 font-bold"
          >
            George Chervatidis.
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
