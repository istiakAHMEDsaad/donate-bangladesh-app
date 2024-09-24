// Common function for get input
function getInputById(id) {
  const getInput = document.getElementById(id).value;
  const inputConvertFloat = parseFloat(getInput);
  return inputConvertFloat;
}
// Common function for get html content
function getHtmlContent(id) {
  const getContent = document.getElementById(id).innerText;
  const contentConvertFloat = parseFloat(getContent);
  return contentConvertFloat;
}

// ! Total balance
function totalBalance(id) {
  const allBalance = document.getElementById(id).innerText;
  const allBalanceNumber = parseFloat(allBalance);
  return allBalanceNumber;
}

// ?Noakhali
document
  .getElementById('noakhali-donate-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (
      isNaN(getInputById('noakhali-input')) ||
      getInputById('noakhali-input') <= 0
    ) {
      alert('Please insert a valid number please😥');
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('noakhali-input') > totalBalance('noakhali-balance')
    ) {
      alert('Insufficient balance 😫');
    } else {
      const totalSum =
        getInputById('noakhali-input') + getHtmlContent('noakhali-balance');
      document.getElementById('noakhali-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('noakhali-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_1').showModal();

      // History
      // noakhali
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
    }
  });

// ?Feni
document
  .getElementById('feni-donate-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (isNaN(getInputById('feni-input')) || getInputById('feni-input') <= 0) {
      alert('Please insert a valid number please😥');
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('feni-input') > totalBalance('main-balance')
    ) {
      alert('Insufficient balance 😫');
    } else {
      const totalSum =
        getInputById('feni-input') + getHtmlContent('feni-balance');
      document.getElementById('feni-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('feni-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_2').showModal();

      // history
      // feni
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
    }
  });

// ?Quota
document
  .getElementById('quota-donate-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (
      isNaN(getInputById('quota-input')) ||
      getInputById('quota-input') <= 0
    ) {
      alert('Please insert a valid number please😥');
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('quota-input') > totalBalance('main-balance')
    ) {
      alert('Insufficient balance 😫');
    } else {
      const totalSum =
        getInputById('quota-input') + getHtmlContent('quota-balance');
      document.getElementById('quota-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('quota-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_3').showModal();

      // history
      // quota movement
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
    }
  });
