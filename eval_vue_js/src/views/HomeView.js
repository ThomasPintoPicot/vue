import CocktailsView from "./CocktailsView.js";

const HomeView = {
  data() {
    return {
      cocktails: [],
      list: [],
      search: "",
      selected: "",
      text: "",
      searchText: ""
    }
  },
  mounted() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
      (response) => {
        response.json().then((data) => {
          this.list = data.drinks;
        }).catch(error => {
          if (list.length < 1) {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
              (response) => {
                response.json().then((data) => {
                  this.list = data.drinks;
                })

                  ;
              }

            );
          }

        })

          ;
      }

    );
  },
  methods: {
    findListError() {
      console.log(true)
      fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
        (response) => {
          response.json().then((data) => {
            this.list = data.drinks;
          }).catch(error => {
            console.log(error)
          })

            ;
        }

      );
    },

    searchCocktail(search) {
      this.text = ""
      this.searchText = ""
      this.cocktails = []
      console.log(true)
      console.log(this.cocktails)
      if (search.length !== 0) {
        let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search
        console.log(url)
        fetch(url).then(
          (response) => {
            response.json().then((data) => {
              if (data.drinks == null) {
                this.searchText = "Aucun resultat"
              }
              else {
                this.cocktails = data.drinks;
              }
            });
          }
        );
      }
      else {
        console.log(true)
        this.text = "Merci de renseigner une lettre"
      }

    },
    randomCocktailtest() {
      this.cocktails = []
      console.log(true)
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
        (response) => {
          response.json().then((data) => {
            this.cocktails = data.drinks;
            console.log(this.cocktails)
          });
        }
      );
    },
    searchCocktailByIngre(selected) {
      this.cocktailsByIngre = []
      this.cocktailsWithDetails = []
      this.cocktails = []
      this.text = ""
      this.searchText = ""
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + selected
      console.log(selected.length)
      if (selected.length === 0) {
        console.log(false)
        url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      }
      else {
        console.log(true)
        url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + selected
      }
      fetch(url).then(
        (response) => {
          response.json().then((data) => {
            this.cocktailsByIngre = data.drinks;
          }
          ).then(() => {
            this.cocktails = []
            this.cocktailsByIngre.forEach(element => {
              fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + element.idDrink.toString()).then(
                (response) => {
                  response.json().then((data) => {
                    this.cocktails.push(...data.drinks)
                  })
                }
              )
            });

          });
        }
      );
    },

  },
  components: {
    CocktailsView
  },
  template: `
  <div>
  <h1 class="title">Vue sur des Cocktails</h1>
  <div class="div-home">
  <samp>
  <section> 
  <aside>  
  <h2>Tu veux un peu d'inspiration? Le boutton magique du cocktail aleatoire </h2>
  <div>
      <button @click="randomCocktailtest()">Cocktail Aleatoire</button>
  </div>
   </aside> 
  </section>
  
  <div>
  <section>
  <aside> 
      <h2>Tu sais ce que tu veux ? Recherche le cocktail que tu souhaites</h2>
      <div v-if="text.length > 0" >
      <sup>{{this.text}}</sup>
    </div>
    <div v-if="searchText.length > 0" >
      <sup>{{this.searchText}}</sup>
    </div>
      <input v-model="search" placeholder="edit me" required/>
          <button @click="searchCocktail(search)">Rechercher</button>
        
          </aside> 
          </section>
          <section> 
          <aside> 
          <h2>Recherche par ingrédient</h2>
          <select v-model="selected">
              <option v-for="(item, key) in list" :value="item.strIngredient1">
                {{item.strIngredient1}}
              </option>
            </select>
            <button @click="searchCocktailByIngre(selected)">Rechercher</button>
            </aside>
            </section>
    </samp>
</div>
          <div v-if="cocktails.length > 0">
           <CocktailsView :cocktails="cocktails"></CocktailsView>
          </div> 
 
  
</div>

</div> `,
};

export default HomeView;
