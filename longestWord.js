let string = "java  javascript nodejs"

function longestWord(string){
    var longest=" "
    string.split(' ').forEach(ele => {
        if(ele.length >longest.length){
            longest=ele;
        }
    });
    return longest
 }
 console.log(longestWord(string))
