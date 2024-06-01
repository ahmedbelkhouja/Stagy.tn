<template>
  <div class="body">
    <nav class="nav">
      <div class="logo-container">
        <!-- Logo -->
        <img src="../assets/nlogo.png" alt="Logo" class="logo">
      </div>
      <div class="middle">
        <!-- Search bar -->
        <input type="text" placeholder="Rechercher d’autres Entreprises" class="search-bar">
      </div>
      <div class="right">
        <!-- Navigation links -->
        <a href="#" class="nav-link">HOME</a>
        <a href="#" class="nav-link" @click="push1">NOTIFICATIONS</a>
        <button class="user-button">
          <img src="../assets/iuser.png" alt="User" class="user-icon">
        </button>
        <button class="user-button"  @click="handleSignOut" v-if="isLoggedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
        </button>
      </div>
    </nav>
    <div class="part1">
      <div class="filtres">
        <p class="title">Trouvez votre stage en quelques clics seulement</p>
        <div class="searchbar">
          <input type="text" placeholder="Mots-clés du titre du poste.." class="search search-job">
          <input type="text" placeholder="Location" class="search search-location">
          <button class="buttonF">Search</button>
        </div>
      </div>
      <div class="cv">
        <p class="title">Score de CV</p>
      
      <div class="progress-bar">
        <progress value="75" min="0" max="100" style="visibility:hidden;height:0;width:0;">75%</progress>
      </div>
    </div>

      </div>
    <div class="part2">
      <p class="title2">Suggestions</p>
      <div class="comps">
      
      <div class="company-card">
    <!-- Logo and name -->
    <div class="logo-name">
      <img src="../assets/biz.png" alt="Company Logo" class="company-logo">
      <h2 class="company-name">DataBiz</h2>
    </div>
    <!-- Number of stars -->
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9734;</span> <!-- Example for 4 out of 5 stars -->
    </div>
    <!-- Program name -->
    <p class="program-name">Stage en science des données 2024 PFE</p>
    <!-- Consult button -->
    <button class="consult-button">Consulter</button>
  </div>
  <div class="company-card">
    <!-- Logo and name -->
    <div class="logo-name">
      <img src="../assets/raise.png" alt="Company Logo" class="company-logo">
      <h2 class="company-name">Raise Guard</h2>
    </div>
    <!-- Number of stars -->
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9734;</span> <!-- Example for 4 out of 5 stars -->
    </div>
    <!-- Program name -->
    <p class="program-name">Stagiaire étudiant - Cybersécurité 2024</p>
    <!-- Consult button -->
    <button class="consult-button" @click="push">Consulter</button>
  </div>
  <div class="company-card">
    <!-- Logo and name -->
    <div class="logo-name">
      <img src="../assets/prime.png" alt="Company Logo" class="company-logo">
      <h2 class="company-name">PRIMATEC</h2>
    </div>
    <!-- Number of stars -->
    <div class="stars">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9734;</span> <!-- Example for 4 out of 5 stars -->
    </div>
    <!-- Program name -->
    <p class="program-name">Programme de stage d'été 2024 - Development Web</p>
    <!-- Consult button -->
    <button class="consult-button">Consulter</button>
  </div>
  </div>
</div>
</div>
<footer class="footer">
    <!-- Left section with logo -->
    <div class="left">
      <img src="../assets/nlogo.png" alt="Logo" class="logo">
    </div>
    
    <!-- Middle section with copyright text -->
    <div class="middle">
      <p>© 2024 All rights reserved</p>
    </div>
    
    <!-- Right section with social media icons -->
    <div class="right">
      <div class="flex" id="icons">
        <button class="Btn" id="btn3">
        <svg  class="svgIcon" xmlns="http://www.w3.org/2000/svg" width="2500" height="1.4em" viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path></svg>
      <span class="s-text" >Facebook</span>
    </button>
    <button class="Btn" id="btn2">
        <svg  class="svgIcon" viewBox="0 0 496 512" height="1.4em" xmlns="http://www.w3.org/2000/svg" width="2500" id="linkedin"><linearGradient id="a" x1="-974.482" x2="-622.378" y1="1306.773" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2489be"></stop><stop offset="1" stop-color="#0575b3"></stop></linearGradient><path fill="url(#a)" d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"></path></svg>
      <span class="s-text" >LinkedIn</span>
    </button>
    <button class="Btn" id="btn1">
      <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" class="svgIcon"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
      <span class="s-text" >Instagram</span>
    </button>

 

</div> 
    </div>
  </footer>
</template>



<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '@/router';
import Swal from 'sweetalert2';


const isLoggedIn = ref(false);
const userEmail = ref('');
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
            userEmail.value = user.email; // Set the user's email
            showAuthenticationToast(); // Show the Toast on successful authentication
        } else {
            isLoggedIn.value = false;
            userEmail.value = ''; // Reset the email if user is not logged in
        }
    });
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/LogIn');
    });
};
const showAuthenticationToast = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: "success",
    title: "Connecté avec succès"
  });
};
const push=()=>{
  router.push('/details');
}
const push1=()=>{
  router.push('/notif');
}
</script>




<style scoped>

.labels{
  display: flex;
  gap:20px;
}
.label{
  display: flex;
  gap:10px;
}
.part1{
  display: flex;
  gap:10px;
}
.filtres {
  background-color: #003F66; /* Background color for the container */
  padding: 20px; /* Add padding */
  border-radius: 10px; 
  width: 1000px; 
  margin-left: 100px;/* Rounded corners */
  margin-top:50px;
}
.search{
  width: 20px;
  height: 20px;
}
.barrs{
  display: flex;
  gap:20px;
}
.searchbar{
  display: flex;;
  gap: 25px; /* Adjust as needed */
}
.search {
  padding: 7px 7px 7px 37px; /* Adjust the left padding to make space for the icon */
  border-radius: 8px;
  border: 1px solid #000000;
  background-image: url("../assets/search.png");
  background-position: 15px; /* Move the image to the right */
  background-size: 15px;
  background-repeat: no-repeat;
  width: 225px;
  height: 25px;

}
/* Set background image for job search */
.search-location {
  background-image: url("../assets/ville.png"); /* Set background image for location search */
}
.title{
  margin-right: 70px;
  color:white;
  font-size: 25px;
  margin-top: 10px;
}
.buttonF{
  background-color: #63ace5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width:100px;
  height: 50px;
  margin-top:-10px;
  margin-left:50px;
}
.cv{
  margin-top:30px;
  padding: 20px; /* Add padding */
  border-radius: 10px; 
  background-color: #33768A;
  margin-left:50px;
}
.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: 
    radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(#003F66 75%, #63ace5  0);    
}

.progress-bar::before {
  content: "75%";
}
.title2{
  color:black;
  font-size: 25px;
  margin-top: 10px;
  margin-top:90px;
  margin-left:100px;
}
.company-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.logo-name {
  display: flex;
  align-items: center;
}

.company-logo {
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

.company-name {
  margin: 0;
  font-size: 20px;
}

.stars {
  margin-right:50px;
  display: flex; /* Ensure stars are in a row */
}

.star {
  color: gold;
  font-size: 24px;

}
.program-name {
  margin-bottom: 10px;
  
}

.consult-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #003F66;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left:150px;
}
.comps{
  display: flex;
  gap: 50px;
  margin-bottom:50px;
  margin-left:60px;
}
.footer {
  background-color: #20202D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px; /* Adjust padding as needed */
}
.right {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  .middle {
    margin-left:120px;
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
      background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  overflow: hidden;
    }
    #btn2 {
      background-color: #0077b5;
    }
    #btn3{
        background-color: #3b5998;
    }
    #icons {
      display: flex;
    
      gap: 20px; /* Adjust the gap between buttons as needed */
      margin-top: 20px; /* Adjust the top margin as needed */
      margin-left: 90px;
    }
</style>