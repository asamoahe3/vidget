(function () {
    const inputURL = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Validate user input
        if (inputURL.value.trim() == "" || inputURL.value.trim() == " " || inputURL.value.trim() == null) {
            console.log("You entered nothign at all.")
        } else {
            async function getVideo() {
                try {
                    const options = {
                        method: 'GET',
                        headers: {
                            'X-RapidAPI-Key': '68741cbd14mshd7b5516338806aep14cef8jsnafa7cf444a17',
                            'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
                        }
                    };

                    let baseLink = inputURL.value;
                    const getVideoId = baseLink.substring(baseLink.length - 11);
                    const response = await fetch(`https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=${getVideoId}`, options);
                    const data = await response.json();

                    // Fetch data from api response
                    const { title, thumb, length, view_count } = data;

                    document.getElementById("outImage").src = thumb;
                    document.getElementById("title").innerHTML = title;
                    document.querySelector(".duration").innerHTML = length;
                    document.querySelector(".view-count").innerHTML = view_count;
                    document.querySelector(".btn-download").href = thumb;

                    console.log(data)

                } catch (err) {
                    console.log(err)
                }
            } getVideo()

        }

    })

}())
