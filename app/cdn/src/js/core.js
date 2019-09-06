// Accepts any class name
      var rellax = new Rellax('.rellax',{
        //center: true,
        wrapper: '#illustrazione',
        relativeToWrapper: true
        // callback: function(positions) {
        //   // callback every position change
        //   console.log(positions);
        // }
      });


      var counter = document.getElementById('counter');
      var cover = document.getElementById('cover');
      var contatorebattito = document.getElementById('contatori__container--battiti-p');

      setInterval(function(){
        var now = new Date();
        var battiti = Math.floor((( Date.now() - 1544894101000)/1000)/3);
        counter.innerHTML = battiti;
        contatorebattito.innerHTML = battiti;
        if(now.getSeconds()%3!=0){
          cover.classList.add('beat');
        } else {
          cover.classList.remove('beat');
        }
      },1000);