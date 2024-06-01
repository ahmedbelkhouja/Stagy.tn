<template>
  
        <div class="modal">
        <nav class="nav" id="nav">
        <div class="logo-container">
            <img src="../assets/nlogo.png" alt="Logo" class="logo">
        </div>

            <div class="right">
              <button class="close-button" @click="confirm">X</button>
            </div>
        </nav>
    <div class="body-container">
        <div class="part1">
            <div class="rating" id="stars">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <label for="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4" />
                    <label for="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label for="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2" />
                    <label for="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1" />
                    <label for="star1"></label>
                    
                </div>
            <div class="review-container">
                
                
                <div class="coolinput" id="file">
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
    </div>

    </div>
    <div class="part2">
      <div class="coolinput">
          <label for="last-name" class="text">Décrivez votre expérience:</label>
          <textarea class="input" id="review" placeholder="Commentaire" v-model="reviewText" maxlength="500" @input="updateCharacterCount"></textarea>
          <div class="char-counter">{{ characterCount }}/500</div>
        </div>
      </div>
      <button @click="submitForm"> <!-- Change click handler to call submitForm method -->
  <div class="svg-wrapper-1">
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Publier</span>
</button>

</div>
</div>

</template>
<script setup>
import Swal from 'sweetalert2';
import { ref, defineEmits } from 'vue';

// Define emitted event
const emitClose = defineEmits(['close']);

const reviewText = ref('');
const characterCount = ref(0);

const updateCharacterCount = () => {
  characterCount.value = reviewText.value.length;
};

const submitForm = async () => {
  await submitted(); // Wait for SweetAlert
  emitClose('close'); // Emit the 'close' event
};

const submitted = async () => {
  await Swal.fire({
    icon: "success",
    title: "Merci pour votre avis!",
    showConfirmButton: false,
    timer: 1500
  });
};

const confirm = async () => {
  if (characterCount.value !== 0) {
    await Swal.fire({
      title: 'Etes-vous sûr de vouloir abandonner votre avis?',
      text: "Vous ne pourrez pas récupérer votre avis",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#003f66',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, abandonner',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Abandonné!',
          text: 'Votre avis a été abandonné.',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#003f66',
          confirmButtonText: ':(',
        });
          
        
        emitClose('close'); // Emit the 'close' event
      }
    });
  } else {
    emitClose('close'); // Emit the 'close' event directly if there's no review
  }
  
};
</script>
<style scoped>
.modal {
  width: 70vw;
  margin: 0 auto;
}

.rating {
  display: inline-block;
  margin-left: -360px;
}

.rating input {
  display: none;
}

.rating label {
  float: right;
  cursor: pointer;
  color: #ccc;
}

.modal{
  width: 70vw;
  
  margin: 0 auto;
}
.rating {
  display: inline-block;
  margin-left:-360px;
}

.rating input {
  display: none;
}

.rating label {
  float: right;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.rating label:before {
  content: "\2605";
  font-size: 30px;
}

.rating input:checked ~ label,
.rating label:hover,
.rating label:hover ~ label {
  color: #003f66;
  transition: color 0.3s;
}
    .coolinput {
      display: flex;
      flex-direction: column;
      width: fit-content ;
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
        border: 1px solid #003F66;
    }

    .custum-file-upload {
  width: 160px; /* Adjust the width as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px; /* Adjust the gap between elements as needed */
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
  font-size: 13px; /* Adjust the font size as needed */
  font-weight: 400;
  color: #003F66;
  text-align: center; /* Center the text horizontally */
  display: block; /* Ensure the text is displayed as a block element */
  width: 100%; /* Ensure the text takes up the full width of its container */
}


.custum-file-upload input {
  display: none;
}
#review{
    resize: none;
    width:600px;
    height: 110px;
    border: 1px solid #003F66;
    border-radius: 5px;
    padding: 10px;
    
}
.char-counter {
  position: absolute;
  bottom: 5px;
  left: 570px;
  color: #777;
  font-size: 12px;
  color:#003F66;
}
.note{
    width: 15px;
    height: 15px;
}
.review-container {
  display: flex;
  flex-direction: row;
  gap: 20px; /* Reduce the gap between items */
  margin-left: 0; /* Reset the left margin */
}

/* Apply margin to the first item in the container */
.review-container > *:first-child {
  margin-left: 20px; /* Adjust the left margin as needed */
}

.notice{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.body-container {
  margin-left: 20%; /* Adjust the left margin as a percentage of the container width */
  margin-bottom: 10%;
}
button {
  font-family: inherit;
  font-size: 18px;
  background-color:#003F66;
  color: white;
  padding: 0.8em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  margin-left:250px;
  margin-top:10px;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: scale(0.95);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

button span {
  display: block;
  margin-left: 0.4em;
  transition: all 0.3s;
}

button svg {
  width: 18px;
  height: 18px;
  fill: white;
  transition: all 0.3s;
}

button .svg-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 0.5em;
  transition: all 0.3s;
}

button:hover .svg-wrapper {
  background-color: rgba(255, 255, 255, 0.5);
}

button:hover svg {
  transform: rotate(45deg);
}

#title{
    margin-right: y00px;
}
#file{
    margin-left: 220px;
}
#stars{
    margin-left: 30%;
}
#nav{
  margin-bottom:5%;
}
</style>