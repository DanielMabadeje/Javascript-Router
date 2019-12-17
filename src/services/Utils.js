const Utils = { 
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {
        // const hash ='p'
        let url = location.hash.slice(1).toLowerCase() || '/';
        // let url = location.pathname.toLowerCase() || '/';
        // alert(location.pathname);
        // alert(url);
        // console.log(location)
        // return
        let r = url.split("/")
        // alert(r)
        // return
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        // alert(r[1]);
        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default Utils;