<template>
    <div class="w-96 bg-white flex flex-col justify-between items-center rounded-lg overflow-hidden
    pb-2 zoom shadow-2xl shadow-slate-900 place-self-center h-full">
            <div class="w-full overflow-hidden h-3/5 border-b-2 border-slate-500">
                <img class="w-full object-cover transition-all duration-200 grayscale scale-150"
                    src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/pages/macos-big-sur-pages-10-3-templates-books.jpg"
                    alt="Image example">
            </div>
            <p class="text-xl font-semibold">Lorem, ipsum.</p>
            <button class="w-11/12 flex justify-center items-center p-1 border border-slate-700 space-x-2 hover:text-white
            hover:rounded-2xl hover:bg-slate-700 transition-all duration-200">
                <i class="fa-brands fa-github text-3xl"></i>
                <span>
                    See in Github
                </span>
            </button>
        </div>
</template>
<style scoped>
.zoom:hover img {
    transform: scale(1);
    filter: grayscale(0);
}
</style>