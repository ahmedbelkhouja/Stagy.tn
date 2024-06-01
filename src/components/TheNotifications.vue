<template>
    <div class="container">
      <div class="notificationContainer">
        <header>
          <div class="notificationHeader">
            <h1>Notification</h1>
            <span class="num-of-notif">{{ unreadMessagesCount }}</span>
          </div>
          <p class="mark-as-read" @click="markAllAsRead">Marquer comme tout lu</p>
        </header>
        <main>
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="notificationCard"
            :class="{ 'unread': message.unread }"
            @click="toggleReadStatus(index)"
          >
            <img :src="message.photo" class="photo" alt="photo" />
            <div class="description">
              <p><b>{{ message.name }}</b> {{ message.action }} votre commentaire.</p>
              <p class="notif-time">{{ message.time }}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        messages: [
          { name: 'Bassem Rbiai', action: 'a aimé', time: 'A l\'instant', photo: require('../assets/1646165485525.jpeg'), unread: true },
          { name: 'Molka Abdennadher', action: 'a aimé', time: '1min', photo: require('../assets/molka.png'), unread: true },
          { name: 'Ayoub Amiria', action: 'a répondu à', time: '1h', photo: require('../assets/ayoub.png'), unread: true },
          { name: 'Ahmed Belkouja', action: 'a répondu à', time: '2 jour(s)', photo: require('../assets/ahmed.png'), unread: false },
          { name: 'Wael Guezi', action: 'a aimé', time: '1 mois', photo: require('../assets/wael.png'), unread: false }
        ]
      };
    },
    computed: {
      unreadMessagesCount() {
        return this.messages.reduce((count, message) => count + (message.unread ? 1 : 0), 0);
      }
    },
    methods: {
      toggleReadStatus(index) {
        this.messages[index].unread = !this.messages[index].unread;
      },
      markAllAsRead() {
        this.messages.forEach(message => {
          message.unread = false;
        });
      }
    }
  };
  </script>
  

<style scoped> *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.container {
    display: flex;
    justify-content: center;
    background-color: #007EA7;
    width: 100%;
    height: 100vh;
}

.photo {
    border-radius: 50%;
    position: relative;
    height: 70px;
    width: 70px;
}

.notificationContainer {
    background-color: #fff;
    width: 700px;
    margin: 2rem;
    padding: 1rem 1rem;
    border-radius: 1rem;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.notificationHeader {
    display: flex;
    align-items: center;
}

#num-of-notif {
    background-color: blue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    width: 30px;
    height: 30px;
    border-radius: 0.5rem;
    margin-left: 10px;
}

#mark-as-read {
    color: gray;
    cursor: pointer;
    transition: 0.6s ease;
}

#mark-as-read:hover {
    color: black;
}

main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.notificationCard {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
}

.notificationCard img {
    width: 50px;
}

.notificationCard .description {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.unread {
    background-color: rgb(176, 191, 216);
}
.num-of-notif {
  background-color: #003f66;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 10px;
  font-size: 14px;
}
</style>