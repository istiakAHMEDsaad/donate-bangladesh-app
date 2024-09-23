// ! Donation button content selector
document.getElementById('donate-btn').addEventListener('click', function () {
  document.getElementById('donate-btn').classList.add('bg-[#B4F461]');
  document.getElementById('donate-btn').classList.remove('bg-white', 'border');

  document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
  document.getElementById('history-btn').classList.add('bg-white', 'border');

  document.getElementById('donate-section').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
});

document.getElementById('history-btn').addEventListener('click', function () {
  document.getElementById('donate-btn').classList.remove('bg-[#B4F461]');
  document.getElementById('donate-btn').classList.add('bg-white', 'border');

  document.getElementById('history-btn').classList.add('bg-[#B4F461]');
  document.getElementById('history-btn').classList.remove('bg-white', 'border');

  document.getElementById('donate-section').classList.add('hidden');
  document.getElementById('history-section').classList.remove('hidden');
});

// History
// noakhali
document
  .getElementById('noakhali-donate-button')
  .addEventListener('click', function () {
    const historyDiv = document.createElement('div');
    historyDiv.classList.add(
      'border',
      'rounded-xl',
      'flex,',
      'flex-col',
      'md:gap-y-4',
      'gap-y-2',
      'md:mb-4',
      'mb-2',
      'md:p-7',
      'p-4'
    );

    const balanceOne = document.getElementById('noakhali-input').value;
    const balanceOneNumbers = parseFloat(balanceOne);
    const historyHead = document.createElement('h2');
    historyHead.innerText = `${balanceOneNumbers} Taka is Donated for Flood Relief in Noakhali, Bangladesh`;
    historyHead.className = 'text-xl font-bold text-[#111] mb-2';

    const historyParagraph = document.createElement('p');
    const currentDate = new Date().toString();

    historyParagraph.innerText = `${currentDate}`;
    historyParagraph.className = 'text-base font-light text-neutral-900';

    historyDiv.appendChild(historyHead);
    historyDiv.appendChild(historyParagraph);

    document.getElementById('history-section').appendChild(historyDiv);
  });

// feni
document
  .getElementById('feni-donate-button')
  .addEventListener('click', function () {
    const historyDiv = document.createElement('div');
    historyDiv.classList.add(
      'border',
      'rounded-xl',
      'flex,',
      'flex-col',
      'md:gap-y-4',
      'gap-y-2',
      'md:mb-4',
      'mb-2',
      'md:p-7',
      'p-4'
    );

    const balanceOne = document.getElementById('feni-input').value;
    const balanceOneNumbers = parseFloat(balanceOne);
    const historyHead = document.createElement('h2');
    historyHead.innerText = `${balanceOneNumbers} Taka is Donated for Flood Relief in Feni, Bangladesh`;
    historyHead.className = 'text-xl font-bold text-[#111] mb-2';

    const historyParagraph = document.createElement('p');
    const currentDate = new Date().toString();

    historyParagraph.innerText = `${currentDate}`;
    historyParagraph.className = 'text-base font-light text-neutral-900';

    historyDiv.appendChild(historyHead);
    historyDiv.appendChild(historyParagraph);

    document.getElementById('history-section').appendChild(historyDiv);
  });

// quota movement
document
  .getElementById('quota-donate-button')
  .addEventListener('click', function () {
    const historyDiv = document.createElement('div');
    historyDiv.classList.add(
      'border',
      'rounded-xl',
      'flex,',
      'flex-col',
      'md:gap-y-4',
      'gap-y-2',
      'md:mb-4',
      'mb-2',
      'md:p-7',
      'p-4'
    );

    const balanceOne = document.getElementById('quota-input').value;
    const balanceOneNumbers = parseFloat(balanceOne);
    const historyHead = document.createElement('h2');
    historyHead.innerText = `${balanceOneNumbers} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    historyHead.className = 'text-xl font-bold text-[#111] mb-2';

    const historyParagraph = document.createElement('p');
    const currentDate = new Date().toString();

    historyParagraph.innerText = `${currentDate}`;
    historyParagraph.className = 'text-base font-light text-neutral-900';

    historyDiv.appendChild(historyHead);
    historyDiv.appendChild(historyParagraph);

    document.getElementById('history-section').appendChild(historyDiv);
  });
