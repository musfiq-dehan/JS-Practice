function HTMLElement() {
    this.click = function () {
        console.log("Clicked");
    };
}

HTMLElement.prototype.focus = function () {
    console.log("Focused");
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItems = function (item) {
        this.items.push(item);
    };

    this.removeItems = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = item => {
        return `
    <select>
        ${this.items.map(item => `<option>${item}</option>`).join("")}
    </select>
    `};
}


HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HTMLImageElement(src = "") {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}" alt="rendered image">`
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;
