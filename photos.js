const img = [
    '1_Aq2_9RI36_LuEdRJkp0R-g.jpeg',
    '1b55e4bdb4fc6051382e370bf26d5a59.jpg',
    '8f8553feb8.jpg',
    '11f4f6a27f.jpg',
    '174-1744883_milwaukee-bucks-iphone-wallpaper-825279-source-milwaukee-bucks.jpg',
    '10611-2.jpg',
    '40236-1680x1050.jpg',
    '93079-19-5.jpg',
    'Bob-Marley-1366x768.jpg'

    
    ];
    
    let count = img.length;
    const cover = document.querySelector('.cover');
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    
    function randInt(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    
    function init() {
        shuffle(img);
        for (let i = 0; i < img.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.style.background = `url('images/${img[i]}')`;
            card.style.backgroundSize = 'cover';
            card.style.transform = `rotate(${randInt(-15, 15)}deg) translate(${randInt(-40, 40)}px, ${randInt(-40, 40)}px)`;
            cover.append(card);
        }
    }
    
    init();
    
    cover.addEventListener('click', event => {
        if (event.target.classList.contains('card')) {
            event.target.classList.add('go');
            count--;
        }
        if (count == 0) {
            /**
                * удалить все card
                */
            init();
            count = img.length;
        }
    });