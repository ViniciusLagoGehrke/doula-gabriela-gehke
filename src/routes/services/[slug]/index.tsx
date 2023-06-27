import { component$, Resource } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { sitemetadata } from "~/data/sitemetadata";

import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import type { Service } from '~/types'

export const useGetServiceBySlug = routeLoader$(({ params, status }): Service => {
  const service = sitemetadata.services.find( service => service.title.toLocaleLowerCase() === params.slug);
  
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
        <section class="mx-auto py-8 sm:py-16 lg:py-20">
          <article>
            <header class={service?.src ? "text-center" : ""}>
              <h1 class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
                {service.title}
              </h1>
              <p class="mx-auto max-w-3xl px-4 sm:px-6">
                {service.description}
              </p>
              {service.src ? (
                <img
                  src={service.src}
                  class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
                  sizes="(max-width: 900px) 400px, 900px"
                  alt={service.title}
                  loading="eager"
                  width={900}
                  height={480}
                />
              ) : (
                <div class="mx-auto max-w-3xl px-4 sm:px-6">
                  <div class="border-t dark:border-slate-700" />
                </div>
              )}
            </header>
            <div>
              {service.topics.map((topic, index) => (
                <p key={index}>{topic}</p>
              ))}
            </div>
            <h4 class="font-bold">{service.value}</h4>
          </article>
        </section>
      )}
    />
  );
});

export const onStaticGenerate: StaticGenerateHandler = () => {
  const services = sitemetadata.services;

  return {
    params: services.map(({ slug }) => ({ slug })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const service = resolveValue(useGetServiceBySlug);

  return {
    title: service.title,
    meta: [
      {
        name: "description",
        content: service?.description,
      },
    ],
  };
};
