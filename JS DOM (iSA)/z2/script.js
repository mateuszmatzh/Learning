const box = document.getElementById('box');

box.addEventListener('click', createFlags);

function createFlags (){
    const flags = ['🇵🇹', '🇪🇸', '🇮🇸', '🇵🇱', '🇫🇮', '🇹🇷', '🇦🇪', '🇧🇦', '🇧🇪', '🇧🇷', '🇩🇪', '🇫🇷', '🇲🇾', '🇺🇸',];
    const index = Math.floor(Math.random() * flags.length);
    const flag = flags[index]

    const flagElement = document.createElement('div');
    flagElement.textContent = flag;
    flagElement.classList.add('flag')
    flagElement.style.top = `${Math.random() * 100 - 50}vh`;
    flagElement.style.left = `${Math.random() * 100 - 50}vw`;    
    console.log('i', index);
    console.log(flags);
    box.appendChild(flagElement);
}
createFlags();