
let Home = {
    render : async () => {

        let url ='./src/views/html/home.html'
        return await (await fetch(url)).text();
    }
    , after_render: async () => {
       
    }

}

export default Home;