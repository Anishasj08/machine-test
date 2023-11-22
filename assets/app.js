
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];



for (let i = 1; i <= 31; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }


  for (let i = 0; i < months.length; i++) {
    document.write(`<option value="${i + 1}">${months[i]}</option>`);
  }

  const currentYear = new Date().getFullYear();
      for (let i = currentYear; i >= currentYear - 100; i--) {
        document.write(`<option value="${i}">${i}</option>`);
      }

      