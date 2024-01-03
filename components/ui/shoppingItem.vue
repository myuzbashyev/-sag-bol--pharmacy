<template>
    <nuxt-link to="/">
        <div>
            <div>
                <img :src="image" alt="Medicine image">

            </div>
            <div>
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
            <div>
                <h2>{{ price }}</h2>
                <input type="number">
            </div>
            <i class="pi pi-trash"></i>
        </div>
    </nuxt-link>
</template>
<script>
export default{
    props:['image','title','description','price']
}
</script>