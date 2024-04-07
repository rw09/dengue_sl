<template>
    <Head title="Dados Dengue São Leopoldo" />
    <main class="bg-[#f49b0e] w-screen h-screen">
        <section class="container px-60 flex flex-col gap-y-3 items-center">
            <img src="cartaz.png" class="w-10/12">
            <h1 class="bg-black rounded-3xl text-white text-xl font-bold px-12 py-6">MONITORAMENTO DENGUE SÃO LEOPOLDO</h1>
            <h1 class="font-bold">{{ dados?.data_atualizacao }}</h1> 

            <div class="grid grid-cols-4 gap-4">
                <div class="w-48">
                    <h1 class="bg-red-600 text-white text-center rounded-tl-2xl rounded-tr-2xl border border-black font-bold py-5 px-4">Casos Confirmados</h1>
                    <h2 class="bg-white text-center text-5xl rounded-bl-2xl rounded-br-2xl border border-black border-t-0 font-bold py-6 px-4">{{ dados?.confirmados }}</h2>
                </div>
                <div class="w-48">
                    <h1 class="bg-red-600 text-white text-center rounded-tl-2xl rounded-tr-2xl border border-black font-bold py-5 px-4">Óbitos</h1>
                    <h2 class="bg-white text-center text-5xl rounded-bl-2xl border border-black border-t-0  rounded-br-2xl font-bold py-6 px-4">{{ dados?.obitos }}</h2>
                </div>
                <div class="w-48">
                    <h1 class="bg-red-600 text-white text-center rounded-tl-2xl rounded-tr-2xl border border-black font-bold py-2 px-4">Incidência por 100 mil habitantes</h1>
                    <h2 class="bg-white text-center text-5xl rounded-bl-2xl rounded-br-2xl border border-black border-t-0 font-bold py-6 px-4">{{ dados?.incidencia }}</h2>
                </div>
                <div class="w-48">
                    <h1 class="bg-red-600 text-white text-center rounded-tl-2xl rounded-tr-2xl border border-black font-bold py-5 px-4">Notificações</h1>
                    <h2 class="bg-white text-center text-5xl rounded-bl-2xl border border-black border-t-0  rounded-br-2xl font-bold py-6 px-4">{{ dados?.notificacoes }}</h2>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    const props = defineProps({
        dados: Object
    })
</script>