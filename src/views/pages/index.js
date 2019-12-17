let index = {
    render : async () => {
//         let view =  /*html*/`
//       <!--  <object type="text/html" data="views/html/index.html" ></object> -->
//       <script>
// // $(document).ready( function() {
//         $("document").load("views/html/index.html");
// // });
// </script>
//         `
    let url ='./src/views/html/index.html'
        return await (await fetch(url)).text();
        // return view
    },
    after_render: async () => {
      
}
}

export default index;