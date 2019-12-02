let About = {
    render : async () => {
    //     let v=<section class="section">
    //     <h1> Abouts </h1>
    // </section>
    // let view = ``+v+``
        let view =  /*html*/`
        <!-- <section class="section">
                <h1> Abouts </h1>
            </section>
            -->
            <embed width="100%" src="views/html/chck.html">
        `
        return view
    },
    after_render: async () => {}
        
}

export default About;