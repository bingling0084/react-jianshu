import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点'
    }],
    articleList: [{
        id: 1,
        title: '炒猪肉时，先放酱油还是先放盐?一步错步步错，难怪肉又老又硬',
        desc: '如今已是深冬，在寒冷的冬季，餐桌上必不可少的就是肉类食物了，而最常见的就是猪肉了，说到猪肉，营养价值非常丰富，含有丰富的蛋白质、维生素、矿物质、...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-1efd26a9cab6bfbc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '炒猪肉时，先放酱油还是先放盐?一步错步步错，难怪肉又老又硬',
        desc: '如今已是深冬，在寒冷的冬季，餐桌上必不可少的就是肉类食物了，而最常见的就是猪肉了，说到猪肉，营养价值非常丰富，含有丰富的蛋白质、维生素、矿物质、...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-1efd26a9cab6bfbc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }, {
        id: 3,
        title: '炒猪肉时，先放酱油还是先放盐?一步错步步错，难怪肉又老又硬',
        desc: '如今已是深冬，在寒冷的冬季，餐桌上必不可少的就是肉类食物了，而最常见的就是猪肉了，说到猪肉，营养价值非常丰富，含有丰富的蛋白质、维生素、矿物质、...',
        imgUrl: '//upload-images.jianshu.io/upload_images/8107105-1efd26a9cab6bfbc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default: return state;
    }
}