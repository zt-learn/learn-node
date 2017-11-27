var arr = [];

function f1(c) {
    var n = 9

    for (var i = 0; i < n; i++) {
      arr.push(f2(i))
    }

    function f2(i) {
        console.log(this, i);
    }
}

f1.call()

arr.forEach(el => {
  el.
})
