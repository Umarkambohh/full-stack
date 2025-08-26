<template>
    <AdminHeader />    
    <router-view />
    <AdminFooter />
</template>

<script setup>
import AdminHeader from "../components/admin/AdminHeader.vue";
import AdminFooter from "../components/admin/AdminFooter.vue";
</script>