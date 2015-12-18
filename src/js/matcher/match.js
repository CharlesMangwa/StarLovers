/*
 * Stylize elements
 *
 * @params {object} styles
 * @return {this}
 */
export function css(styles) {
    this.map(element => {
        for(let key in styles) {
            element.style[key] = styles[key];
        }
    });
    return this;
}

export function matcher(){
	
}