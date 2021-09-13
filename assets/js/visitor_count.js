const updateCount = document.getElementById("view-count");

fetch("https://api.countapi.xyz/update/class_routine/nitk_routine/?amount=1")
  .then((res) => res.json())
  .then((showVal) => {
    updateCount.innerHTML = showVal.value;
  });
