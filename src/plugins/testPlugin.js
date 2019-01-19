export default (api, opts) => {
    // console.log(api, opts,'testplugins');    
    api.onOptionChange(() => {
        api.rebuildTmpFiles();
    });
}