


    if (!String.prototype.includes1) {
      String.prototype.includes1 = function(search, start) {
        console.log(search);  
        console.log(start);
          console.log(this.length);
          console.log(this.indexOf(search, start));
        if (typeof start !== 'number') {
          start = 0;
        }
        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      };
    }

    var a = "abcdw11";
    var b = "11";
    
    console.log(a.includes1(b));

    function Compare(data1, data2){
        if(typeof data1 != "string" || typeof data2 != "string"){
            return false;
        }
        
        if(data2.length > data1.length){
            var temp = "";
            temp = data1;
            data1 = data2;
            data2 = temp;
        }

        for(var i=0;i<data1.length;i++){
            if(data1[i] == data2[0]){
                if((data1.length-i) >= data2.length){
                    var count = 0;
                    for(var j=0;j<data2.length;j++){
                        if(data1[i+j] == data2[j]){ 
                            count++;
                        }
                    }

                    if(count == data2.length){
                        return true;
                    }
                }
            }
        }
        
        if(data2 == ""){
            return true;
        }

        return false;
    }

    console.log(Compare("",""));
