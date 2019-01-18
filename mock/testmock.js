export default {
    'GET /api/users': (req, res) => {
        setTimeout(() => {
            res.json({code:0,msg:"",data:[222,2,3]});
        }, 1000);
    },
}