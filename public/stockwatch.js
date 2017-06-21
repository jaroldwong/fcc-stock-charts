// Make connection
const socket = io.connect('http://localhost:3000');

const symbol = document.getElementById('symbol');
const addBtn = document.getElementById('add');
const stocks = document.getElementById('stocks');

addBtn.addEventListener('click', function() {
  socket.emit('stock', {
    symbol: symbol.value
  });
  symbol.value = "";
});

socket.on('addStock', function(data){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(data.symbol));
  stocks.appendChild(li);
});