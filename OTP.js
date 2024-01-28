function generateOTP(){
    let otp = " ";
    let digits = "0123456789";
  for(i=0;i<4;i++){
        otp += digits [Math.floor(Math.random()*10)];
  }
    document.getElementById("otpdisplay").innerText=`OTP is ${otp}`;
}
