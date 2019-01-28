const path = require('path')

export default (api, opts) => {
    // console.log(api, opts,'testplugins');    
    api.addRendererWrapperWithComponent(path.join(__dirname, './locale.js'));
}