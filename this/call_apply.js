/**
 * Created by leo on 2015/5/12.
 */

var pet = {
    words: '...',
    speak: function (say) {
        console.log(say + '' + this.words);
    }
};

var dog = {
    words: 'wang'
};

pet.speak.call(dog, 'speak');