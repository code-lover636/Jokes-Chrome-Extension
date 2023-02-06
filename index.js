const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'joke110.p.rapidapi.com'
    }
};

async function fetchData() {
    const res=await fetch('https://joke110.p.rapidapi.com/random_joke', options)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        document.querySelector(".joke").innerHTML=response.setup;
                        document.querySelector(".punch-line").innerHTML=response.punchline;
                    })
                    .catch(err => console.error(err));

}
fetchData();