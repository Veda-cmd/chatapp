/* Hash Table */

var hash = (string, max) => {
  return string % max;
};

let HashTable = function() 
{

  let storage = [];
  const storageLimit = 10;
  
  this.print = function() 
  {
    console.log(storage);
  }

  this.add = function(key, value) 
  {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) 
    {
      storage[index] = [
        [key, value]
      ];
    } 
    else 
    {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) 
      {
        if (storage[index][i][0] === key) 
        {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) 
      {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) 
  {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) 
    {
      this.add(key);
      return;
    }
    if (storage[index].length == 1 && storage[index][0][0] == key) 
    {
      delete storage[index];
    } 
    else 
    {
      for (var i = 0; i < storage[index].length; i++) 
      {
        if (storage[index][i][0] === key) 
          delete storage[index][i];
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return (storage[index][i][1]);
        }
      }
    }
  };

};



let ht = new HashTable();
ht.add(11,5);
ht.add(20,7);
ht.add(35,9);
ht.add(34,16);
ht.add(33,18);
ht.add(55,3);
ht.add(72,76);
ht.remove(56);
ht.print();