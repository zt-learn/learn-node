var tree = {
  name: 0,
  id: 0,
  child: [
    {
      name: 1,
      id: 1,
      child: [
        {
          name: 11,
          id: 11,
          child: [
            {
              name: 111,
              id: 111,
              child: []
            }
          ]
        }
      ]
    },
    {
      name: 2,
      id: 2,
      child: [
        {
          name: 22,
          id: 22,
          child: [
            {
              name: 222,
              id: 222,
              child: []
            }
          ]
        }
      ]
    },
    {
      name: 3,
      id: 3,
      child: [
        {
          name: 33,
          id: 33,
          child: [
            {
              name: 333,
              id: 1024,
              child: []
            }
          ]
        }
      ]
    }
  ]
}

var flag = false;
var parent = [];
function travel(tree) {
  var child = tree.child;

  for (var i = 0; i < child.length; i++) {
    if (child[i].id == 1024) {
      flag = true;
      break;
    }
    if ( child[i].child.length)
      travel(child[i])
  }

  if (flag) {
    parent.push({
      name: tree.name,
      id: tree.id
    })
  }

}

travel(tree)
console.log(parent);
