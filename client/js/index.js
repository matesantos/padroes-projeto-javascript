const campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

const tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', evt => {
  evt.preventDefault();

  const tr = document.createElement('tr');
  campos.forEach(field => {
    const td = document.createElement('td');
    td.textContent = field.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();

});
