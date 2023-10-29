// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // server side rendering mode
    ssr: true,
    typescript: {
        strict: true,
    },
    // app
    app: {
        head: {

            titleTemplate: '%s Benyaminrmb',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'personal information about benyamin bolhasanii or benyaminrmb',
                },
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        },
    },

    // css
    css: [
        '~/assets/sass/app.scss',
    ],

    // build
    build: {
        transpile: [
            // '@headlessui/vue'
        ],
    },

    // modules
    modules: [
        '@pinia/nuxt',
        '@nuxt/content',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        'nuxt-icon',
        'nuxt-schema-org'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
