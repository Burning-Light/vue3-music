<template>
    <span>{{ date }}</span>
</template>

<script setup lang="ts">
import { watch } from 'vue'
const props = defineProps({
    time: {
        type: Number,
        default: 1571988586320
    },
    mode: {
        type: String,
        default: 'xxxx/xx/xx xx:xx:xx'
    },
})
let objectDate
let year: any
let month: any
let day: any
let hour: any
let minute: any
let sec: any
let date: any
watch(() => props.time, () => {
    objectDate = new Date(props.time)
    year = objectDate.getFullYear()
    month = objectDate.getMonth() + 1
    day = objectDate.getDate()
    hour = objectDate.getHours()
    minute = objectDate.getMinutes()
    sec = objectDate.getSeconds()
    const timeFormat: any = (year: any, month: any, day: any, hour: any, minute: any, sec: any) => {
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        hour = hour < 10 ? '0' + hour : hour
        minute = minute < 10 ? '0' + minute : minute
        sec = sec < 10 ? '0' + sec : sec
        switch (props.mode) {
            case 'xxxx/xx/xx xx:xx:xx':
                return year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + sec;
            case 'xx:xx:xx':
                return hour + ':' + minute + ':' + sec;
            case 'xx:xx':
                return minute + ':' + sec;
        }

    }
    date = timeFormat(year, month, day, hour, minute, sec)
}, { deep: true, immediate: true })

</script>

<style lang="scss" scoped></style>