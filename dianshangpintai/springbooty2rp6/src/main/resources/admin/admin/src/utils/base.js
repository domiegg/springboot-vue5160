const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooty2rp6/",
            name: "springbooty2rp6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooty2rp6/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Vue与SpringBoot框架在线电商交易平台"
        } 
    }
}
export default base
