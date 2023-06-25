import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { IconTwitter } from "~/components/icons/IconTwitter"
import { IconInstagram } from "~/components/icons/IconInstagram"
import { IconFacebook } from "~/components/icons/IconFacebook"
import { IconGithub } from "~/components/icons/IconGithub"

export default component$(() => {

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/onwidget/qwind",
    },
  ];

  return (
    <footer class="border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {Icon && <Icon />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
});
