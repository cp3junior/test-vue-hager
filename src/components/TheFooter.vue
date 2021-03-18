<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col xl="5" lg="4" md="12" class="footer__copyright">
          <p>Copyright &copy; Tous droits réservés 2018</p>
        </b-col>
        <b-col xl="7" lg="8" md="12" class="footer__links">
          <ul>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  font-family: "Montserrat";
  background: #ea4235;
  color: white;
  font-size: 14px;
  font-weight: 300;

  &__copyright {
    p {
      margin: 0;
      padding: 13px;
      padding-left: 0;
    }
  }

  &__links {
    justify-content: flex-end;
    display: flex;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: inline-block;
        padding: 13px 5px;
        a {
          color: white;
        }
      }
    }
  }

  .container {
    .col {
      padding: 0;
    }
  }
}

/* Responsive */
@media (max-width: 992px) {
  .footer {
    &__copyright {
      p {
        text-align: center;
      }
    }
    &__links {
      justify-content: center;
      ul {
        text-align: center;
      }
    }
  }
}
</style>
