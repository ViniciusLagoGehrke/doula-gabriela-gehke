import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { sitemetadata } from "~/data/sitemetadata";

import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import type { Service } from '~/types'

export const useGetServiceBySlug = routeLoader$(async ({ params, status }): Promise<Service> => {
  const service = sitemetadata.services.find( service => service.slug === params.slug);
  
  if (!service) {
    status(404);
  }

  return service as Service;
});

export default component$(() => {
  const data = useGetServiceBySlug();

  return (
    <Resource
      value={data}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(service: Service) => (
        <section class="mx-auto py-6 sm:py-8 lg:py-10">
          <article>
            <header class="mx-auto">
              <h1 class="text-center leading-tighter font-heading font-header mx-auto mb-4 max-w-3xl px-2 text-4xl font-bold tracking-tighter sm:px-4 sm:mb-6 md:text-5xl">
                {service.title}
              </h1>
              <div class="mx-auto max-w-3xl flex flex-wrap px-4 sm:px-6 items-center">

                <div class="mx-auto py-6 flex flex-col max-w-xs">
                  <p class="px-2 sm:px-6">
                    {service.description}
                  </p>
                  <h4 class="text-center p-2 sm:px-6 font-bold font-header">
                  &euro;{service.value}
                  </h4>
                </div>
                
                <img
                  src={service.src}
                  class="mx-auto max-w-xs bg-gray-400 dark:bg-slate-700 sm:rounded-md md:max-w-sm"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt={service.title}
                  loading="eager"
                  width={450}
                  height={450}
                />
                
              </div>
            </header>
            <div class="p-8 max-w-3xl mx-auto space-y-4">
              {service.topics.map((topic, index) => (
                <p class='' key={index}>{topic}</p>
              ))}
            </div>
          </article>
        </section>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const services = sitemetadata.services;

  return {
    params: services.map(({ slug }) => ({ slug })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const service = resolveValue(useGetServiceBySlug);

  return {
    title: service?.title,
    meta: [
      {
        name: "description",
        content: service?.description,
      },
    ],
  };
};
