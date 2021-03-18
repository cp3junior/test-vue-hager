<template>
  <b-row class="works" id="work">
    <Work v-for="work in works" :key="work.id" :work="work" @handleClick="handleClick" />
    <b-col>
      <a href="#!" id="blog" class="works__all">All our works</a>
    </b-col>
    <b-modal id="work-modal" size="xl" centered hide-header hide-footer content-class="modal-container">
      <div class="my-modal-body">
        <h2>{{ current.title }}</h2>
        <h3>{{ current.description }}</h3>
        <b-row>
          <b-col xl="7" lg="6" md="12" class="my-modal-body__img">
            <img :src="current.img" :alt="`Image ${current.title}`" class="img-fluid" />
          </b-col>
          <b-col xl="5" lg="6" md="12" class="my-modal-body__texts">
            <h4>{{ current.title }}</h4>
            <p v-for="(txt, i) in current.texts" :key="i" class="my-modal-body__p">{{ txt }}</p>
            <div class="my-modal-body__texts__buttons">
              <button @click="$bvModal.hide('work-modal')" class="button red-outline">Lorem</button>
              <button @click="$bvModal.hide('work-modal')" class="button red">Cuncat</button>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </b-row>
</template>

<script>
import Work from "./_Work";
export default {
  name: "Works",
  components: {
    Work
  },
  data() {
    return {
      works: [
        {
          id: 1,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service1.jpg")
        },
        {
          id: 2,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form of a heart to heart talk with Mr. Brown on his prominent local television show. These are all advertising. Businesses cannot get away from the force of advertising. If they want to make their products known in the marketplace they have to use some form of advertisement. Advertising is being more and more known as a reasonable and desirable business force. Let’s say you own a department store. The advertising manager of the store is like the managing editor of a daily newspaper with his group of reporters regularly bringing fresh matter to his desk and the different department heads acts as the reporters.",
            "Take it on a Thursday or Friday, when the big Sunday advertisements are in process of construction, the scene is remarkably lively, and the man at the head of the advertising department has plenty occasions to exercise his ready cleverness and level-headedness."
          ],
          img: require("@/assets/service2.jpg")
        },
        {
          id: 3,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service3.jpg")
        },
        {
          id: 4,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service4.jpg")
        },
        {
          id: 5,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form of a heart to heart talk with Mr. Brown on his prominent local television show. These are all advertising. Businesses cannot get away from the force of advertising. If they want to make their products known in the marketplace they have to use some form of advertisement. Advertising is being more and more known as a reasonable and desirable business force. Let’s say you own a department store. The advertising manager of the store is like the managing editor of a daily newspaper with his group of reporters regularly bringing fresh matter to his desk and the different department heads acts as the reporters.",
            "Take it on a Thursday or Friday, when the big Sunday advertisements are in process of construction, the scene is remarkably lively, and the man at the head of the advertising department has plenty occasions to exercise his ready cleverness and level-headedness."
          ],
          img: require("@/assets/service5.jpg")
        },
        {
          id: 6,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service6.jpg")
        },
        {
          id: 7,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service7.jpg")
        },
        {
          id: 8,
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor si amet",
          texts: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita itaque aut ",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, voluptas enim explicabo inventore dignissimos,cum quibusdam ducimus labore numquam tenetur, expedita"
          ],
          img: require("@/assets/service8.jpg")
        }
      ],
      current: {}
    };
  },
  methods: {
    handleClick(id) {
      const current = this.works.filter(work => work.id == id);
      this.current = current[0];
      this.$bvModal.show("work-modal");
    }
  }
};
</script>

<style lang="scss">
.works {
  &__all {
    font-family: "Montserrat";
    font-size: 16px;
    color: #ea4235;
    text-align: center;
    text-transform: uppercase;
    display: block;
    font-weight: 400;
    margin: 3rem 0;
    transition: all ease 0.3s;

    &:hover {
      color: #404040;
      text-decoration: none;
    }
  }
}
.modal-container {
  border-radius: 0;
  border: none;
}
.my-modal-body {
  padding: 1.5rem;

  h2 {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 32px;
    color: #000000;
    margin: 1rem 0;
  }
  h3 {
    font-family: "Roboto";
    font-size: 22px;
    color: #000000;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }
  h4 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 28px;
    color: #000000;
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
    font-family: "Roboto";
    color: #000000;
    font-weight: 400;
  }
  &__img {
    padding: 0;
    img {
      width: 100%;
    }
  }
  &__texts {
    padding: 0 2rem;
    &__buttons {
      button {
        margin-right: 1rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .my-modal-body {
    padding: 1rem;
    h2 {
      font-size: 26px;
    }
    h3 {
      font-size: 16px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    &__texts {
      padding: 0 1rem;
      &__buttons {
        button {
          margin-right: 0.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .my-modal-body {
    &__img {
      margin-bottom: 2rem;
    }
  }
}
</style>
