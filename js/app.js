var app = document.getElementById('naslov');

var typewriter = new Typewriter(app, {
    loop: true,
    changeDeleteSpeed: 20
});

typewriter.typeString('')
    .pauseFor(3500)
    .deleteAll(20)
    .typeString('Mi smo RPB Design')
    .pauseFor(2500)
    .deleteAll(20)
    .typeString('Ukoliko Vam je potreban <b><em>web dezen</em></b>...')
    .pauseFor(2500)
    .deleteChars(12)
    .pauseFor(800)
    .typeString('<b><em>dezen logoa</em></b>...')
    .pauseFor(2500)
    .deleteAll(20)
    .pauseFor(800)
    .typeString('Na pravom ste mestu')
    .pauseFor(2500)
    .deleteAll()
    .start();

const easing = 'easeOutExpo'

anime({
    targets: '#container-levo',
    translateY: '100%',
    easing: easing,
    duration: 1500
});

animation1 = anime({
    targets: '#container-desno',
    translateY: '-100%',
    easing: easing,
    duration: 1500
});

animation1.finished.then(() => {
    anime({
        targets: home,
        right: 30,
        easing: easing,
        duration: 400
    });
    anime({
        targets: about,
        right: 30,
        easing: easing,
        duration: 400,
        delay: -50
    });
    anime({
        targets: team,
        right: 30,
        easing: easing,
        duration: 400,
        delay: 100
    });
    anime({
        targets: contact,
        right: 30,
        easing: easing,
        duration: 400,
        delay: 250
    });

})


anime({
    targets: '#naslov-nosac',
    opacity: 1,
    easing: easing,
    duration: 2500
});

anime({
    targets: '#slika-levo',
    left: '5%',
    easing: easing,
    duration: 1500,
    delay: 300
});

anime({
    targets: '#nosac-sektora',
    opacity: 1,
    easing: easing,
    duration: 2500,
    delay: 300
});


const home = document.getElementById('Home');
const about = document.getElementById('About');
const team = document.getElementById('Team');
const contact = document.getElementById('Contact');
const nosacSektora = document.getElementById('nosac-sektora');
const trajanjeMenu = 400

const naslovNosac = document.getElementById('naslov-nosac');
const slikaLevo = document.getElementById('slika-levo')

const kontaktAbout = document.getElementById('kontak-about');

kontaktAbout.addEventListener('click', () => {
    anime({
        targets: contact,
        top: 40,
        easing: 'easeInQuad',
        duration: trajanjeMenu,
    });
    anime({
        targets: about,
        top: 160,
        easing: 'easeInQuad',
        duration: trajanjeMenu,
    });
    anime({
        targets: home,
        top: 100,
        easing: 'easeInQuad',
        duration: trajanjeMenu,
    });
    anime({
        targets: team,
        top: 220,
        easing: 'easeInQuad',
        duration: trajanjeMenu,
    });
    anime({
        targets: nosacSektora,
        top: '-162.5%',
        easing: easing,
        duration: 1300,
    });
    contact.classList.add('AktivnoD');
    contact.classList.remove('NeaktivnoD');
    home.classList.add('NeaktivnoD');
    home.classList.remove('AktivnoD');
    about.classList.add('NeaktivnoD');
    about.classList.remove('AktivnoD');
    team.classList.add('NeaktivnoD');
    team.classList.remove('AktivnoD');
})


home.addEventListener('click', () => {
    homeTop = home.offsetTop;
    aboutTop = about.offsetTop;
    teamTop = team.offsetTop;
    contactTop = contact.offsetTop;
    slikaLevo.classList.remove('blur');
    naslovNosac.classList.remove('blur');

    if (home.classList.contains('AktivnoD')) {

    } else if (aboutTop = 40) {
        anime({
            targets: home,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '92.5%',
            easing: easing,
            duration: 1300,
        });
        home.classList.add('AktivnoD');
        home.classList.remove('NeaktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    } else if (teamTop = 40) {
        anime({
            targets: home,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '92.5%',
            easing: easing,
            duration: 1300,
        });
        home.classList.add('AktivnoD');
        home.classList.remove('NeaktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    } else if (contactTop = 40) {
        anime({
            targets: home,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '92.5%',
            easing: easing,
            duration: 1300,
        });
        home.classList.add('AktivnoD');
        home.classList.remove('NeaktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    }

});

about.addEventListener('click', () => {
    homeTop = home.offsetTop;
    aboutTop = about.offsetTop;
    teamTop = team.offsetTop;
    contactTop = contact.offsetTop;
    slikaLevo.classList.add('blur');
    naslovNosac.classList.add('blur');

    if (about.classList.contains('AktivnoD')) {

    } else if (homeTop = 40) {
        anime({
            targets: about,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '7.5%',
            easing: easing,
            duration: 1300,
        });

        about.classList.add('AktivnoD');
        about.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');

    } else if (teamTop = 40) {
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '7.5%',
            easing: easing,
            duration: 1300,
        });
        about.classList.add('AktivnoD');
        about.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    } else if (contactTop = 40) {
        anime({
            targets: about,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '7.5%',
            easing: easing,
            duration: 1300,
        });
        about.classList.add('AktivnoD');
        about.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    }

});

team.addEventListener('click', () => {
    homeTop = home.offsetTop;
    aboutTop = about.offsetTop;
    teamTop = team.offsetTop;
    contactTop = contact.offsetTop;

    slikaLevo.classList.add('blur');
    naslovNosac.classList.add('blur');

    if (team.classList.contains('AktivnoD')) {

    } else if (aboutTop = 40) {
        anime({
            targets: team,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-77.5%',
            easing: easing,
            duration: 1300,
        });
        team.classList.add('AktivnoD');
        team.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    } else if (homeTop = 40) {
        anime({
            targets: team,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-77.5%',
            easing: easing,
            duration: 1300,
        });
        team.classList.add('AktivnoD');
        team.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    } else if (contactTop = 40) {
        anime({
            targets: team,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: contact,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-77.5%',
            easing: easing,
            duration: 1300,
        });
        team.classList.add('AktivnoD');
        team.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        contact.classList.add('NeaktivnoD');
        contact.classList.remove('AktivnoD');
    }

});

contact.addEventListener('click', () => {
    homeTop = home.offsetTop;
    aboutTop = about.offsetTop;
    teamTop = team.offsetTop;
    contactTop = contact.offsetTop;

    slikaLevo.classList.add('blur');
    naslovNosac.classList.add('blur');

    if (contact.classList.contains('AktivnoD')) {

    } else if (aboutTop = 40) {
        anime({
            targets: contact,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-162.5%',
            easing: easing,
            duration: 1300,
        });
        contact.classList.add('AktivnoD');
        contact.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
    } else if (homeTop = 40) {
        anime({
            targets: contact,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-162.5%',
            easing: easing,
            duration: 1300,
        });
        contact.classList.add('AktivnoD');
        contact.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
    } else if (teamTop = 40) {
        anime({
            targets: contact,
            top: 40,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: about,
            top: 160,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: home,
            top: 100,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: team,
            top: 220,
            easing: 'easeInQuad',
            duration: trajanjeMenu,
        });
        anime({
            targets: nosacSektora,
            top: '-162.5%',
            easing: easing,
            duration: 1300,
        });
        contact.classList.add('AktivnoD');
        contact.classList.remove('NeaktivnoD');
        home.classList.add('NeaktivnoD');
        home.classList.remove('AktivnoD');
        about.classList.add('NeaktivnoD');
        about.classList.remove('AktivnoD');
        team.classList.add('NeaktivnoD');
        team.classList.remove('AktivnoD');
    }

});