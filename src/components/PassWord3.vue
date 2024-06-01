<template>

    
    <div id="content">
            <img class="vector" src="../assets/Vector.png" alt="kys" />
            <img class="logo" src="../assets/STAGY.png" alt="logo" />
        </div>
    <div class="register">
        <div class="coolinput">
            <p class="text">Réinitialiser le mot de passe</p>   
        <label for="input"  class="text">Entrez un nouveau mot de passe:</label>
        <input type="password" id="password"  name="input" class="input">
        <label for="input"  class="text">Entrez à nouveau le nouveau mot de passe:</label>
        <input type="password" id="password"  name="input" class="input">
        <button id="sign">Réinitialiser le mot de passe</button>
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
  white-space: nowrap; /* Prevent text from breaking into multiple lines */
}

    .coolinput input[type=text].input:focus {
      outline: none;
    }

    
    #email,
    #password,
    #num{
        height: 44px; /* Adjust height as needed */
        font-size: 16px; /* Adjust font size as needed */
        padding-left: 20px; /* Adjust padding as needed */
        width: 400px; /* Adjust width as needed */
    }

    .text{
    color: #003F66;
    word-break: break-all;
    font-size: 10;
    margin-right:-1px;
}
#forgot {
    width: 500px;
    margin-left: 0;
    word-break: break-all;
    text-align: left; /* Align the text to the left */
    color:#003F66;
}



    </style> 