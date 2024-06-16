<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ListenLogo from '@/Components/ListenLogo.vue';
import SafeSpaceLogo from '@/Components/SafeSpaceLogo.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Welcome" />
    <div class="bg-black text-white bg-gradient-to-tr from-black from-30% to-lavender/80">
        <div class="relative min-h-screen flex flex-col selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="grid grid-cols-2 items-center gap-2 py-10">
                    <div class="flex col-start-1">
                        <ApplicationLogo />
                    </div>
                    <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>

                <main class="mt-3 space-y-5">
                    <div class="flex w-full items-center justify-center bg-grey/20 backdrop-blur-lg rounded-lg border border-mediumgrey shadow-lg p-5 space-x-5">
                        <ListenLogo />
                        <div>
                            <h1>Listen to your thoughts</h1>
                            <p>Write whatever is cluttering your minds, achieve your Zen.</p>
                        </div>
                    </div>
                    <div class="flex w-full items-center justify-center text-right bg-grey/20 backdrop-blur-lg rounded-lg border border-mediumgrey shadow-lg p-5 space-x-5">
                        <div>
                            <h1>Your safe space</h1>
                            <p>A "yours-truly" zone, share your moments and reflections</p>
                        </div>
                        <SafeSpaceLogo />
                    </div>
                </main>

                <footer class="py-16 text-center text-sm text-black dark:text-white/70">
                    <!-- Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }}) -->
                    Made with ❤️ by TIF-PW-G Kelompok X, 2024
                </footer>
            </div>
        </div>
    </div>
</template>
