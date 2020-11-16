const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
          return this._courses.appetizers;
        },
        set appetizers(newApp) {
          this._courses.appetizers = newApp;
        },
        get mains() {
          return this._courses.mains;
        },
        set mains(newMain) {
          this._courses.mains = newMain;
        },
        get desserts() {
          return this._courses.desserts;
        },
        set desserts(newDessert) {
          this._courses.desserts = newDessert;
        },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);

      return dishes[index];
    },

    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.price + main.price + dessert.price;

      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
    }
  };
menu.addDishToCourse('appetizers', 'Bread Sticks', 5.50);
    menu.addDishToCourse('appetizers', 'Calamari', 12.50);
    menu.addDishToCourse('appetizers', 'Charcuterie', 9.00);
    menu.addDishToCourse('mains', 'Lamb', 22.50);
    menu.addDishToCourse('mains', 'Steak', 17.25);
    menu.addDishToCourse('mains', 'Lobster', 28.75);
    menu.addDishToCourse('desserts', 'Chocolate Cake', 8.00);
    menu.addDishToCourse('desserts', 'Apple Pie', 7.25);
    menu.addDishToCourse('desserts', 'Flan', 5.75);
  let meal = menu.generateRandomMeal();
  console.log(meal);  

