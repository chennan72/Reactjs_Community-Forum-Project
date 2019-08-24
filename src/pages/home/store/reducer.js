import {fromJS} from "immutable";
import React from "react";

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: 'Book',
        imgUrl: 'http://d03.fl580.com/my/marketing/c/d/283687/album/20160318092335.jpg'
    }, {
        id: 2,
        title: 'Fun',
        imgUrl: 'http://b-ssl.duitang.com/uploads/item/201802/01/20180201151440_KVCfj.thumb.700_0.jpeg'
    }, {
        id: 3,
        title: 'Fashion',
        imgUrl: 'http://c1.haibao.cn/img/600_0_100_1/1471318175.8944/8eafe50e3162aa7da2c3528dd3496b4f.jpg'
    }, {
        id: 4,
        title: 'Travel',
        imgUrl: 'http://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201607/10/093253vmq55hab6mbxbbrf.jpeg'
    }, {
        id: 5,
        title: 'Food',
        imgUrl: 'http://b-ssl.duitang.com/uploads/blog/201510/20/20151020194029_wcySK.jpeg'
    }],
    articleList: [{
        id: 1,
        title: '下半年蘋果新品更新計畫曝光 新iPhone攝影力可期',
        desc: '好奇 2019 年的新 iPhone 有哪些規格與功能嗎？此外，蘋果又會針對 Mac、iPad、Apple Watch、AirPods\n' +
            '等產品有哪些計畫呢？知名財經媒體針對蘋果(Apple)在接下來一段時間的產品升級計畫進行了全面預測 >>',
        imgUrl: 'https://images.chinatimes.com/newsphoto/2019-08-23/900/20190823003537.jpg'
    },
        {
            id: 2,
            title: '三星Note 10與Pixel 3日夜拍對決 誰更出色？',
            desc: '三星Galaxy Note 10系列8月23日正式在台上市，從專業評測機構DxOMark公開的測試已可知曉，' +
                'Note 10+的整體成績為當前手機相機中的冠軍。Note 10系列主相機都在三顆以上，因此 >>',
            imgUrl: 'https://images.chinatimes.com/newsphoto/2019-08-24/900/20190824001850.jpg'
        },
        {
            id: 3,
            title: 'Digitimes預測新iPhone容量128GB起跳 推綠色刺激買氣\n',
            desc: '八月即將邁入尾聲，全球果粉們都在等九月份即將到來的重點大戲，也就是「蘋果新一代iPhone發表會」！' +
                '針對蘋果今年計劃推出的新iPhone，電子時報旗下《DIGITIMES Research 》發出最新 >>',
            imgUrl: 'https://images.chinatimes.com/newsphoto/2019-08-22/900/20190822003681.jpg'
        }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
