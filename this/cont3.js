/**
 * Created by leo on 2015/5/12.
 */

function pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}

var cat = new pet('miao');
cat.speak();