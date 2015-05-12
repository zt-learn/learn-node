/**
 * Created by leo on 2015/5/12.
 */
var pet = {
    words: '....',
    speak: function () {
        console.log(this.words);
        console.log(this);
    }
};
pet.speak();