import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { sitemetadata } from "~/data/sitemetadata";

export default component$(() => {
  
  return (
    <section class="scroll-mt-16" id="services">
      <div class="px-4 before:bg-warmPink py-16 mx-auto max-w-6xl lg:px-0 lg:py-20">
        <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
          <h2 class="text-base font-header text-primary-600 font-semibold tracking-wide uppercase">
            Services
          </h2>
        </div>
        <div>
        <ul class="grid gap-8 mx-auto md:grid-cols-2 xl:grid-cols-3">
          {sitemetadata.services.map(({ title, description, slug, src, value }, index) => (
            <li
              key={index}
              class="justify-self-center w-96 h-50"
            >
              <Link
                class="mx-auto flex flex-row "
                aria-label={title}
                title={title}
                href={`services/${slug}`}
              >
                <div class="z-10 min-w-fit">
                  <Image
                    src={src}
                    class="object-cover rounded-full w-52 h-52"
                    layout="fullWidth"
                    alt={title}
                    breakpoints={[320, 480, 640, 1024]}
                  />
                </div>
                <span class="relative before:block before:absolute before:inset-y-2 before:-left-20 before:-right-0 before:rounded-md before:bg-warmPink">
                  <div class="relative h-full flex flex-col justify-around py-3 mx-2">
                    <h3 class="mb-1 text-primaryTextColor text-xl font-bold">{title}</h3>
                    <p class="flex-1 text-gray-600 line-clamp-4 text-ellipsis overflow-hidden max-h-24">
                      {description}
                    </p>
                    <h4 class="font-bold font-header">&euro;{value}</h4>
                  </div>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
});
