


    if (!String.prototype.includes) {
      String.prototype.includes = function(search, start) {
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