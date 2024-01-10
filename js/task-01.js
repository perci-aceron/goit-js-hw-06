document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.getElementById("categories");

  const categoryItems = categoriesList.querySelectorAll(".item");

  console.log(`Number of categories: ${categoryItems.length}\n`);

  categoryItems.forEach((categoryItem) => {
    const categoryName = categoryItem.querySelector("h2").textContent;

    const categoryElements = categoryItem.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}\n`);
  });
});
