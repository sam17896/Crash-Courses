const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    'token': 'xoxb-169403286017-375487234817-eKEluyYfNPJWFEwJMtvJnbJE',
    'name': 'jokebot'
});


bot.on('start', () => {
    const params = {
        icon_emoji : ':smiley:'
    }

    //bot.postMessageToChannel('general','Fahad bhai ke thande jokes sunne ko tyar',params);


    bot.on('error', (err) => console.log(err));

    bot.on('message', (data) => {
        if(data.type !== 'message'){
            return;
        }

        handleMessage(data.text);
    });


    function handleMessage(message) {
        if(message.includes('chucknorris')){
            chuckJoke();
        } else if(message.includes('yomama')) {
            yoMamaJoke();
        } else if(message.includes('fahad')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('hisham')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('ahsan')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('yousuf')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('joke')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('latefa')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('thanda')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        } else if(message.includes('suna')) {
            Math.random() % 2 == 0 ? chuckJoke() : yoMamaJoke();
        }
    }


    function chuckJoke() {
        axios.get('http://api.icndb.com/jokes/random')
            .then(res=>{
                var payload = res.data;
                const joke = payload.value.joke;

                const params = {
                    icon_emoji : ':laughing:'
                }

                bot.postMessageToChannel('general',
                `Fahad Bhai : ${joke}`,params);
                console.log(joke)
            });
    }

    function yoMamaJoke() {
        axios.get('http://api.yomomma.info')
            .then(res=>{
                var payload = res.data;
                const joke = payload.joke;

                const params = {
                    icon_emoji : ':laughing:'
                }

                bot.postMessageToChannel('general',
                `Fahad Bhai : ${joke}`,params);

                console.log(joke)

            });
    }
});