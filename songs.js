// This file is basically just a container for a json file

const songArray = [
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Mambo",
      "name": "K.K. Mambo",
      "aircheck": "https://dodo.ac/np/images/2/2b/NH_K.K._Mambo_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f7/NH_K.K._Mambo_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/ab/K.K._Mambo_NH_Texture.png",
      "mood": "I feel good!",
      "num": 14
    },
    {
      "songlink": "https://nookipedia.com/wiki/The_K._Funk",
      "name": "The K. Funk",
      "aircheck": "https://dodo.ac/np/images/f/fa/NH_The_K._Funk_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/6e/NH_The_K._Funk_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/4/4a/The_K._Funk_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 31
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Bashment",
      "name": "K.K. Bashment",
      "aircheck": "https://dodo.ac/np/images/a/a9/NH_K.K._Bashment_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/66/NH_K.K._Bashment_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b9/K.K._Bashment_NH_Texture.png",
      "mood": "A little blue...",
      "num": 103
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Adventure",
      "name": "K.K. Adventure",
      "aircheck": "https://dodo.ac/np/images/7/73/NH_K.K._Adventure_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/4/42/NH_K.K._Adventure_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/e/eb/K.K._Adventure_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 80
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Milonga",
      "name": "K.K. Milonga",
      "aircheck": "https://dodo.ac/np/images/0/08/NH_K.K._Milonga_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/e/ed/NH_K.K._Milonga_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/88/K.K._Milonga_NH_Texture.png",
      "mood": "A little blue...",
      "num": 83
    },
    {
      "songlink": "https://nookipedia.com/wiki/Welcome_Horizons",
      "name": "Welcome Horizons",
      "aircheck": "https://dodo.ac/np/images/7/74/NH_Welcome_Horizons_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/de/NH_Welcome_Horizons_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f4/Welcome_Horizons_NH_Texture.png",
      "mood": null,
      "num": 95
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Lament",
      "name": "K.K. Lament",
      "aircheck": "https://dodo.ac/np/images/0/01/NH_K.K._Lament_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f4/NH_K.K._Lament_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c6/K.K._Lament_NH_Texture.png",
      "mood": "A little blue...",
      "num": 45
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Calypso",
      "name": "K.K. Calypso",
      "aircheck": "https://dodo.ac/np/images/f/f3/NH_K.K._Calypso_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/d7/NH_K.K._Calypso_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/87/K.K._Calypso_NH_Texture.png",
      "mood": "I feel good!",
      "num": 12
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Disco",
      "name": "K.K. Disco",
      "aircheck": "https://dodo.ac/np/images/6/60/NH_K.K._Disco_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/a0/NH_K.K._Disco_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/ce/K.K._Disco_NH_Texture.png",
      "mood": "I feel good!",
      "num": 90
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Khoomei",
      "name": "K.K. Khoomei",
      "aircheck": "https://dodo.ac/np/images/6/6f/NH_K.K._Khoomei_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/56/NH_K.K._Khoomei_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/8d/K.K._Khoomei_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 106
    },
    {
      "songlink": "https://nookipedia.com/wiki/King_K.K.",
      "name": "King K.K.",
      "aircheck": "https://dodo.ac/np/images/8/8d/NH_King_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/7d/NH_King_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/ca/King_K.K._NH_Texture.png",
      "mood": "A little blue...",
      "num": 62
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._House",
      "name": "K.K. House",
      "aircheck": "https://dodo.ac/np/images/6/66/NH_K.K._House_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/1a/NH_K.K._House_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/fa/K.K._House_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 74
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Chorinho",
      "name": "K.K. Chorinho",
      "aircheck": "https://dodo.ac/np/images/d/dd/NH_K.K._Chorinho_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/e/ee/NH_K.K._Chorinho_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/2/28/K.K._Chorinho_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 99
    },
    {
      "songlink": "https://nookipedia.com/wiki/Neapolitan",
      "name": "Neapolitan",
      "aircheck": "https://dodo.ac/np/images/3/39/NH_Neapolitan_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/ad/NH_Neapolitan_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/90/Neapolitan_NH_Texture.png",
      "mood": "I feel good!",
      "num": 65
    },
    {
      "songlink": "https://nookipedia.com/wiki/Comrade_K.K.",
      "name": "Comrade K.K.",
      "aircheck": "https://dodo.ac/np/images/4/4c/NH_Comrade_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/62/NH_Comrade_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/84/Comrade_K.K._NH_Texture.png",
      "mood": "A little blue...",
      "num": 44
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Synth",
      "name": "K.K. Synth",
      "aircheck": "https://dodo.ac/np/images/3/33/NH_K.K._Synth_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/73/NH_K.K._Synth_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/4/46/K.K._Synth_NH_Texture.png",
      "mood": "Laid-back",
      "num": 89
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Robot_Synth",
      "name": "K.K. Robot Synth",
      "aircheck": "https://dodo.ac/np/images/b/bf/NH_K.K._Robot_Synth_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/76/NH_K.K._Robot_Synth_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/8e/K.K._Robot_Synth_NH_Texture.png",
      "mood": "I feel good!",
      "num": 107
    },
    {
      "songlink": "https://nookipedia.com/wiki/Go_K.K._Rider",
      "name": "Go K.K. Rider",
      "aircheck": "https://dodo.ac/np/images/d/dd/NH_Go_K.K._Rider_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/21/NH_Go_K.K._Rider_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/e/e4/Go_K.K._Rider_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 46
    },
    {
      "songlink": "https://nookipedia.com/wiki/Steep_Hill",
      "name": "Steep Hill",
      "aircheck": "https://dodo.ac/np/images/d/d3/NH_Steep_Hill_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/b/bf/NH_Steep_Hill_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/60/Steep_Hill_NH_Texture.png",
      "mood": "A little blue...",
      "num": 66
    },
    {
      "songlink": "https://nookipedia.com/wiki/Forest_Life",
      "name": "Forest Life",
      "aircheck": "https://dodo.ac/np/images/e/e2/NH_Forest_Life_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/8/83/NH_Forest_Life_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b1/Forest_Life_NH_Texture.png",
      "mood": "Laid-back",
      "num": 57
    },
    {
      "songlink": "https://nookipedia.com/wiki/Pondering",
      "name": "Pondering",
      "aircheck": "https://dodo.ac/np/images/5/5b/NH_Pondering_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/50/NH_Pondering_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/0/0f/Pondering_NH_Texture.png",
      "mood": "Laid-back",
      "num": 59
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Waltz",
      "name": "K.K. Waltz",
      "aircheck": "https://dodo.ac/np/images/c/c2/NH_K.K._Waltz_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/08/NH_K.K._Waltz_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/0/0e/K.K._Waltz_NH_Texture.png",
      "mood": "A little blue...",
      "num": 3
    },
    {
      "songlink": "https://nookipedia.com/wiki/Caf%C3%A9_K.K.",
      "name": "Café K.K.",
      "aircheck": "https://dodo.ac/np/images/b/b0/NH_Caf%C3%A9_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/9f/NH_Caf%C3%A9_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/3/31/Caf%C3%A9_K.K._NH_Texture.png",
      "mood": "I feel good!",
      "num": 50
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._%C3%89tude",
      "name": "K.K. Étude",
      "aircheck": "https://dodo.ac/np/images/5/59/NH_K.K._%C3%89tude_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/4/41/NH_K.K._%C3%89tude_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/0/02/K.K._%C3%89tude_NH_Texture.png",
      "mood": "A little blue...",
      "num": 7
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Jongara",
      "name": "K.K. Jongara",
      "aircheck": "https://dodo.ac/np/images/0/06/NH_K.K._Jongara_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/6b/NH_K.K._Jongara_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b4/K.K._Jongara_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 85
    },
    {
      "songlink": "https://nookipedia.com/wiki/Farewell",
      "name": "Farewell",
      "aircheck": "https://dodo.ac/np/images/c/c9/NH_Farewell_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/34/NH_Farewell_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c3/Farewell_NH_Texture.png",
      "mood": null,
      "num": 94
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Rock",
      "name": "K.K. Rock",
      "aircheck": "https://dodo.ac/np/images/0/09/NH_K.K._Rock_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/38/NH_K.K._Rock_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/0/0e/K.K._Rock_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 27
    },
    {
      "songlink": "https://nookipedia.com/wiki/Soulful_K.K.",
      "name": "Soulful K.K.",
      "aircheck": "https://dodo.ac/np/images/d/d9/NH_Soulful_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/70/NH_Soulful_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/68/Soulful_K.K._NH_Texture.png",
      "mood": "Laid-back",
      "num": 33
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Gumbo",
      "name": "K.K. Gumbo",
      "aircheck": "https://dodo.ac/np/images/8/8a/NH_K.K._Gumbo_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/b/b1/NH_K.K._Gumbo_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9c/K.K._Gumbo_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 30
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Slack-Key",
      "name": "K.K. Slack-Key",
      "aircheck": "https://dodo.ac/np/images/5/5a/NH_K.K._Slack-Key_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/25/NH_K.K._Slack-Key_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/5a/K.K._Slack-Key_NH_Texture.png",
      "mood": "Laid-back",
      "num": 98
    },
    {
      "songlink": "https://nookipedia.com/wiki/Agent_K.K.",
      "name": "Agent K.K.",
      "aircheck": "https://dodo.ac/np/images/0/04/NH_Agent_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f8/NH_Agent_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/83/Agent_K.K._NH_Texture.png",
      "mood": "It's hard to say",
      "num": 68
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Cruisin%27",
      "name": "K.K. Cruisin'",
      "aircheck": "https://dodo.ac/np/images/c/c9/NH_K.K._Cruisin%27_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/15/NH_K.K._Cruisin%27_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f4/K.K._Cruisin%27_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 35
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Ragtime",
      "name": "K.K. Ragtime",
      "aircheck": "https://dodo.ac/np/images/d/dc/NH_K.K._Ragtime_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/04/NH_K.K._Ragtime_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/88/K.K._Ragtime_NH_Texture.png",
      "mood": "I feel good!",
      "num": 29
    },
    {
      "songlink": "https://nookipedia.com/wiki/Rockin%27_K.K.",
      "name": "Rockin' K.K.",
      "aircheck": "https://dodo.ac/np/images/b/b4/NH_Rockin%27_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/50/NH_Rockin%27_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f8/Rockin%27_K.K._NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 28
    },
    {
      "songlink": "https://nookipedia.com/wiki/Space_K.K.",
      "name": "Space K.K.",
      "aircheck": "https://dodo.ac/np/images/d/d4/NH_Space_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/61/NH_Space_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c6/Space_K.K._NH_Texture.png",
      "mood": "It's hard to say",
      "num": 79
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Samba",
      "name": "K.K. Samba",
      "aircheck": "https://dodo.ac/np/images/8/81/NH_K.K._Samba_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/01/NH_K.K._Samba_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/63/K.K._Samba_NH_Texture.png",
      "mood": "I feel good!",
      "num": 10
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Bossa",
      "name": "K.K. Bossa",
      "aircheck": "https://dodo.ac/np/images/e/e9/NH_K.K._Bossa_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/b/b1/NH_K.K._Bossa_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/cc/K.K._Bossa_NH_Texture.png",
      "mood": "Laid-back",
      "num": 11
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Faire",
      "name": "K.K. Faire",
      "aircheck": "https://dodo.ac/np/images/8/83/NH_K.K._Faire_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/62/NH_K.K._Faire_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b7/K.K._Faire_NH_Texture.png",
      "mood": "Laid-back",
      "num": 18
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Reggae",
      "name": "K.K. Reggae",
      "aircheck": "https://dodo.ac/np/images/e/e1/NH_K.K._Reggae_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/37/NH_K.K._Reggae_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/50/K.K._Reggae_NH_Texture.png",
      "mood": "Laid-back",
      "num": 15
    },
    {
      "songlink": "https://nookipedia.com/wiki/Drivin%27",
      "name": "Drivin'",
      "aircheck": "https://dodo.ac/np/images/1/19/NH_Drivin%27_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/53/NH_Drivin%27_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/1f/Drivin%27_NH_Texture.png",
      "mood": null,
      "num": 93
    },
    {
      "songlink": "https://nookipedia.com/wiki/Stale_Cupcakes",
      "name": "Stale Cupcakes",
      "aircheck": "https://dodo.ac/np/images/8/89/NH_Stale_Cupcakes_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/4/49/NH_Stale_Cupcakes_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/e/ef/Stale_Cupcakes_NH_Texture.png",
      "mood": "A little blue...",
      "num": 71
    },
    {
      "songlink": "https://nookipedia.com/wiki/Animal_City",
      "name": "Animal City",
      "aircheck": "https://dodo.ac/np/images/0/0d/NH_Animal_City_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/77/NH_Animal_City_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/1f/Animal_City_NH_Texture.png",
      "mood": null,
      "num": 92
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Safari",
      "name": "K.K. Safari",
      "aircheck": "https://dodo.ac/np/images/b/b1/NH_K.K._Safari_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/65/NH_K.K._Safari_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/8e/K.K._Safari_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 25
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Western",
      "name": "K.K. Western",
      "aircheck": "https://dodo.ac/np/images/5/5d/NH_K.K._Western_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/ad/NH_K.K._Western_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/a7/K.K._Western_NH_Texture.png",
      "mood": "A little blue...",
      "num": 48
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Rally",
      "name": "K.K. Rally",
      "aircheck": "https://dodo.ac/np/images/1/12/NH_K.K._Rally_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/09/NH_K.K._Rally_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/a0/K.K._Rally_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 69
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Song",
      "name": "K.K. Song",
      "aircheck": "https://dodo.ac/np/images/6/61/NH_K.K._Song_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/21/NH_K.K._Song_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/cb/K.K._Song_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 53
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Marathon",
      "name": "K.K. Marathon",
      "aircheck": "https://dodo.ac/np/images/3/30/NH_K.K._Marathon_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f2/NH_K.K._Marathon_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9f/K.K._Marathon_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 61
    },
    {
      "songlink": "https://nookipedia.com/wiki/Surfin%27_K.K.",
      "name": "Surfin' K.K.",
      "aircheck": "https://dodo.ac/np/images/7/74/NH_Surfin%27_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/11/NH_Surfin%27_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b8/Surfin%27_K.K._NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 42
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Dixie",
      "name": "K.K. Dixie",
      "aircheck": "https://dodo.ac/np/images/c/c9/NH_K.K._Dixie_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/31/NH_K.K._Dixie_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/50/K.K._Dixie_NH_Texture.png",
      "mood": "I feel good!",
      "num": 60
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Dirge",
      "name": "K.K. Dirge",
      "aircheck": "https://dodo.ac/np/images/4/43/NH_K.K._Dirge_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/c/c5/NH_K.K._Dirge_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/1f/K.K._Dirge_NH_Texture.png",
      "mood": "A little blue...",
      "num": 47
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Soul",
      "name": "K.K. Soul",
      "aircheck": "https://dodo.ac/np/images/5/59/NH_K.K._Soul_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/de/NH_K.K._Soul_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f8/K.K._Soul_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 34
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Chorale",
      "name": "K.K. Chorale",
      "aircheck": "https://dodo.ac/np/images/6/65/NH_K.K._Chorale_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/10/NH_K.K._Chorale_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/6c/K.K._Chorale_NH_Texture.png",
      "mood": "A little blue...",
      "num": 1
    },
    {
      "songlink": "https://nookipedia.com/wiki/Two_Days_Ago",
      "name": "Two Days Ago",
      "aircheck": "https://dodo.ac/np/images/4/41/NH_Two_Days_Ago_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/da/NH_Two_Days_Ago_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/80/Two_Days_Ago_NH_Texture.png",
      "mood": "A little blue...",
      "num": 55
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Swing",
      "name": "K.K. Swing",
      "aircheck": "https://dodo.ac/np/images/b/b9/NH_K.K._Swing_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/6e/NH_K.K._Swing_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/b/b3/K.K._Swing_NH_Texture.png",
      "mood": "Laid-back",
      "num": 4
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Tango",
      "name": "K.K. Tango",
      "aircheck": "https://dodo.ac/np/images/9/97/NH_K.K._Tango_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/b/be/NH_K.K._Tango_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/67/K.K._Tango_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 17
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Ballad",
      "name": "K.K. Ballad",
      "aircheck": "https://dodo.ac/np/images/1/13/NH_K.K._Ballad_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/05/NH_K.K._Ballad_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/d/d2/K.K._Ballad_NH_Texture.png",
      "mood": "A little blue...",
      "num": 43
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Aria",
      "name": "K.K. Aria",
      "aircheck": "https://dodo.ac/np/images/0/0d/NH_K.K._Aria_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/7c/NH_K.K._Aria_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/3/36/K.K._Aria_NH_Texture.png",
      "mood": "Laid-back",
      "num": 9
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._D%26B",
      "name": "K.K. D&B",
      "aircheck": "https://dodo.ac/np/images/2/2d/NH_K.K._D%26B_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/aa/NH_K.K._D%26B_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/2/21/K.K._D%26B_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 37
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Love_Song",
      "name": "K.K. Love Song",
      "aircheck": "https://dodo.ac/np/images/a/a4/NH_K.K._Love_Song_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/d4/NH_K.K._Love_Song_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/5d/K.K._Love_Song_NH_Texture.png",
      "mood": "Laid-back",
      "num": 36
    },
    {
      "songlink": "https://nookipedia.com/wiki/Aloha_K.K.",
      "name": "Aloha K.K.",
      "aircheck": "https://dodo.ac/np/images/9/96/NH_Aloha_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/e/e1/NH_Aloha_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/5b/Aloha_K.K._NH_Texture.png",
      "mood": "Laid-back",
      "num": 19
    },
    {
      "songlink": "https://nookipedia.com/wiki/I_Love_You",
      "name": "I Love You",
      "aircheck": "https://dodo.ac/np/images/e/e0/NH_I_Love_You_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/15/NH_I_Love_You_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/96/I_Love_You_NH_Texture.png",
      "mood": "Laid-back",
      "num": 54
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Flamenco",
      "name": "K.K. Flamenco",
      "aircheck": "https://dodo.ac/np/images/5/5c/NH_K.K._Flamenco_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/db/NH_K.K._Flamenco_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/a9/K.K._Flamenco_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 86
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Stroll",
      "name": "K.K. Stroll",
      "aircheck": "https://dodo.ac/np/images/f/fe/NH_K.K._Stroll_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/fb/NH_K.K._Stroll_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/ad/K.K._Stroll_NH_Texture.png",
      "mood": "Laid-back",
      "num": 77
    },
    {
      "songlink": "https://nookipedia.com/wiki/Wandering",
      "name": "Wandering",
      "aircheck": "https://dodo.ac/np/images/3/3f/NH_Wandering_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/59/NH_Wandering_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/50/Wandering_NH_Texture.png",
      "mood": "Laid-back",
      "num": 73
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Dub",
      "name": "K.K. Dub",
      "aircheck": "https://dodo.ac/np/images/3/35/NH_K.K._Dub_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/e/e6/NH_K.K._Dub_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9b/K.K._Dub_NH_Texture.png",
      "mood": "Laid-back",
      "num": 101
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Metal",
      "name": "K.K. Metal",
      "aircheck": "https://dodo.ac/np/images/c/cb/NH_K.K._Metal_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/2d/NH_K.K._Metal_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/2/28/K.K._Metal_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 70
    },
    {
      "songlink": "https://nookipedia.com/wiki/Lucky_K.K.",
      "name": "Lucky K.K.",
      "aircheck": "https://dodo.ac/np/images/7/79/NH_Lucky_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/a2/NH_Lucky_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9c/Lucky_K.K._NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 20
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Lovers",
      "name": "K.K. Lovers",
      "aircheck": "https://dodo.ac/np/images/f/f9/NH_K.K._Lovers_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f5/NH_K.K._Lovers_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/62/K.K._Lovers_NH_Texture.png",
      "mood": "A little blue...",
      "num": 102
    },
    {
      "songlink": "https://nookipedia.com/wiki/Only_Me",
      "name": "Only Me",
      "aircheck": "https://dodo.ac/np/images/9/97/NH_Only_Me_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/33/NH_Only_Me_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/10/Only_Me_NH_Texture.png",
      "mood": "A little blue...",
      "num": 40
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Steppe",
      "name": "K.K. Steppe",
      "aircheck": "https://dodo.ac/np/images/c/c2/NH_K.K._Steppe_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/8/89/NH_K.K._Steppe_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/1e/K.K._Steppe_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 22
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Polka",
      "name": "K.K. Polka",
      "aircheck": "https://dodo.ac/np/images/7/72/NH_K.K._Polka_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/c/c8/NH_K.K._Polka_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/af/K.K._Polka_NH_Texture.png",
      "mood": "I feel good!",
      "num": 97
    },
    {
      "songlink": "https://nookipedia.com/wiki/To_the_Edge",
      "name": "To the Edge",
      "aircheck": "https://dodo.ac/np/images/a/ae/NH_To_the_Edge_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/59/NH_To_the_Edge_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f7/To_the_Edge_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 58
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Country",
      "name": "K.K. Country",
      "aircheck": "https://dodo.ac/np/images/7/75/NH_K.K._Country_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/a7/NH_K.K._Country_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/8d/K.K._Country_NH_Texture.png",
      "mood": "I feel good!",
      "num": 41
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Fugue",
      "name": "K.K. Fugue",
      "aircheck": "https://dodo.ac/np/images/8/85/NH_K.K._Fugue_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/dc/NH_K.K._Fugue_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/4/4c/K.K._Fugue_NH_Texture.png",
      "mood": "Laid-back",
      "num": 96
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Break",
      "name": "K.K. Break",
      "aircheck": "https://dodo.ac/np/images/d/df/NH_K.K._Break_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/71/NH_K.K._Break_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/d/db/K.K._Break_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 105
    },
    {
      "songlink": "https://nookipedia.com/wiki/Imperial_K.K.",
      "name": "Imperial K.K.",
      "aircheck": "https://dodo.ac/np/images/1/1a/NH_Imperial_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/97/NH_Imperial_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9a/Imperial_K.K._NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 23
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Condor",
      "name": "K.K. Condor",
      "aircheck": "https://dodo.ac/np/images/f/f5/NH_K.K._Condor_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/c/ca/NH_K.K._Condor_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c2/K.K._Condor_NH_Texture.png",
      "mood": "A little blue...",
      "num": 21
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Lullaby",
      "name": "K.K. Lullaby",
      "aircheck": "https://dodo.ac/np/images/f/f9/NH_K.K._Lullaby_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/03/NH_K.K._Lullaby_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/e/ee/K.K._Lullaby_NH_Texture.png",
      "mood": "A little blue...",
      "num": 8
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Groove",
      "name": "K.K. Groove",
      "aircheck": "https://dodo.ac/np/images/c/c3/NH_K.K._Groove_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/a5/NH_K.K._Groove_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/7/7f/K.K._Groove_NH_Texture.png",
      "mood": "I feel good!",
      "num": 84
    },
    {
      "songlink": "https://nookipedia.com/wiki/Bubblegum_K.K.",
      "name": "Bubblegum K.K.",
      "aircheck": "https://dodo.ac/np/images/3/30/NH_Bubblegum_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/6d/NH_Bubblegum_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/69/Bubblegum_K.K._NH_Texture.png",
      "mood": "I feel good!",
      "num": 88
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Island",
      "name": "K.K. Island",
      "aircheck": "https://dodo.ac/np/images/8/89/NH_K.K._Island_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/db/NH_K.K._Island_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/64/K.K._Island_NH_Texture.png",
      "mood": "Laid-back",
      "num": 78
    },
    {
      "songlink": "https://nookipedia.com/wiki/DJ_K.K.",
      "name": "DJ K.K.",
      "aircheck": "https://dodo.ac/np/images/4/45/NH_DJ_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/96/NH_DJ_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/5e/DJ_K.K._NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 39
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Moody",
      "name": "K.K. Moody",
      "aircheck": "https://dodo.ac/np/images/c/cd/NH_K.K._Moody_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/20/NH_K.K._Moody_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/9/9c/K.K._Moody_NH_Texture.png",
      "mood": "Laid-back ",
      "num": 87
    },
    {
      "songlink": "https://nookipedia.com/wiki/Marine_Song_2001",
      "name": "Marine Song 2001",
      "aircheck": "https://dodo.ac/np/images/b/be/NH_Marine_Song_2001_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/a/a1/NH_Marine_Song_2001_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/af/Marine_Song_2001_NH_Texture.png",
      "mood": "Laid-back",
      "num": 64
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Salsa",
      "name": "K.K. Salsa",
      "aircheck": "https://dodo.ac/np/images/5/56/NH_K.K._Salsa_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/4/4d/NH_K.K._Salsa_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/84/K.K._Salsa_NH_Texture.png",
      "mood": "I feel good!",
      "num": 13
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Mariachi",
      "name": "K.K. Mariachi",
      "aircheck": "https://dodo.ac/np/images/7/7c/NH_K.K._Mariachi_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/3/39/NH_K.K._Mariachi_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c1/K.K._Mariachi_NH_Texture.png",
      "mood": "I feel good!",
      "num": 52
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Jazz",
      "name": "K.K. Jazz",
      "aircheck": "https://dodo.ac/np/images/7/7c/NH_K.K._Jazz_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/01/NH_K.K._Jazz_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/0/00/K.K._Jazz_NH_Texture.png",
      "mood": "Laid-back",
      "num": 5
    },
    {
      "songlink": "https://nookipedia.com/wiki/Spring_Blossoms",
      "name": "Spring Blossoms",
      "aircheck": "https://dodo.ac/np/images/5/57/NH_Spring_Blossoms_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/4/4b/NH_Spring_Blossoms_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/3/32/Spring_Blossoms_NH_Texture.png",
      "mood": "I feel good!",
      "num": 72
    },
    {
      "songlink": "https://nookipedia.com/wiki/Mountain_Song",
      "name": "Mountain Song",
      "aircheck": "https://dodo.ac/np/images/5/5c/NH_Mountain_Song_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/28/NH_Mountain_Song_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/4/44/Mountain_Song_NH_Texture.png",
      "mood": "I feel good!",
      "num": 63
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Fusion",
      "name": "K.K. Fusion",
      "aircheck": "https://dodo.ac/np/images/1/1f/NH_K.K._Fusion_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/0e/NH_K.K._Fusion_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/6f/K.K._Fusion_NH_Texture.png",
      "mood": "Laid-back",
      "num": 6
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Ska",
      "name": "K.K. Ska",
      "aircheck": "https://dodo.ac/np/images/c/c7/NH_K.K._Ska_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/f/f0/NH_K.K._Ska_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/6d/K.K._Ska_NH_Texture.png",
      "mood": "I feel good!",
      "num": 16
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._March",
      "name": "K.K. March",
      "aircheck": "https://dodo.ac/np/images/a/a0/NH_K.K._March_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/6/6d/NH_K.K._March_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/e/ef/K.K._March_NH_Texture.png",
      "mood": "I feel good!",
      "num": 2
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Hop",
      "name": "K.K. Hop",
      "aircheck": "https://dodo.ac/np/images/9/9d/NH_K.K._Hop_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/2a/NH_K.K._Hop_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/a9/K.K._Hop_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 104
    },
    {
      "songlink": "https://nookipedia.com/wiki/My_Place",
      "name": "My Place",
      "aircheck": "https://dodo.ac/np/images/f/f5/NH_My_Place_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/96/NH_My_Place_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/fa/My_Place_NH_Texture.png",
      "mood": "Laid-back",
      "num": 56
    },
    {
      "songlink": "https://nookipedia.com/wiki/Hypno_K.K.",
      "name": "Hypno K.K.",
      "aircheck": "https://dodo.ac/np/images/f/ff/NH_Hypno_K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/1/19/NH_Hypno_K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/d/d1/Hypno_K.K._NH_Texture.png",
      "mood": "It's hard to say",
      "num": 76
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Casbah",
      "name": "K.K. Casbah",
      "aircheck": "https://dodo.ac/np/images/7/7a/NH_K.K._Casbah_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/da/NH_K.K._Casbah_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/4/43/K.K._Casbah_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 24
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Folk",
      "name": "K.K. Folk",
      "aircheck": "https://dodo.ac/np/images/9/95/NH_K.K._Folk_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/8/8c/NH_K.K._Folk_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/6b/K.K._Folk_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 26
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Oasis",
      "name": "K.K. Oasis",
      "aircheck": "https://dodo.ac/np/images/5/58/NH_K.K._Oasis_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/0/0b/NH_K.K._Oasis_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/86/K.K._Oasis_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 81
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Bazaar",
      "name": "K.K. Bazaar",
      "aircheck": "https://dodo.ac/np/images/f/f6/NH_K.K._Bazaar_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/2/2d/NH_K.K._Bazaar_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/1/1a/K.K._Bazaar_NH_Texture.png",
      "mood": "A little grumpy...",
      "num": 82
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Parade",
      "name": "K.K. Parade",
      "aircheck": "https://dodo.ac/np/images/3/32/NH_K.K._Parade_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/90/NH_K.K._Parade_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/8/85/K.K._Parade_NH_Texture.png",
      "mood": "I feel good!",
      "num": 51
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Technopop",
      "name": "K.K. Technopop",
      "aircheck": "https://dodo.ac/np/images/1/13/NH_K.K._Technopop_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/d/df/NH_K.K._Technopop_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/f5/K.K._Technopop_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 38
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Birthday",
      "name": "K.K. Birthday",
      "aircheck": "https://dodo.ac/np/images/c/c1/NH_K.K._Birthday_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/7/76/NH_K.K._Birthday_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/fa/K.K._Birthday_NH_Texture.png",
      "mood": null,
      "num": 91
    },
    {
      "songlink": "https://nookipedia.com/wiki/Chillwave",
      "name": "Chillwave",
      "aircheck": "https://dodo.ac/np/images/b/b9/NH_Chillwave_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/5/50/NH_Chillwave_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/a/a2/Chillwave_NH_Texture.png",
      "mood": "Laid-back",
      "num": 100
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Rockabilly",
      "name": "K.K. Rockabilly",
      "aircheck": "https://dodo.ac/np/images/f/f9/NH_K.K._Rockabilly_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/91/NH_K.K._Rockabilly_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/5/59/K.K._Rockabilly_NH_Texture.png",
      "mood": "I feel good!",
      "num": 67
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Sonata",
      "name": "K.K. Sonata",
      "aircheck": "https://dodo.ac/np/images/c/c2/NH_K.K._Sonata_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/b/b1/NH_K.K._Sonata_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/c/c9/K.K._Sonata_NH_Texture.png",
      "mood": "A little blue...",
      "num": 75
    },
    {
      "songlink": "https://nookipedia.com/wiki/Mr._K.K.",
      "name": "Mr. K.K.",
      "aircheck": "https://dodo.ac/np/images/7/75/NH_Mr._K.K._%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/9/9e/NH_Mr._K.K._%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/6/6a/Mr._K.K._NH_Texture.png",
      "mood": "Laid-back",
      "num": 49
    },
    {
      "songlink": "https://nookipedia.com/wiki/K.K._Blues",
      "name": "K.K. Blues",
      "aircheck": "https://dodo.ac/np/images/d/de/NH_K.K._Blues_%28Aircheck%2C_Hi-Fi%29.flac",
      "live": "https://dodo.ac/np/images/e/ed/NH_K.K._Blues_%28Live%29.flac",
      "imagesrc": "https://dodo.ac/np/images/f/fa/K.K._Blues_NH_Texture.png",
      "mood": "It's hard to say",
      "num": 32
    }
  ];