import { component$ } from "@builder.io/qwik";
import { sitemetadata } from "~/data/sitemetadata";

export default component$(() => (
    <section class="border-t border-gray-200">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="text-base font-header text-primary-600 font-semibold tracking-wide uppercase">
              Packages
            </h2>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 px-4 pb-8 md:pb-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:pb-20 max-w-7xl">
            {sitemetadata.packages.map(({ title, subitle, details, value }) => (
              <article key={title} class="flex flex-col w-80 p-4 bg-secondary-100 rounded-md">
                <div class="text-3xl text-center font-bold lg:text-4xl xl:text-5xls font-heading mb-4">
                  {title}
                </div>
                <div class="font-bold text-base md:text-md">
                  {subitle}
                </div>
                <ul class="list-disc flex-1 px-1 mb-4">
                {details.map( detail => (
                  <li key={detail} class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-md">
                    <p>{detail}</p>
                  </li>
                ))}
                </ul>
                <div><h4 class="text-center font-bold font-header">&euro;{value}</h4></div>
              </article>
            ))}
        </div>
      </div>
    </section>
  )
);
