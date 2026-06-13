const CreateAnimatedBackgroundConfig = {
    containerId: 'matrix-container',
    characters: '{}[]()<>/\=+*01$#;',
    colors: [
        '#bf616a',
        '#a3be8c',
        '#88c0d0',
        '#ebcb8b',
        '#b48ead',
    ],
    mobileLetterCount: 20,
};

function createAnimatedBackground(config = CreateAnimatedBackgroundConfig) {
    const container = document.getElementById(config.containerId);

    if (window.innerWidth > 768) {
        setInterval(() => createFallingLetter(container, config), 250);
    } else {
        for (let i = 0; i < config.mobileLetterCount; i++) {
            createStaticLetter(container, config);
        }
    }
}

function createFallingLetter(container: HTMLElement | null, config: typeof CreateAnimatedBackgroundConfig) {
    if (!container) {
        return;
    }

    const span = makeLetterSpan(config);

    const duration = 4 + Math.random() * 8;

    span.style.animationDuration = `${duration}s`;


    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, duration * 1000);
}

function makeLetterSpan(config: typeof CreateAnimatedBackgroundConfig) {
    const span = document.createElement('span');
    const char = config.characters[Math.floor(Math.random() * config.characters.length)];
    const color = config.colors[Math.floor(Math.random() * config.colors.length)];
    const size = 10 + Math.random() * 10;
    const left = Math.random() * 100;

    span.className = 'falling-letter';
    span.style.color = color;
    span.style.fontSize = `${size}px`;
    span.style.left = `${left}vw`;

    span.style.textShadow = `0 0 5px ${color}`;

    span.innerText = char;

    return span;
}

function createStaticLetter(container: HTMLElement | null, config: typeof CreateAnimatedBackgroundConfig) {
    if (!container) {
        return;
    }

    const span = makeLetterSpan(config);

    const top = Math.random() * 90;

    span.style.animation = 'none';
    span.style.top = `${top}vh`;
    span.style.opacity = (0.1 + Math.random() * 0.3).toString();

    container.appendChild(span);
}

export {
    CreateAnimatedBackgroundConfig,
    createAnimatedBackground,
};
