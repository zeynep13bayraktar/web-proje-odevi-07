fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20" , {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '893ec24a75mshbc4a5d06347efe7p136e8ejsndc8061579f6a',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}

})
.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.filmler').innerHTML += movie;
    })
})
.catch(err => {
    console.error(err);
})





















































