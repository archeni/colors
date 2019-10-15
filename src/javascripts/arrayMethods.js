import data from './components/helpers/data/colors';

const color = data.getColors();

const forEachFunc = () => {
  for (let i = 0; i < color.length; i += 1) {
    console.log(color[i].name);
  }

  color.forEach((someColor) => console.log('forEach', someColor.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let i = 0; i < color.length; i += 1) {
    if (color[i].hexValue[0] === 'F') {
      newColors.push((color[i]));
    }
  }

  const filterColors = color.filter((filteredColor) => filteredColor.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const mapFunc = () => {
  const h1Tags = [];
  for (let i = 0; i < color.length; i += 1) {
    h1Tags.push(`<h1>${color[i].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = color.map((mapColor) => `<h1>${mapColor.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let i = 0; i < color.length; i += 1) {
    total += color[i].upVotes;
  }
  console.log('reduce', total);

  const upVoteTotal = color.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const findFunc = () => {
  let colortoFind = {};
  for (let p = 0; p < color.length; p += 1) {
    if (color[p].name === 'green') {
      colortoFind = color[p];
      console.log('find', colortoFind);
    }
  }
};


const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
