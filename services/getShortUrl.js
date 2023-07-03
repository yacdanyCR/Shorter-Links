const getShortUrl = async (url) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "9YyEU4lA7E0CIP10adFJfv7OiuEetvU7");

        const raw = url;

        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        };

        await fetch("https://api.apilayer.com/short_url/hash", requestOptions)
            .then(response => response.json())
            .then(result => {
                return result
            })
            .catch(error => console.log('error', error));
    } catch (error) {

    }
}

export default getShortUrl