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

