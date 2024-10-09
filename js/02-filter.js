const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендерим розмітку елементів списку
 * 2. Прослуховуємо зміну фільтра
 * 3. Фільтруємо дані та рендеруємо нові елементи
 */

const refs = {
  input: document.querySelector('#filter'),
  list: document.querySelector('.js-list'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

function onFilterChange(evt) {
  const normlizedQuery = evt.target.value.trim().toLowerCase();
  const filteredItems = tech.filter(({ label }) => label.toLowerCase().includes(normlizedQuery));
  renderList(createListItemMarkup(filteredItems));
}

function createListItemMarkup(items) {
  return items.map(({ label }) => `<li>${label}</li>`).join('');
}

function renderList(markup) {
  refs.list.innerHTML = markup;
}

renderList(createListItemMarkup(tech));

// ==========================================================
// const refs = {
//   list: document.querySelector('.js-list'),
//   input: document.querySelector('#filter'),
// };

// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map(item => `<li>${item.label}</li>`).join('');
// }

// function onFilterChange(evt) {
//   console.log('INPUT');
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter(t =>
//     t.label.toLowerCase().includes(filter),
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }
