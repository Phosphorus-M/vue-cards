<template>
    <div>
        <div v-for="values in Object.entries(numbers)">
            <sui-header size="medium" class="category">Phone:</sui-header>
            <sui-header size="small">{{values[1]}}</sui-header> <p style="text-transform: capitalize;">{{values[0]}}</p>
            <sui-divider />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Number',
    props: ["numbers"]
};
</script>

<style>
.number{
	float:left;
    width: 50%;
}
.type{
	float: right;
    width: 50%;
}
</style>