export default {
    'GET /api/users': (req, res) => {
        setTimeout(() => {
            res.json({code:0,msg:"",data:[222,2,3]});
        }, 3000);
    },
    'POST /api/page/list': (req, res) => {
        setTimeout(() => {
            res.json({
                code:0,
                msg:"",
                data:[
                {title:"首页1",author:'maomao',comment:1,addtime:"2013-01-29",key:1},
                {title:"价格2",author:'maomao',comment:1,addtime:"2013-01-29",key:2},
                {title:"帮助3",author:'maomao',comment:1,addtime:"2013-01-29",key:3},
                {title:"案例4",author:'maomao',comment:1,addtime:"2013-01-29",key:4},
                {title:"关于我们5",author:'maomao',comment:1,addtime:"2013-01-29",key:5},
                {title:"首页6",author:'maomao',comment:1,addtime:"2013-01-29",key:11},
                {title:"价格7",author:'maomao',comment:1,addtime:"2013-01-29",key:22},
                {title:"帮助8",author:'maomao',comment:1,addtime:"2013-01-29",key:33},
                {title:"案例9",author:'maomao',comment:1,addtime:"2013-01-29",key:44},
                {title:"关于我们11",author:'maomao',comment:1,addtime:"2013-01-29",key:55},
                {title:"首页12",author:'maomao',comment:1,addtime:"2013-01-29",key:12},
                {title:"价格13",author:'maomao',comment:1,addtime:"2013-01-29",key:23},
                {title:"帮助14",author:'maomao',comment:1,addtime:"2013-01-29",key:34},
                {title:"案例15",author:'maomao',comment:1,addtime:"2013-01-29",key:45},
                {title:"关于我们16",author:'maomao',comment:1,addtime:"2013-01-29",key:56},
                {title:"首页17",author:'maomao',comment:1,addtime:"2013-01-29",key:117},
                {title:"价格18",author:'maomao',comment:1,addtime:"2013-01-29",key:228},
                {title:"帮助19",author:'maomao',comment:1,addtime:"2013-01-29",key:339},
                {title:"案例21",author:'maomao',comment:1,addtime:"2013-01-29",key:446},
                {title:"关于我们22",author:'maomao',comment:1,addtime:"2013-01-29",key:556},
            ]});
        }, 100);
    },
}