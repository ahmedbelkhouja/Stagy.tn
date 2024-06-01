<template>

    <div id="content">
            <img class="vector" src="../assets/Vector.png" alt="kys" />
            <img class="logo" src="../assets/STAGY.png" alt="logo" />
        </div>
    <div class="register">
        <div class="coolinput">
            <p class="text">Réinitialiser le mot de passe</p>   
            <div class="password">
  <input maxlength="1" value="" class="input" name="text" type="text" />
  <input maxlength="1" value="" class="input" name="text" type="text" />
  <input maxlength="1" value="" class="input" name="text" type="text" />
  <input maxlength="1" value="" class="input" name="text" type="text" />
  <input maxlength="1" value="" class="input" name="text" type="text" />
  <input maxlength="1" value="" class="input" name="text" type="text" />
</div>

        <p id="forgot">Le code expirera au bout de 5 minutes,<br> cliquez ici pour le renvoyer</p>
        <button id="sign">Vérifier le code</button>
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
    color:#01050a;
}
.password {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-left:50px;
}
.password input {
  width: 30px;
  height: 40px;
  text-align: center;  /* Center the text horizontally */
  background-color: transparent;
  border: none;
  border-bottom: solid 2px #003F66;
  font-size: 20px;
  color: black;
  outline: none;
  
  
}


    </style> 