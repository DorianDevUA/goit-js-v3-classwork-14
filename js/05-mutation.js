import products from './products.js';
// Створити функцію яка приймає 1 параметр - масив продуктів, і повертає мутований масив.
// Потрібно перебрати масив, якщо він має об'єкти в яких дублюються id,
// то qty цих елементів потрібно сплюсувати, а ті обє'кти, id яких співпав - видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно).

// function mergeProducts(products) {
//   for (let i = 0; i < products.length; i += 1) {
//     for (let j = i + 1; j < products.length; j += 1) {
//       if (products[i].id === products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }

// ======================================================================
// function mergeProducts(products) {
//   // Створюємо об'єкт для зберігання сумарних значень кількості за id
//   const productMap = {};

//   // Проходимо по всіх елементах масиву
//   for (const product of products) {
//     if (productMap[product.id]) {
//       productMap[product.id].qty += product.qty;
//     } else {
//       productMap[product.id] = product;
//     }
//   }

//   // Очищаємо початковий масив
//   products.length = 0;
//   // Додаємо тільки унікальні продукти з об'єднаною кількістю.
//   products.push(...Object.values(productMap));
// }

// ======================================================================
function mergeProducts(products) {
  // Створюємо об'єкт для зберігання сумарних значень кількості за id
  const productMap = {};

  // Проходимо по всіх елементах масиву
  products.forEach(product => {
    const { id, qty } = product;

    if (!productMap[id]) {
      // Зберігаємо продукт у мапі, якщо його ще немає
      productMap[id] = product;
    } else {
      // Якщо id вже існує в мапі, додаємо кількість
      productMap[id].qty += qty;
    }
  });

  // Очищаємо початковий масив
  products.length = 0;
  // Додаємо тільки унікальні продукти з об'єднаною кількістю.
  products.push(...Object.values(productMap));
}

mergeProducts(products);
console.log(products);
