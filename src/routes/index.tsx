import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Services from "~/components/widgets/Services";
import Packages from "~/components/widgets/Packages";
// import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      {/* <CallToAction /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
