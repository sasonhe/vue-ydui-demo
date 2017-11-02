<template>
<div>
    <yd-tab>
        <yd-tab-panel label="美图欣赏">
            <yd-lightbox :num="list.length">

                <yd-flexbox style="padding-right: 0.05rem;">
                    <yd-flexbox-item v-for="(item, index) in list" v-if="index < 3" :key="item.id">
                        <yd-lightbox-img style="width: 100%;padding-left: 0.05rem;" :src="item.src" :original="item.original"></yd-lightbox-img>
                    </yd-flexbox-item>
                </yd-flexbox>

                <yd-flexbox style="padding-right: 0.05rem;padding-top: 0.05rem;">
                    <yd-flexbox-item v-for="(item, index) in list" v-if="index >= 3" :key="item.id">
                        <yd-lightbox-img style="width: 100%;padding-left: 0.05rem;" :src="item.src" :original="item.original"></yd-lightbox-img>
                    </yd-flexbox-item>
                </yd-flexbox>

                <yd-lightbox-txt>
                    <h1 style="font-size: 0.05rem;margin-bottom: 0.08rem;color: #00c3f5;text-align: right;" slot="top">双瞳如小窗 佳景观历历</h1>
                    <div slot="content" style="text-align: right;">
                        <p>相机：灵犀相通，妙不可言。</p>
                        <p>设计：美不胜收，爱不释手。</p>
                        <p>体验：强劲性能，持久动力。</p>
                        <p>mCharge 4.0：上善若水，不止于快。</p>
                        <p>mTouch：指尖轻点，安全随行。</p>
                    </div>
                </yd-lightbox-txt>
            </yd-lightbox>
        </yd-tab-panel>
        <yd-tab-panel label="选项二">
            <yd-list theme="3">
                <yd-list-item v-for="item, key in list2" :key="key">
                    <img slot="img" :src="item.img">
                    <span slot="title">{{item.title}}</span>
                    <yd-list-other slot="other">
                        <div>
                            <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            <span class="demo-list-del-price">¥{{item.w_price}}</span>
                        </div>
                        <div>content</div>
                    </yd-list-other>
                </yd-list-item>
            </yd-list>
        </yd-tab-panel>
        <yd-tab-panel label="选项三">
            <yd-list theme="4">
                <yd-list-item v-for="item, key in list2" :key="key">
                    <img slot="img" :src="item.img">
                    <span slot="title">{{item.title}}</span>
                    <yd-list-other slot="other">
                        <div>
                            <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            <span class="demo-list-del-price">¥{{item.w_price}}</span>
                        </div>
                        <div>content</div>
                    </yd-list-other>
                </yd-list-item>
            </yd-list>
        </yd-tab-panel>
        <yd-tab-panel label="选项四">
            <yd-list theme="5">
                <yd-list-item v-for="item, key in list2" :key="key">
                    <img slot="img" :src="item.img">
                    <span slot="title">{{item.title}}</span>
                    <yd-list-other slot="other">
                        <div>
                            <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                            <span class="demo-list-del-price">¥{{item.w_price}}</span>
                        </div>
                        <div>content</div>
                    </yd-list-other>
                </yd-list-item>
            </yd-list>
        </yd-tab-panel>
    </yd-tab>
</div>
</template>

<script type="text/babel">
export default {
    data() {
        return {
            list: [{
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_1.jpg'
                },
                {
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_2.jpg'
                },
                {
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_3.jpg'
                },
                {
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_4.jpg'
                },
                {
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_5.jpg'
                },
                {
                    src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg',
                    original: 'http://static.ydcss.com/uploads/lightbox/meizu_6.jpg'
                }
            ],
            list2: [{
                    img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                    title: "标题111标题标题标题标题",
                    price: 156.23,
                    w_price: 89.36
                },
                {
                    img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                    title: "标题222标题标题标题标题",
                    price: 256.23,
                    w_price: 89.36
                },
                {
                    img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                    title: "标题333标题标题标题标题",
                    price: 356.23,
                    w_price: 89.36
                },
                {
                    img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                    title: "标题444标题标题标题标题",
                    price: 456.23,
                    w_price: 89.36
                },
                {
                    img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                    title: "标题555标题标题标题标题",
                    price: 556.23,
                    w_price: 89.36
                },
                {
                    img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                    title: "标题666标题标题标题标题",
                    price: 656.23,
                    w_price: 89.36
                }
            ]
        }
    },
    components: {

    }
}
</script>
