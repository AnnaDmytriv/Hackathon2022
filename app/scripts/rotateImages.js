export const rotateElements = () => {
  const gallery = document.getElementById('gallery');
  const products = [...gallery.childNodes];
    
  setTimeout(() => {
    products.forEach((product) => {
      gallery.removeChild(product);
    });
    shuffle(products);
    console.log('something!');
    products.forEach((product) => {
      gallery.appendChild(product);
    });
  }, 1000);
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
