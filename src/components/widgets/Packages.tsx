import { component$ } from "@builder.io/qwik";
import { sitemetadata } from "~/data/sitemetadata";

export default component$(() => (
    <section class="border-t border-gray-200">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Packages
            </h2>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
            {sitemetadata.packages.map(({ title, subitle, details, value }) => (
              <div key={title} class="flex flex-col w-80 border p-4">
                <div class="text-4xl text-center font-bold lg:text-5xl xl:text-6xls font-heading mb-4">
                  {title}
                </div>
                <div class="">
                  {subitle}
                </div>
                <ul class="list-disc border flex-1">
                {details.map( detail => (
                  <li key={detail} class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-md">
                    {detail}
                  </li>
                ))}
                </ul>
                <div>&euro;{value}</div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
);
