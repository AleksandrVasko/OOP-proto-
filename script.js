const form = document.querySelector('.form');
const headerInput = document.querySelector('.header-input');
const body = document.querySelector('body');

const DomElement = function (selector, height, widt, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = widt;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createEl = function () {
        if (this.selector[0] == '.') {
            let newDiv = document.createElement('div');
            newDiv.classList.add(`${this.selector}`.replace(/[^a-zа-яё]/gi, ''));
            body.append(newDiv);
            newDiv.style.cssText = ` 
            height:${this.height};
            width:${this.width};
            background:${this.bg};
            font-size:${this.fontSize};
            position: absolute;`;
            newDiv.textContent = `проверка`;
        } else if (this.selector[0] == '#') {
            let newDiv = document.createElement('div');
            newDiv.id = `${this.selector.replace(/\s/g, '').replace(/[^a-zа-яё]/gi, '')}`;
            body.append(newDiv);
            newDiv.style.cssText = ` 
            height:${this.height};
            width:${this.width};
            background:${this.bg};
            font-size:${this.fontSize};
            position: absolute;`;
            newDiv.textContent = `проверка`;
        }
    };
    this.createEl();
    this.location = document.querySelector(`${this.selector}`);
};
const mover = function (currentElement) {
    let currentRight = 0;
    let currentLeft = 0;
    let currentDown = 0;
    let currentUp = 0;
    currentElement.style.right = 0;
    currentElement.style.left = 0;
    currentElement.style.bottom = 0;
    currentElement.style.top = 0;
    document.onkeydown = function (e) {
        currentElement.style.position = 'absolut';
        if (e.key == 'ArrowRight') {
            currentRight = currentRight + 10;
            currentElement.style.left = `${currentRight}px`;
        }
        if (e.key == 'ArrowLeft') {
            currentRight = currentRight - 10;
            currentElement.style.left = `${currentRight}px`;
        }
        if (e.key == 'ArrowUp') {
            currentUp = currentUp - 10;
            currentElement.style.top = `${currentUp}px`;
        }
        if (e.key == 'ArrowDown') {
            currentUp = currentUp + 10;
            currentElement.style.top = `${currentUp}px`;
        }



    };

};

const newDom1 = new DomElement('.block', '200px', '200px', 'red', '12px');

mover(newDom1.location);
