<template>

    
    <div id="content">
            <img class="vector" src="../assets/Vector.png" alt="kys" />
            <img class="logo" src="../assets/STAGY.png" alt="logo" />
            <p class="already">Vous avez déjà un compte? <a href="src\components\LogIn.vue">Log in</a></p>
            <p id="skip">Skip</p>
        </div>
    <div class="register">
        
        <div class="coolinput">
        
            
        <div class="flex">
            
        <div class="input-wrapper">
          <label for="first-name" class="text" id="label">Cv:</label>
          <label for="file" class="custum-file-upload">
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Cliquez pour télécharger votre CV</span>
   </div>
   <input id="file" type="file">
</label>
            </div>
        
            <div class="input-wrapper">
            <label for="last-name" class="text">Attestation de stage:</label>
            <label for="file" class="custum-file-upload">
<div class="icon">
<svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path> </g></svg>
</div>
<div class="text">
   <span>Cliquez pour télécharger votre attestation de stage</span>
   </div>
   <input id="file" type="file">
</label>
        </div>
        </div>
        

        <div class="input-wrapper">
            <label for="domaine" class="text">Domaine:</label>
            <select id="domaine" name="domaine" class="input">
                <option value="" selected> </option>
                <option value="IT">IT</option>
                <option value="Data Science">Data Science</option>
                <option value="AI">AI</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Devops">Devops</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Data engineering">Data engineering</option>
                <option value="Web Development">Web Development</option>
                <option value="Embedded Systems">Embedded Systems</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Front End Development">Front End Development</option>
                <option value="Back End Development">Back End Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
            </select>
        </div>
        <div class="input-wrapper">
            <label for="birth-date" class="text">LinkedIn URL:</label>
            
            <div class="input-with-logo">
        <input type="text" id="url" placeholder="">
          
</div>

        </div>
    </div>
    <button id="sign">Sign Up</button>
    <p id="continue">Ou continuez avec</p>
    <div class="flex" id="icons">
    
        <button class="Btn" id="btn1">
          <svg class="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          <span class="s-text" >Github</span>
        </button>
        <button class="Btn" id="btn2">
            <svg  class="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg" width="2500" id="linkedin"><linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2489be"></stop><stop offset="1" stop-color="#0575b3"></stop></linearGradient><path fill="url(#a)" d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path></svg>
          <span class="s-text" >LinkedIn</span>
        </button>
        <button class="Btn" id="btn3">
            <svg  class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="2500" height="1.4em" viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path></svg>
          <span class="s-text" >Facebook</span>
        </button>
        <button class="Btn" id="btn4">
          <svg class="svgIcon" xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
          <span class="s-text" >Google</span>
        </button>
    </div>   
    </div>
            
            
            
    </template>
        
    <script>
    //script
    </script>
    <style>
    #content {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    #content .vector {
        width: 400px;
        height: 400px;
    }
    #content .logo {
        position: absolute;
        top: 410px;
        left: 50%; 
        transform: translateX(-50%);
        width: 300px; 
        height: auto; 
    }
    #content .already {
        position: absolute;
        top: 510px; /* Adjust the top position to place it under the logo */
        left: 50%; 
        transform: translateX(-50%);
        font-size: 13px;
        color: #003F66;
    }
    
    .register {
        position: absolute;
        top: 200px; /* Adjust the top position as needed */
        right: 400px;
        width: 200px;
        margin-bottom:20px;
    }
    
    .register input,
.register select {
    border: 1px solid #003F66;
    width: 100%;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    border-radius: 4px; /* Add border-radius for rounded corners */
}
    #sign {
        width: 100%;
        height: 40px;
        background-color: #003F66;
        color: white;
        border: none;
        width: 404px;
        margin-right: 45px;
    }
    
    #sign:hover {
        background-color: #001a33;
    }
    .coolinput {
      display: flex;
      flex-direction: column;
      width: fit-content !important;
      position: relative;
      max-width: 240px;
    }
    
    .coolinput label.text {
      font-size: 0.75rem;
      color: #003F66;
      font-weight: 700;
      position: relative;
      top: 0.5rem;
      margin: 0 0 0 7px;
      padding: 0 3px;
      background: #ffffff;
      width: fit-content;
      
    }
    .coolinput input[type=text].input:focus {
      outline: none;
      
      
    }
    .coolinput select {
      outline: none;
      background-color: #ffffff;
        border: 1px solid #003F66;
        width: 200px;
        height: 44px;
    }
    #url{
      background-image: url("C:\Users\belkh\OneDrive\Bureau\stagy.tn\src\assets\linkedin.png");
      background-position: right; /* Move the image to the right */
      padding-left: 30px;
      background-size: 40px;
      background-repeat: no-repeat;
      width:350px;
      }
    
    .flex {
      display: flex;
      width: 200%;
      gap: 50px; /* Adjust as needed */
    }
    .input-wrapper {
      display: flex;
      flex-direction: column;
    }
    
    #email,
    #password,
    #num{
        height: 44px; /* Adjust height as needed */
        font-size: 16px; /* Adjust font size as needed */
        padding-left: 20px; /* Adjust padding as needed */
        width: 400px; /* Adjust width as needed */
    }
    .checkbox-container {
      display: inline-block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
    }
    
    .custom-checkbox {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 4px;
      transition: background-color 0.3s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
    
    .custom-checkbox:checked ~ .checkmark {
      background-color: #003F66;
      box-shadow: 0 3px 7px rgba(33, 150, 243, 0.3);
    }
    
    .custom-checkbox:checked ~ .checkmark:after {
      display: block;
    }
    
    @keyframes checkAnim {
      0% {
        height: 0;
      }
    
      100% {
        height: 10px;
      }
    }
    
    .custom-checkbox:checked ~ .checkmark:after {
      animation: checkAnim 0.2s forwards;
    }
    .checkbox-container p {
      white-space: nowrap;
    }
    .checkbox-container {
      display: inline-block;
      position: relative;
      padding-left: 35px; /* Adjust the padding as needed */
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
    }
    
    .checkmark {
      position: absolute;
      top: 50%; /* Adjust the top position to vertically center the checkmark */
      left: 0;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 4px;
      transition: background-color 0.3s;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    .Btn {
      border: none;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-duration: .4s;
      cursor: pointer;
      position: relative;
      background-color: rgb(31, 31, 31);
      overflow: hidden;
    }
    
    .svgIcon {
      transition-duration: .3s;
    }
    
    .svgIcon path {
      fill: white;
    }
    
    .s-text {
      position: absolute;
      color: rgb(255, 255, 255);
      width: 120px;
      font-weight: 600;
      opacity: 0;
      transition-duration: .4s;
    }
    
    .Btn:hover {
      width: 110px;
      transition-duration: .4s;
      border-radius: 30px;
    }
    
    .Btn:hover .s-text {
      opacity: 1;
      transition-duration: .4s;
    }
    
    .Btn:hover .svgIcon {
      opacity: 0;
      transition-duration: .3s;
    }
    #btn1 {
      background-color: #333;
    }
    #btn2 {
      background-color: #0077b5;
    }
    #btn3{
        background-color: #3b5998;
    }
    #btn4{
        background-color: #db4437;
    }
    #icons {
      display: flex;
    
      gap: 20px; /* Adjust the gap between buttons as needed */
      margin-top: 20px; /* Adjust the top margin as needed */
      margin-left: 90px;
    }
    #continue{
        width: 200px;
        margin-left: 90px;
    }
    #skip {
    position: absolute;
    top: -20px; /* Adjust the top position */
    left: 1400px; /* Adjust the right position */
    font-family: 'Nunito';
    font-style: normal;
    line-height: 33px;
    display: flex;
    align-items: flex-end;
    text-decoration-line: underline;
    color: #192A68;
}
.custum-file-upload {
  width: 150px; /* Adjust the width as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the gap between elements as needed */
  cursor: pointer;
  border: 1.5px solid #003F66;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 4px;
   /* Adjust the shadow as needed */
}

.custum-file-upload .icon svg {
  height: 40px; /* Adjust the height of the icon as needed */
  fill: #003F66;
}

.custum-file-upload .text span {
  font-size: 12px; /* Adjust the font size as needed */
  font-weight: 400;
  color: #003F66;
}

.custum-file-upload input {
  display: none;
}


</style>
 