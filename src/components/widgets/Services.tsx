import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { sitemetadata } from "~/data/sitemetadata";

export default component$(() => {
  
  return (
    <section class="scroll-mt-16" id="services">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:px-0 lg:py-20">
        <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
          <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
        </div>
        <div class="grid gap-8 mx-auto space-y-6 md:grid-cols-2 xl:grid-cols-3 md:space-y-0">
          {sitemetadata.services.map(({ title, description, src, value }, index) => (
            <div key={index} class="border-spacing-1 border-black border rounded-md flex flex-row w-96">
              <Image
                src={src}
                class="rounded-full w-52 h-52 object-cover"
                layout="fixed"
                width={200}
                height={200}
                alt={title}
                breakpoints={[320, 480, 640, 1024]}
              />
              <div class="flex flex-col justify-around mx-2">
                <h3 class="mb-3 text-xl font-bold">{title}</h3>
                <p class="text-gray-600">
                  {description}
                </p>
                <h4>&euro;{value}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
