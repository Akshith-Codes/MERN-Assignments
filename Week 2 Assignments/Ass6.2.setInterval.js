//2.OTP Countdown Simulator (Console App)
        
      //Show “OTP Sent Successfully”
      //Start 10-second countdown
      //Allow resend only after countdown ends 
      console.log("OTP Sent Successfully")
   let seconds=10;
   let intervalID= setInterval(()=>
      {
            seconds--; 
            console.log(`OTP can be resent after ${seconds} seconds`)
            if (seconds==0)
            {
                  console.log("Resend OTP")
                  clearInterval(intervalID)
            }                      
      },1000)
       