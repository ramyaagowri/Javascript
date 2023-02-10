let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  map.set(3, 'ramyaa');
  map.forEach(print);
  function print(value,key)
  {
    console.log(key+" value : "+value);
  }
  //conversion of map to obj and obj to map
  let obj =Object.fromEntries(map.entries());
  let myMap =new Map(map.entries(obj));
  console.log(myMap);