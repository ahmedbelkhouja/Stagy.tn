<template>
  <div :class="{ 'scroll-lock': isOpen }">
  <div class="root">
  <div class="flex-container">
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
        <a href="#" class="nav-link" @click="push2">HOME</a>
        <a href="#" class="nav-link" @click="push1">NOTIFICATIONS</a>
        <button class="user-button">
          <img src="../assets/iuser.png" alt="User" class="user-icon">
        </button>
      </div>
    </nav>
    <div class="body">
      
      <div class="info">
        <div class="company-container">
          <!-- Company Photo -->
          <img src="../assets/company.png" alt="Company" class="company">
          <!-- Company Name and Rating -->
          <div class="title">
            <p class="company-name">Raise Guards</p>
            <div class="rating">
              <img src="../assets/estar.png" alt="Star" class="estar">
              <p class="company-rating1">4.5 étoiles | 450 commentaires</p> 
            </div>
          </div> 
        </div>
        <!-- Credentials -->
        <div class="infos">
        <div class="credentials" id="cred1">
          <div class="rating">
              <img src="../assets/field.png" alt="Star" class="estar">
              <p class="company-rating">CyberSecurity </p> 
            </div>
            <div class="rating">
              <img src="../assets/ville.png" alt="Star" class="estar">
              <p class="company-rating">Ariana,Tunis</p> 
            </div>
        </div>
        <div class="credentials">
          <div class="rating">
              <img src="../assets/location.png" alt="Star" class="estar">
              <p class="company-rating">0,7 km de Centre hospitalier international Amilcar </p> 
            </div>
            <div class="rating">
              <img src="../assets/time.png" alt="Star" class="estar">
              <p class="company-rating"> Ouvert de 09 :00 à 18 :00 </p> 
            </div>
        </div>
      </div>
      <button class="button" @click="submitted">
          Postuler
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
          clip-rule="evenodd"
          ></path>
          </svg>
    </button>

    </div>
    <div class="crating">
      <div class="note">
        <p class="gncnote">Note générale et commentaires</p>
        <p class="gnote">4</p>
        <div class="star">
          <img src="../assets/star.png" alt="Star" class="nstar">
          <img src="../assets/star.png" alt="Star" class="nstar">
          <img src="../assets/star.png" alt="Star" class="nstar">
          <img src="../assets/star.png" alt="Star" class="nstar">
          <img src="../assets/wstar.png" alt="Star" class="nstar">
        </div>
        <p class="gncnote">Basè sur 200 Avis Evaluez Maintenant</p>
      </div>
  
        <div class="bars">
          
          <div class="progress">
            <p class="bname">Apprentissage</p>
            <img src = "../assets/bar1.png" alt="progress" class="bar"> <p class="bname">70</p>
          </div>
          <div class="progress">
            <p class="bname">Encardrement </p>
            <img src = "../assets/bar1.png" alt="progress" class="bar"> <p class="bname">70</p>
          </div>
        </div>

        
      </div>
      <div class="comments">
          <div class="comment2">
            <div class="comment">
              <div class="personne">
                <img src="../assets/user1.png" alt="user" class="user">
                <div class="infop">
                <p class="name">Kais Said</p>
                <p class="job">Etudiant dans FSS</p>
                </div>
                </div>
              <div class="content">
                <p class="com">Mon stage chez Raise Guard a été une expérience incroyable. J’ai eu l’opportunité de travailler sur des projets concrets et d’apprendre énormément. L’équipe était accueillante et professionnelle. Je recommande vivement cette entreprise !e</p>
                </div>
              
            </div>
            <div class="comment">
              <div class="personne">
                <img src="../assets/user1.png" alt="user" class="user">
                <div class="infop">
                <p class="name">Sami Hammami</p>
                <p class="job">Etudiant de ISI Ariana</p>
                </div>
                </div>
              <div class="content">
                <p class="com">Mon stage chez Raise Guard m’a permis d’acquérir des compétences pratiques et de développer mon réseau professionnel. L’équipe m’a fait confiance dès le début, et j’ai pu contribuer activement aux projets en cours. Je suis reconnaissant pour cette opportunité.</p>
                </div>
              </div>
            </div>
          
          <div class="comment2">
            <div class="comment">
              <div class="personne">
                <img src="../assets/user1.png" alt="user" class="user">
                <div class="infop">
                <p class="name">Ahmed Gharbi</p>
                <p class="job">Ing CyberSecurity</p>
                </div>
              </div>
              <div class="content">
                <p class="com">Raise Guard est une entreprise où l’on se sent valorisé. J’ai été encadré par des experts du domaine, qui ont pris le temps de m’expliquer les tenants et aboutissants de mon travail. L’ambiance de travail est positive, et j’ai hâte de collaborer à nouveau avec eux.</p>
                </div>
              
            </div>
            <div class="comment">
              <div class="personne">
                <img src="../assets/user1.png" alt="user" class="user">
                <div class="infop">
                <p class="name">Nadia Mohamed</p>
                <p class="job">Maitre-Assistnate dans ISIMS</p>
              </div>
             </div>
              <div class="content">
                <p class="com">Raise Guard est une entreprise dynamique et innovante. J’ai été impressionné par la qualité de l’encadrement et la diversité des missions qui m’ont été confiées. Mon stage a été une expérience enrichissante, et je suis fier d’avoir fait partie de cette équipe.</p>
                </div>
              </div>
            </div>
            
            <button class="button" @click="isOpen = true">
            Donner Avis
            <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clip-rule="evenodd"
            ></path>
            </svg>
        </button>
        <Teleport to="body">
          <div v-if="isOpen" class="popup-overlay">
      <div class="popup-content" @click.stop>
   
      <ReviewEntre
      @close="isOpen=false" />

    
    </div>
        </div>
        </Teleport>
        </div>
      </div>

</div>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import ReviewEntre from "../components/reviewEntre.vue"; // Make sure the path to your component is correct
import router from '@/router';
const isOpen = ref(false); // Define a reactive variable to control the pop-up visibility

const submitted = async () => {
  await Swal.fire({
    icon: "success",
    title: "Votre candidature a été envoyée avec succès!",
    showConfirmButton: true,
    confirmButtonText:':D',
    confirmButtonColor:'#003f66',
    showCancelButton: true,
    cancelButtonText:'Annuler',
    cancelButtonColor:'#d33',
 
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "Candidature annulée",
        icon: "info",
        showCancelButton: false,
        confirmButtonText: "OK",
        confirmButtonColor: "#003f66" // Replace "#FF0000" with your desired custom color
      });
    }
  });
}
const push1=()=>{
  router.push('/notif');
}
const push2=()=>{
  router.push('/feed');
}

</script>



<style>
.root {
  position: relative;
}

.flex-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.nav {
  flex: 0 0 auto;
  background-color: #ffffff;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
}

  .root{
    position: relative;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .nav {
    flex: 0 0 auto;
    background-color: #ffffff;
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 176.19px; /* Adjust as needed */
    height: 100px; /* Maintain aspect ratio */
  }
  
  .search-bar {
    padding: 5px;
    border-radius: 8px;
    border: 1px solid #000000;
    background-image: url("../assets/search.png");
    background-position: 415px; /* Move the image to the right */
    background-size: 15px;
    background-repeat: no-repeat;
    width: 425px;
    height: 25px;
  }
  
  .right {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  
  .nav-link {
    margin-right: 10px; /* Adjust spacing between links */
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  
  .user-button {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    background-color: #003F66;
    color: white;
    cursor: pointer;
    width: 76px;
    height: 53px;
  }
  
  .user-icon {
    width: 20px; /* Adjust as needed */
    height: 20px; /* Maintain aspect ratio */
  }
  
  .company-container {
    display: flex;
    justify-content: left;
    margin-top: 20px;
    margin-left: 30px; /* Adjust as needed */
    gap:50px;
  }
  
  .company {
    width: 200px; /* Adjust as needed */
    height: auto; /* Allow height to adjust according to width */
  }
  .company-name {
    font-size: 24px; /* Adjust as needed */
    color:#003F66
  }
    .title{
        display: flex;
        gap:600px;
    }
.company-rating{
    font-size: 14px; /* Adjust as needed */
    color: black;
    margin-top:35px;
   
}
.company-rating1{
    font-size: 14px; /* Adjust as needed */
    color: black;
    margin-top:35px;
    font-weight: bold;
}
.estar{
  width:20px;
  height:20px;
  margin-top:30px;
  margin-right:0px;
}

  .info {
     
    padding: 20px;
  }
.rating{
    display: flex;
    gap:10px;

}  


.flex{
    display: flex;
    gap:10px;
}
.credentials {
  display: flex;
  gap: 20px;
  margin-top: 20px; /* Adjust margin as needed */
}

.credentials p {
  font-size: 14px;
  color: black;
  
}
.infos{
  
    margin-top: -250px; /* Adjust margin as needed */
    margin-left:290px;
}
#cred1{
    gap:240px;
}
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: #003f66;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  margin-top:50px;
  margin-left:590px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

.crating{
    display: flex;
    gap:10px;
    margin-top:10px;
    margin-left:50px;
}
.note{
  display: flex;
  flex-direction: column;

}
.gncnote{
  margin-top: 25px; 
}
.gnote{
  color: #003F66;
  font-style: normal;
  font-weight: 200;
  font-size: 40px;
  margin-top:20px;
}

.star{
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 50px;
  
}

.nstar{
  width: 20px;
  height: 20px;
}


.bar{
  width:600px;
  height:10px;
  margin-top:20px;
  margin-left:50px;
}

.progress{
  display: flex;
  gap:10px;
}
.bars{
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top:70px;
}
.comments{
  margin-top:50px;
}
.comment2{
  display: flex;
 gap:10px;
}
.name{
font-weight: bold;
}
.user{
  width: 40px;
  height: 40px;
  margin-top:10px;
}
.job{
  font-style: normal;
  font-size:12px;
  color:gray;
  margin-top:-10px;

}
.personne {
  display: flex;
  gap: 10px;
}

.comment {
  margin-left: 50px;
  text-align: left; /* Add this line */
}

.content {
  font-size: 12px;
  color: black;
  margin-top: -10px; /* Adjust margin as needed */
  width: 650px; /* Adjust the width as needed */
  word-wrap: break-word; /* Wrap long words to next line */
}
.personne{
  display: flex;
  gap:10px;
}
.comment{
  margin-left:50px;
}
.avis{
  margin-top:10px;
  margin-left:50px;
  font-size: 16px;;
  border: none;
  border-radius: 5px;
  background-color: #003F66;
  color: white;
  height:56px;
  width: 420px;

}
#sign:hover{
        background-color: #001a33;
    }
    .popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
   /* Allow scrolling within the pop-up if necessary */
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 90%; /* Limit the width of the pop-up content */
  max-height: 90%; /* Limit the height of the pop-up content */
  /* Allow scrolling within the pop-up content if it exceeds the maximum dimensions */
}
.scroll-lock {
  overflow: hidden; /* Prevent scrolling */
}

/* Hide vertical scrollbar */
.scroll-lock::-webkit-scrollbar {
  display: none;
}

</style>
