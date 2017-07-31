var tree = [
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

var flag = false;
var parent = [];

function travel(tree, father) {
  for (var i = 0; i < tree.length; i++) {
    if (tree[i].id == 1024) {
      flag = true;
      break;
    }

    if (!flag && tree[i].child.length)
      travel(tree[i].child, tree[i])
  }

  if (flag) {
    parent.push({
      name: father.name,
      id: father.id
    })
  }
}

travel(tree,{name: 0,id:0})
console.log(parent);
