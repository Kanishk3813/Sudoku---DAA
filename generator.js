function updateSolution(){
    var i,j,sj,si;
    //console.log(input);
    for (i = 1; i <=9; i++){
      for (j = 1; j <=9; j++){
        si = i.toString();
        sj = j.toString();
        document.getElementById(si+sj).value = input[i][j];
      }
    }
  }
  
  function cekSquare(m,n){
    var i;
    //console.log("cekSq");
    for (i = 1; i <=9;i++){
      //console.log(m,i,input[m][i]);
      if ((n != i) && (input[m][i] != 0)){
        if (input[m][i] == input[m][n]){
          //console.log("sqFalse");
          return false;
        }
      }
    }
    //console.log("sqTrue");
    return true;
  }
  
  function cekRow(m,n) {
    var i,j,idxi,idxj, cek;
    var cekfactm = m/3;
    var cekfactn = n/3;
    var factorm = Math.round(m / 3);
    var factorn = Math.round(n/3);
    if (factorm < cekfactm) {
      factorm = factorm +1;
    }
    if (factorn < cekfactn){
      factorn = factorn +1;
    }
    //console.log("cekRow");
    idxi = m;
    for (i = 1; i <= 3; i++){
      idxj = n;
      for (j = 1; j <= 3; j++){
        //console.log(idxi,idxj,input[idxi][idxj]);
        if (((idxi != m) || (idxj != n)) && (input[idxi][idxj] != 0)){
          if (input[idxi][idxj] == input[m][n]){
            //console.log("rowFalse");
            return false;
          }
        }
        idxj = (idxj + 1);
        if (idxj > (factorn*3)){
          idxj = (idxj % (factorn*3)) + (factorn-1)*3;
        }
      }
      idxi = (idxi + 1);
      if (idxi > (factorm*3)){
        idxi = (idxi % (factorm*3)) + (factorm-1)*3;
      }
    }
    //console.log("rowTrue");
    return true;
  }
  
  function cekColumn(m,n){
    var i,j,idxi,idxj;
    idxi = m;
    //console.log("cekCol");
    for (i = 1; i <= 3; i++){
      idxj = n;
      for (j = 1; j <= 3; j++){
        //console.log(idxi,idxj,input[idxi][idxj]);
        if (((idxi != m) || (idxj != n)) && (input[idxi][idxj] != 0)){
          if (input[idxi][idxj] == input[m][n]){
            //console.log("colFalse");
            return false;
          }
        }
        idxj = (idxj + 3);
        if (idxj > 9){
          idxj = idxj % 9;
        }
      }
      idxi = (idxi + 3);
      if (idxi > 9){
        idxi = idxi % 9;
      }
    }
    //console.log("colTrue");
    return true;
  }
  
  function sudoku(m,n){
    var i;
    //console.log("cekini" + m,n);
    if (input[m][n] == 0){
      for (i = 1; i <= 9; i++){
        //console.log(m,n,i);
        input[m][n] = i.toString();
        if (cekRow(m,n) && cekColumn(m,n) && cekSquare(m,n)){
          if ((n == 9) && (m == 9)){
            updateSolution();
            return true;
          } else if (n == 9){
            if (sudoku(m+1,1)){
              return true;
            } else if (defaul[m+1][1] == 0){
              input[m+1][1] = 0;
            }
          } else {
            if (sudoku(m,n+1)){
              return true;
            } else if (defaul[m][n+1] == 0){
              input[m][n+1] = 0;
            }
          }
        }
      }
    }else{
      if ((n == 9) && (m == 9)){
        updateSolution();
        return true;
      } else if (n == 9){
        if (sudoku(m+1,1)){
          return true;
        } else if (defaul[m+1][1] == 0){
          input[m+1][1] = 0;
        }
      } else {
        if (sudoku(m,n+1)){
          return true;
        } else if (defaul[m][n+1] == 0){
          input[m][n+1] = 0;
        }
      }
    }
  }
  
  function getInput(){
    var i,j,sj,si;
    console.log(defaul);
    for (i = 1; i <=9;i++){
      for (j=1;j <= 9; j++){
        input[i][j] = defaul[i][j];
      }
    }
    console.log(input);
    sudoku(1,1);
  }
  
  function updateHTML(){
    var i,j,si,sj;
    for (i=1; i <=9;i++){
      si = i.toString();
      for (j=1; j <=9;j++){
        sj = j.toString();
        if (defaul[i][j] != 0){
          document.getElementById(si+sj).value = defaul[i][j];
        }else{
          document.getElementById(si+sj).value = null;
        }
      }
    }
  }
  
  function Easy(){
    var x = Math.round(Math.random() * 3);
    console.log(x, easy[x]);
    for (i = 1; i <=9;i++){
      for (j=1;j <= 9; j++){
        defaul[i][j] = easy[x][i][j];
      }
    }
    //defaul = easy[x];
    console.log(defaul);
    updateHTML();
  }
  
  function Medium(){
    var x = Math.round(Math.random() * 3);
    for (i = 1; i <=9;i++){
      for (j=1;j <= 9; j++){
        defaul[i][j] = med[x][i][j];
      }
    }
    //defaul = med[x];
    updateHTML();
  }
  
  function Hard(){
    var x = Math.round(Math.random() * 3);
    for (i = 1; i <=9;i++){
      for (j=1;j <= 9; j++){
        defaul[i][j] = hard[x][i][j];
      }
    }
    //defaul = hard[x];
    updateHTML();
  }
  var input= [[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0]];
  
  var defaul= [[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,9]];
  
  var easy= [
              [[0,0,0,0,0,0,0,0,0,0],
              [0,7,0,0,9,0,4,0,0,3],
              [0,0,1,0,0,5,0,9,0,4],
              [0,5,4,0,8,3,0,6,0,0],
              [0,8,2,0,0,0,0,0,7,5],
              [0,0,4,5,8,0,2,1,0,0],
              [0,0,0,0,1,0,7,2,0,0],
              [0,2,9,6,5,1,0,0,0,7],
              [0,0,7,0,0,0,0,0,6,1],
              [0,0,0,0,7,6,3,0,2,0]],
  
              [[0,0,0,0,0,0,0,0,0,0],
              [0,1,0,0,0,0,0,0,0,6],
              [0,3,0,0,1,0,0,9,7,4],
              [0,0,7,6,9,0,2,0,0,5],
              [0,0,0,8,2,5,0,3,0,0],
              [0,0,0,2,0,0,0,8,0,0],
              [0,0,0,7,0,9,8,1,0,0],
              [0,6,0,0,5,0,3,9,1,0],
              [0,4,3,1,0,0,8,0,0,7],
              [0,7,0,0,0,0,0,0,0,3]],
  
              [[0,0,0,0,0,0,0,0,0,0],
              [0,0,7,0,0,0,6,0,8,2],
              [0,0,0,0,0,2,3,1,0,0],
              [0,0,6,0,0,8,0,0,0,4],
              [0,0,9,3,8,0,0,0,0,6],
              [0,2,8,0,7,0,9,0,3,4],
              [0,4,0,0,0,0,5,8,1,0],
              [0,4,0,0,0,1,0,0,6,0],
              [0,0,0,5,8,4,0,0,0,0],
              [0,9,2,0,6,0,0,0,4,0]],
  
              [[0,0,0,0,0,0,0,0,0,0],
              [0,0,7,0,0,0,0,0,0,5],
              [0,8,6,0,0,0,0,9,0,1],
              [0,5,0,3,0,6,8,4,0,7],
              [0,0,3,0,0,0,0,0,0,7],
              [0,2,0,0,1,0,9,0,0,6],
              [0,7,0,0,0,0,0,0,5,0],
              [0,7,0,2,1,9,0,6,0,3],
              [0,6,0,3,0,0,0,0,9,4],
              [0,8,0,0,0,0,0,0,1,0]]
            ];
  
  var med= [
              [[0,0,0,0,0,0,0,0,0,0],
              [0,6,0,0,0,0,3,0,0,0],
              [0,0,9,8,0,0,0,0,0,1],
              [0,0,0,0,0,4,9,8,2,7],
              [0,0,0,0,0,6,0,0,0,0],
              [0,2,0,3,0,7,0,0,0,9],
              [0,0,0,0,2,3,0,7,0,3],
              [0,4,0,0,0,3,0,9,0,2],
              [0,8,0,0,9,0,0,0,5,6],
              [0,0,0,0,0,8,5,0,7,0]],
  
              [[0,0,0,0,0,0,0,0,0,0],
              [0,0,9,0,1,0,5,0,0,0],
              [0,8,0,0,3,0,0,2,0,6],
              [0,0,5,0,0,6,2,8,0,0],
              [0,0,0,0,4,7,0,0,0,0],
              [0,1,0,2,0,0,0,0,6,4],
              [0,4,9,0,1,0,0,0,8,0],
              [0,8,0,0,2,0,4,7,0,0],
              [0,0,0,7,9,0,0,0,8,0],
              [0,0,0,1,0,0,0,2,0,0]],
  
              [[0,0,0,0,0,0,0,0,0,0],
              [0,0,8,0,9,5,0,7,0,3],
              [0,5,3,0,0,0,7,0,4,0],
              [0,0,0,0,0,0,3,0,0,0],
              [0,0,1,5,0,7,0,6,0,0],
              [0,0,0,0,6,0,8,0,0,0],
              [0,0,0,6,0,4,0,5,9,0],
              [0,0,0,0,3,0,0,0,0,0],
              [0,0,2,0,1,0,0,0,8,3],
              [0,8,0,7,0,5,9,0,6,0]]
           ];
  
  var hard= [
               [[0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,7,0,8,0,0,0],
               [0,3,4,0,5,0,0,0,0,0],
               [0,0,1,0,0,0,0,9,0,0],
               [0,0,0,0,6,0,0,0,1,0],
               [0,8,0,0,0,0,0,0,0,0],
               [0,7,0,0,0,0,2,0,0,0],
               [0,0,0,0,2,0,0,0,0,0],
               [0,0,9,0,0,1,0,0,0,0],
               [0,0,8,0,0,0,0,3,0,0]],
  
               [[0,0,0,0,0,0,0,0,0,0],
               [0,0,4,0,0,0,2,0,0,5],
               [0,0,0,8,0,6,0,3,0,0],
               [0,0,0,1,0,0,7,0,4,0],
               [0,2,0,1,0,0,0,9,0,0],
               [0,0,0,7,0,0,0,2,0,0],
               [0,0,0,8,0,0,0,4,0,5],
               [0,0,1,0,6,0,0,5,0,0],
               [0,0,0,2,0,1,0,7,0,0],
               [0,8,0,0,3,0,0,0,9,0]],
  
               [[0,0,0,0,0,0,0,0,0,0],
               [0,2,0,4,0,0,0,1,0,7],
               [0,1,9,6,0,0,0,0,0,0],
               [0,0,0,3,0,2,8,0,0,6],
               [0,0,7,0,8,3,1,0,0,0],
               [0,9,0,0,2,5,0,0,0,0],
               [0,0,0,1,0,0,0,0,0,0],
               [0,0,0,0,4,0,5,0,0,0],
               [0,0,0,0,3,7,0,4,2,0],
               [0,0,3,0,0,9,2,0,0,0]]
             ];
  

             function goToIndex() {
                window.location.href = "index.html";
            }