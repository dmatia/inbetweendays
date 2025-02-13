const stickySections = [...document.querySelectorAll('.sticky')];

let poems = [
    ``,

    `I walk on tiptoes down your hallway.
    <br>I wash your dishes after the meal you cook.
    <br>I hear the wind revolting in your garden, entering through your windows, claiming it all.
    <br>I try to pay attention to all the details around you. I want to recall these pictures in my mind:
    <br>your expression lines, your tilted frames,
    <br>all the photographs of your trips and friends from other lives,
    <br>the floor you exclusively chose to have,
    <br>the line of sauces you have on your wall, just as your father did when you were a child.
    <br>
    <br>I keep the distance needed not to get too involved in all this.
    <br>I keep the silence loud so I don’t hear.
    <br>I don’t want to get overwhelmed by your song.
    <br>I find myself looking for a door.
    <br>
    <br>I am a visitor here.
    <br>I am not permanent.`,

    `its been five days since i left home
    <br>looks like the fantasy too far has gone
    <br>im lost in the corner of this street
    <br>in a city that is not mine
    <br>another word, another sign
    <br>another kiss without holding hands
    <br>sores and stitches in the sheet we get entwined
    <br>the distance between us, the cold dry gap
    <br>if i show you that i do
    <br>would you show me that you care?
    <br>im tired of things ending up always the same way`,

    `if you see me coming
    <br>if you see me around
    <br>don't take a sit
    <br>don't start to talk
    <br>i don't wanna know
    <br>i don't wanna hear
    <br>if you ever miss me
    <br>or if you ever cry
    <br>it's all alright
    <br>i swear, it's just fine`,

    `the wheel shortens the distance between us
    <br>say it again, and hear yourself repeat your words
    <br>'cause hearing and understanding don't seem enough
    <br>
    <br>when the day comes, i want more
    <br>at departure, i want more
    <br>and when everything falls silent
    <br>i'll come looking for you`,

    `I must go anyway.
    <br>I look at you while you sleep,
    <br>Staring through your window as you prepare the meal.
    <br>I dance on tiptoes in your living room.
    <br>I searched through all your drawers, but couldn’t find a place to fit in.
    <br>I’ve read all of your diaries,
    <br>But my name’s not on a single page.
    <br>Don’t get me wrong, dear,
    <br>Most of the time, I’m doing well.
    <br>It’s just that sometimes, when I lie in your bed,
    <br>I wish you’d ask me something,
    <br>To show me that you care.
    <br>How can I love what I know I’m going to lose?
    <br>How can you say you love something you don’t even know?`,

    `It's New Year's Eve,
    <br>And you have a glass for everyone,
    <br>But none for me.
    <br>You toast with him,
    <br>While I remain invisible,
    <br>And my heart breaks into a million pieces.
    <br>Then I realize:
    <br>I’m yours,
    <br>But you’re not mine.
    <br>You call me a precious thing,
    <br>But you just like the way it feels
    <br>To be loved like I do,
    <br>With all my body and mind,
    <br>From morning till night.
    <br>I’ve got to face this: you’re not the one.
    <br>It doesn’t matter what I do,
    <br>It doesn’t matter what I say.
    <br>I spent the last day in front of the mirror,
    <br>Searching for the smallest detail to be my best.
    <br>But you, you didn’t even care.`,

    `I come from a haunted house
    <br>I know how to fight ghosts
    <br>And i know where there's no god
    <br>Behind my back there's a line of them asking me out
    <br>I'm not decided yet whether you dont see or you just dont care`,

    `Didnt you know I was for real when i let you in?
    <br>I know when you dont understand and i know when you pretend not to
    <br>Dont you see how much i owe you?
    <br>Its been to long that ive been waiting by the door
    <br>All these thing you say, do they mean something at all?
    <br>Don't you see i take my shit damn very well?
    <br>I sit and stare
    <br>And you're always looking away
    <br>And when you say that thing
    <br>Do you know the spell you're casting on me?`,


    `You look at me and you see the truth no one else sees not even myself
    <br>I drink the wine and i take the pill
    <br>Eyes looking like the heaven ive seen while falling downhills 
    <br>You, the caretaker
    <br>You, the wise man
    <br>You, the always on time
    <br>I have no doubts you'll take me anywhere 
    <br>Just to see my smile
    <br>But i have a secret garden
    <br>And no one can gets near by
    <br>There i keep all my secrets
    <br>And I've forgot where the key i decided to hide
    <br>I just dont want to waste your honor 
    <br>I haven't found yet mine`,

    `My summer thing dying young,
    <br>Can’t face killing myself to the core.
    <br>Storming my eyes, salt on fresh wounds.
    <br>If I will lose, how can I love?
    <br>'I want to stay' I thought, while running through the side door.
    <br>I will regret this sooner than enough.`,

    `will i ever get my things right?
    <br> will i ever know whats going on at the time?
    <br> will i ever get to the other side?`,

    `ill sip the wine
    <br>i'll leave my town
    <br>i'll find the strength
    <br>and i'll go away
    <br>i'll go anywhere
    <br>will see the sand
    <br>will touch the sea
    <br>talk to the birds
    <br>and your name will be known 
    <br>by all of the trees
    <br>will see the mountains
    <br>will chase the sunrise
    <br>as soon as leave the midnight
    <br>will cheat the clock
    <br>will smooth the smoke
    <br>i'll carry my broken heart
    <br>around the world
    <br>'till i come home
    <br>just to find out
    <br>that you were never waiting for me outside`,

    `I will survive the night,
    <br>The party’s about to start,
    <br>The themes repeating themselves until the sun comes up.
    <br>Someone will crash,
    <br>Someone will laugh,
    <br>Someone will cry,
    <br>Some will be dancing, some will be fighting,
    <br>And the corner of the quiet,
    <br>Hidden in strange smoke,
    <br>The bathroom full of bodies,
    <br>Flushing their youth down the toilet,
    <br>Just to pretend someone’s using nature’s call.
    <br>Despite the white thin rocks on the table,
    <br>I’m here, and I’m part of it too.
    <br>I know how to get myself a good time,
    <br>I will not remember you tonight.
    <br>I can pass this test,
    <br>I will survive the night,
    <br>Even though you’re not by my side.`,

    `they look at me like i'm going to war
    <br> they look at me like i'm going to a war i have lost beforehand
    <br> whispers on my ears
    <br> telling me i'm doing the wrong thing
    <br> future laments of how i will regret
    <br> concerning thoughts of how my heart wilk break
    <br> but if it's all true
    <br> how come i get this feeling so strong
    <br> i can't seem to understand
    <br> how anybody hasn't feeling this yet
    <br> i want to know
    <br> i want to stay
    <br> it doesn't matter what price i'd have to pay`,

    `butterflies inside, 
    <br>no longer just fluttering, they've started to whisper to my heart
    <br>from above everything seems just so small
    <br>defiant and dangerous seems it all
    <br>i hold my breath
    <br>while walking on the tightrope
    <br>night falls and i think about everything
    <br>they sun rises and i still can't get any sleep
    <br>
    <br>youre always playing with fire in my head`,

    `while you say and do, i wait in the car
    <br>i carry your bags, walk by your side, try to keep up with your rhythm
    <br>i see how you talk to others
    <br>and how you look at them
    <br>but never glance my way
    <br>i disappear from time to time
    <br>i lose my voice
    <br>cant find my trace
    <br>distant from the world that waits
    <br>i can only get there following your steps`,

    `I wrote you a song
<br>That rhymes your name
<br>With every word I’ve learned.
<br>It plays at night,
<br>Through the morning too, as well as through the rest of the day.
<br>It talks about birds and feathers,
<br>Softness and depth.
<br>It tries to explain the warmth of your skin,
<br>But fails completely when it comes to it.
<br>It plays over and over in my head,
<br>When you’re asleep
<br>And I’m right beside you, wide awake.
<br>It screams about your lips
<br>And whispers about other things.
<br>It gets so loud sometimes
<br>I can’t even hear
<br>When it asks me why
<br>I’m so attached to your hips,
<br>Why I crave waking up entwined in your sheets.
<br>It asks all kinds of questions all the time,
<br>But right now, I don’t want to wonder
<br>If I’m holding too tight.`






















];

// Cuando agregues el poema al HTML, usa `innerHTML` en lugar de `textContent`
let para = document.createElement('p');
para.innerHTML = poems[0]; // Esto respetará los saltos de línea
document.body.appendChild(para);


// Agregar los poemas a cada sección .scroll_section
poems.forEach(poem => {
    stickySections.forEach(section => {
        let para = document.createElement('p');
        para.innerHTML = poem;
        section.querySelector('.scroll_section').appendChild(para);
    });
});

// Evento de scroll optimizado con requestAnimationFrame
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            stickySections.forEach(transform);
            ticking = false;
        });
        ticking = true;
    }
});

function transform(section) {
    const offSetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    
    let progress = (window.scrollY - offSetTop) / section.clientHeight;
    progress = Math.max(0, Math.min(progress, 1)); // Limitar entre 0 y 1

    let translateX = progress * (scrollSection.scrollWidth - section.clientWidth); // Movimiento horizontal
    scrollSection.style.transform = `translate3d(${-translateX}px, 0, 0)`;
}
