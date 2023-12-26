<!-- <template>
  <section class="bg-white p-10 rounded-lg">
    <article class="flex gap-16 mb-10 items-end">
      <img
        class="w-96 h-64 rounded-lg"
        :src="`${
          newsWithId.find((item) => (item.source.id = +useRoute().params.id))
            ?.urlToImage
        }`"
        alt=""
      />
      <div>
        <div class="flex gap-20">
          <p>
            {{
              newsWithId
                .find((item) => (item.source.id = +useRoute().params.id))
                ?.publishedAt.split("T", 1)
                .join("")
            }}
          </p>
          <p>
            {{
              newsWithId.find(
                (item) => (item.source.id = +useRoute().params.id)
              )?.author
            }}
          </p>
        </div>
        <h1 class="text-2xl font-bold">
          {{
            newsWithId.find((item) => (item.source.id = +useRoute().params.id))
              ?.title
          }}
        </h1>
      </div>
    </article>
    <article>
      <p>
        {{
          newsWithId.find((item) => (item.source.id = +useRoute().params.id))
            ?.description
        }}
      </p>
    </article>
  </section>
</template> -->
<template>
  <section>
    {{
      newsWithId.find((item) => String(item.source.id) === useRoute().params.id)
    }}
  </section>
</template>

<script setup>
const { newsWithId } = useNews();
</script>
