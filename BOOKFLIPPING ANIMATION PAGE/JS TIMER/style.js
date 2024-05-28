      let days = document.getElementById("days");
      let hours = document.getElementById("hours");
      let minutes = document.getElementById("minutes");
      let seconds = document.getElementById("seconds");

      let dd = document.getElementById("dd");
      let hh = document.getElementById("hh");
      let mm = document.getElementById("mm");
      let ss = document.getElementById("ss");

        let endDate = '01/01/2025 00:00:00';

        let x = setInterval(function () {
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;

        // time calculation for days, hours, minutes, seconds
        let d = Math.floor(distance / ( 1000 * 60 * 60 *24 ));
        let h = Math.floor((distance % (1000 * 60 * 60 * 20)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / (1000));

        // output the result in element with id
        days.innerHTML = d + "<br><span>Days</span>";
        hours.innerHTML = h + "<br><span>Hours</span>";
        minutes.innerHTML = m + "<br><span>Minutes</span>";
        seconds.innerHTML = s + "<br><span>Seconds</span>";

        // Animatestroke
        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        // 365 days in a year
        hh.style.strokeDashoffset = 440 - (440 * h) / 20;
        // 24hrs in a day
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        // 60minute make one hour
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        // 60seconds make one minute

        // if count down is over, write happy new year text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("time").style.display = "none";
          document.querySelector(".newYear").style.display = "block";
        }
      });


