export const getGif = async(category) =>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=KO3jiLLt8rHtz0NTn81OWTwxno7Tx2x7&q=${category}&limit=10`
    const resp = await fetch( url )
    const {data} = await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    

    return gifs;
}