const data = [
  {
    id: 1,
    name: 'Michael John',
    birthday: '20.10.2021',
    img: './assets/man-1.png',
  },
  {
    id: 2,
    name: 'Niho Kerr',
    birthday: '06.04.2021',
    img: './assets/girl-1.png',
  },
  {
    id: 3,
    name: 'William Bloom',
    birthday: '12.02.2021',
    img: './assets/man-2.png',
  },
  {
    id: 4,
    name: 'Derek Green',
    birthday: '20.05.2021',
    img: './assets/man-3.png',
  },
  {
    id: 5,
    name: 'Lewis Milton',
    birthday: '15.11.2021',
    img: './assets/man-4.png',
  },
];

function getData() {
  const localStorage = window.localStorage;
  let localData = localStorage.getItem('data');
  if (!localData) {
    localStorage.setItem('data', JSON.stringify(data));
    localData = localStorage.getItem('data');
  }
  return JSON.parse(localData);
}

export default getData;
