  function removeDuplicate(){
      let string='jitesh ji choudhary ji';
      let arrayString=string.split('');
      return [...new Set(arrayString)].join('')
  }
console.log(removeDuplicate())