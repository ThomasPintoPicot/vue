const CocktailsView = {
   props:['cocktails'],
    template:` <section>
    <p>Il y a {{cocktails.length}} resultats</p>
     <div v-for="item in cocktails">
         <div class="card">
             <aside>
             <div class="card-img" style="height: 200px; width: 200px;">
                 <img v-bind:src="item.strDrinkThumb">
             </div>
             <h3>{{item.strDrink}}</h3>
             <div v-if="item.strAlcoholic === 'Alcoholic' ">
             <sup>Alcool</sup>
             </div>
             <div v-if="item.strAlcoholic !== 'Alcoholic' ">
                <sup>Sans-Alcool</sup>
             </div>
            <p>Type de cocktail : {{ item.strCategory }}</p> 
            <div > 
             <h3>Voici les ingredients principaux : </h3>
             <p v-if="item.strIngredient1 !== null">{{item.strIngredient1}}</p>
             <p v-if="item.strIngredient2 !== null">{{item.strIngredient2}}</p>
             <p v-if="item.strIngredient3 !== null">{{item.strIngredient3}}</p>
             <p v-if="item.strIngredient4 !== null">{{item.strIngredient4}}</p>
             <p v-if="item.strIngredient5 !== null">{{item.strIngredient5}}</p>
             <p v-if="item.strIngredient6 !== null">{{item.strIngredient6}}</p>
             <p v-if="item.strIngredient7 !== null">{{item.strIngredient3}}</p>
             <p v-if="item.strIngredient8 !== null">{{item.strIngredient4}}</p>
             <p v-if="item.strIngredient9 !== null">{{item.strIngredient5}}</p>
             <p v-if="item.strIngredient10 !== null">{{item.strIngredient6}}</p>
            </div>
         </aside>
         </div>
    
     </div>
 </section>`
}

export default CocktailsView;
