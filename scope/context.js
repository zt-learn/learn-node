/**
 * Created by leo on 2015/5/12.
 */
//var pet = {
//    words: '....',
//    speak: function () {
//        console.log(this.words);
//        console.log(this === pet);
//    }
//};
//
//pet.speak();


//function pet(words) {
//    this.words = words;
//    console.log(this.words);
//    console.log(this===global);
//}
//
//pet('...');

function pet(words) {
    this.words = words;
    this.speak = function () {
        console.log(this.words);
        console.log(this);
    }
}

var cat = new pet('miao');
cat.speak();