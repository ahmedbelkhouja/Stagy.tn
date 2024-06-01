<template>
    <div class="body">
      <nav class="nav">
        <div class="logo-container">
          <!-- Logo -->
          <img src="../assets/nlogo.png" alt="Logo" class="logo">
        </div>
  
        <div class="right">
          <button class="home-button" @click="goToLogin ">Log in</button>
          <button class="home-button" @click=" goToSignUp">Sign up</button>
        </div>
      </nav>
      <div class="part1">
        <div class="examples">
          <div class="wrapper">
            <img src="../assets/CVSHealth.webp" alt="img" class="img">
            <img src="../assets/GE-Appliances-Logo-2x.webp" alt="img" class="img bl">
          </div>
          <div class="wrapper">
            <img src="../assets/visa.webp" alt="img" class="img">
            <img src="../assets/prime.png" alt="img" class="img">
          </div>

        </div>
        <div class="def">
          <p class="title">Trouvez votre Future entreprise</p>
          <p class="sous-title"><span>Décrochez un stage dans des startups de pointe, </span><span>des entreprises du Fortune 500 ou tout ce qui se trouve entre les deux. Votre carrière commence ici.</span></p>
        <button class="home-button"  @click=" goToLogin">Allons-y</button>
        </div>

      </div>
    </div>
    <div class="how-it-works">
  <h2 class="titles">Comment ça marche</h2>
  <div class="step">
    <img src="../assets/send-horizontal.png" alt="Icon1" class="steps">
    <p>Postulez pour un stage depuis notre site web et améliorez vos chances d'être accepté(e) par l'entreprise.</p>
  </div>
  <div class="step">
    <img src="../assets/check.png" alt=" Icon1" class="steps">
    <p>Être accepté(e) par l'entreprise.</p>
  </div>
  <div class="step">
    <img src="../assets/star4.png" alt=" Icon1" class="steps">
    <p>Une fois accepté(e), évaluez votre expérience pour aider les autres à choisir leur stage</p>
  </div>
</div>
<div class="3section">
    <h2 class="titles">Nos utilisateurs nous adorent, voyez par vous-même.</h2>
<swiper
  :slidesPerView="3"
  :spaceBetween="30"
  :pagination="{
    clickable: true,
  }"
  :modules="modules"
  class="mySwiper"
>
  <swiper-slide>
    <div class="testimonial">
      <img src="../assets/v23_1829.png" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">Fatima Hassen</p>
        <p class="review">Je recommande vivement Stagy.TN à tous les étudiants</p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="testimonial">
      <img src="../assets/1646165485525.jpeg" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">Bassem Rbiai</p>
        <p class="review">J'ai pu filtrer les entreprises en fonction de mes intérêts et lire les
                            avis des anciens stagiaires, ce qui m'a permis</p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="testimonial">
      <img src="../assets/1687950386671.jpeg" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">Mohamed Magrebi</p>
        <p class="review">En tant que stagiaire chez TechCo, j'ai voulu partager mon expérience
                            pour aider d'autres étudiants à trouver des
                            opportunités similaires.</p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    
    <div class="testimonial">
      <img src="../assets/1709739603506.jpeg" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">David Dell</p>
        <p class="review">Savoir que mes avis peuvent être utiles à d'autres stagiaires me
                            rend vraiment heureux.</p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="testimonial">
      <img src="../assets/Ellipse 33.jpg" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">Laila Ibrahim</p>
        <p class="review">La plateforme a simplifié le processus de recherche de stage pour nos
                            étudiants et a renforcé notre partenariat avec les
                            entreprises.</p>
      </div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <div class="testimonial">
      <img src="../assets/Ellipse 31.jpg" alt="Profile Picture" class="profile-picture">
      <div class="testimonial-content">
        <p class="name">Mahdi Milad</p>
        <p class="review">Je suis tombé sur Stagy.TN par hasard et je ne peux plus m'en passer. La
                            plateforme m'a recommandé des entreprises qui
                            étaient exactement ce que je recherchais.</p>
      </div>
    </div>
  </swiper-slide>
  </swiper>
</div>
<div class="4section">
    <h2 class="titles">Rejoignez notre communauté ! Postulez dès maintenant et découvrez pourquoi nos utilisateurs nous adorent</h2>
    <button class="home-button"  @click=" goToLogin">Allons-y</button>
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
  
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import router from '@/router';
  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

 
  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    methods: {
    // Méthode pour naviguer vers une autre page
    goToLogin() {
      // Utilisez le routeur pour naviguer vers la page souhaitée
     
      router.push('/LogIn');
    },
    goToSignUp() {
      // Utilisez le routeur pour naviguer vers la page souhaitée
     
      router.push('/SignUp');
    }
  }
  };

  
</script>
  <style scoped >
/* Your scoped CSS styles here */

/* Adjustments made to align the grid of photos */
.part1 {
  display: flex;
  gap: 20px; /* Increased the horizontal gap */
  align-items: center;
  margin-top: 20px;
  margin-left: 60px;
}

.home-button {
  background-color: #003f66;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition-duration: .4s;
  width: 100px;
  margin-top: 20px; /* Added margin to the top */
}

.title {
  font-size: 30px;
  font-weight: bold;
  color: #003f66;
  margin-bottom: 10px; /* Added margin to the bottom */
}

.sous-title span {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

.examples {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Increased the gap between photos */
  margin-top: 20px;
  margin-left: 0px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.img {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 18px;
}

.how-it-works {
  margin-top: 50px;
  text-align: center;
}

.how-it-works h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.step {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.step img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.step p {
  font-size: 18px;
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
}

.mySwiper {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px; /* Added margin to the top */
}

.footer {
  background-color: #20202d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px; /* Adjusted padding */
  margin-top: 50px; /* Added margin to the top */
}

.right {
  display: flex;
  align-items: center;
  gap: 50px;
}

.middle {
  margin-left: 120px;
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
.titles{
    font-size: 30px;
    font-weight: bold;
    color: #003f66;
    margin-bottom: 20px;
}
</style>
