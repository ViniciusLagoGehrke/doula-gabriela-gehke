import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import coverImage from '~/assets/images/profileGabriela.jpeg'
import { sitemetadata } from "~/data/sitemetadata";

export default component$(() => {


  return (
    <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:h-screen 2xl:h-auto">
        <div class="py-4 md:py-6 2xl:min-h-0 lg:flex lg:gap-8 lg:items-center lg:py-8">
          <div class="mx-auto text-center basis-1/2 lg:text-left md:pb-16 pb-12 lg:pb-0">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                {sitemetadata.values[0]}<br class="block" />{" "}
                <span class="block">{sitemetadata.values[1]}</span>{" "}
                <span >{sitemetadata.values[2]}</span>
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8">
                {sitemetadata.description}
                </p>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <div class="relative m-auto max-w-5xl">
              <Image
                src={coverImage}
                layout="constrained"
                width={493}
                height={616}
                alt="Gabriela Gehrke perfil"
                class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
