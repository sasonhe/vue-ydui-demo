
<template>
<yd-scrolltab>
    <yd-scrolltab-panel v-for="item in list" :key="item.id" :label="item.label" :icon="item.icon" :active="item.active">
        <div style="height: 4.2rem;" :style="{backgroundColor: item.color}">{{item.label}}</div>
    </yd-scrolltab-panel>
</yd-scrolltab>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    label: '收购',
                    icon: 'demo-icons-category1',
                    color: 'gray'
                },
                {
                    label: '空调',
                    icon: 'demo-icons-category1',
                    color: 'gray'
                },
                {
                    label: '冰箱',
                    icon: 'demo-icons-category2',
                    color: 'blue'
                },
                {
                    label: '彩电',
                    icon: 'demo-icons-category3',
                    color: 'yellow'
                },
                {
                    label: '热水器',
                    icon: 'demo-icons-category4',
                    color: 'green'
                },
                {
                    label: '煤气罐',
                    icon: 'demo-icons-category5',
                    color: 'saddlebrown'
                },
                {
                    label: '洗衣机',
                    icon: 'demo-icons-category6',
                    color: 'darkgoldenrod'
                },
                {
                    label: '二手航母',
                    icon: 'demo-icons-category7',
                    color: 'indianred'
                },
                {
                    label: '核弹头',
                    icon: 'demo-icons-category8',
                    color: 'aqua'
                }
            ]
        }
    },
    components: {

    }
}
</script>
<style scoped>

</style>
