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
      return;
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('noakhali-input') > totalBalance('noakhali-balance')
    ) {
      alert('Insufficient balance 😫');
      return;
    } else {
      const totalSum =
        getInputById('noakhali-input') + getHtmlContent('noakhali-balance');
      document.getElementById('noakhali-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('noakhali-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_1').showModal();
    }
  });


// ?Feni
document
  .getElementById('feni-donate-button')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (
      isNaN(getInputById('feni-input')) ||
      getInputById('feni-input') <= 0
    ) {
      alert('Please insert a valid number please😥');
      return;
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('feni-input') > totalBalance('main-balance')
    ) {
      alert('Insufficient balance 😫');
      return;
    } else {
      const totalSum =
        getInputById('feni-input') + getHtmlContent('feni-balance');
      document.getElementById('feni-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('feni-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_2').showModal();
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
      return;
    } else if (
      totalBalance('main-balance') <= 0 ||
      getInputById('quota-input') > totalBalance('main-balance')
    ) {
      alert('Insufficient balance 😫');
      return;
    } else {
      const totalSum =
        getInputById('quota-input') + getHtmlContent('quota-balance');
      document.getElementById('quota-balance').innerText = totalSum;
      const totalSub =
        totalBalance('main-balance') - getInputById('quota-input');
      document.getElementById('main-balance').innerText = totalSub;
      document.getElementById('my_modal_3').showModal();
    }
  });