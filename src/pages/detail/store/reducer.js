import {fromJS} from 'immutable';

const defaultState = fromJS({
    title: '下半年蘋果新品更新計畫曝光 新iPhone攝影力可期',
    content: '<img\n' +
        '    alt="pic"\n' +
        '    src="https://images.chinatimes.com/newsphoto/2019-08-23/900/20190823003527.jpg"/>\n' +
        '<p>\n' +
        '<b>今年三款新 iPhone 預計都會具備的特點包含：</b>雙向無線充電功能，也就是說在原本可支援以無線方式充電之外，加入可以無線的方式為其他設備充電的功能；移除 3D Touch\n' +
        '改用 Haptic\n' +
        'Touch，這項功能 2018 年已經在 iPhone XR 當中實現；升級到更強大的 A13 處理器；新機預計都不會支援 5G，得等到 2020 年的版本才會有，此外 2020 年\n' +
        'iPhone 主鏡頭也預期會有 3D 攝影鏡頭，提升在 AR(擴增實鏡)上的能力。\n' +
        '</p>'
})


export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
