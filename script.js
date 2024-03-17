const categoryElements = document.querySelectorAll(".category div");
const hasilSections = document.querySelectorAll(".hasil");

function toggleHoverEffect(categoryElement, hasilSection) {
  categoryElement.classList.toggle("category-hover");
  hasilSection.style.display = "block";
  
  hasilSection.scrollTop = 0; 
  hasilSection.scrollIntoView({ behavior: "smooth" }); 
}

categoryElements.forEach((categoryElement, index) => {
  categoryElement.addEventListener("click", function () {
    if (categoryElement.classList.contains("category-hover")) {
      categoryElement.classList.remove("category-hover");
      hasilSections[index].style.display = "none";
      
      categoryElement.style.backgroundColor = ""; 
      categoryElement.style.color = "";
      categoryElement.style.boxShadow = "";
    } else {
      categoryElements.forEach((element, i) => {
        if (i !== index && element.classList.contains("category-hover")) {
          element.classList.remove("category-hover");
          hasilSections[i].style.display = "none";
        
          element.style.backgroundColor = ""; 
          element.style.color = "";
          element.style.boxShadow = ""; 
        }
      });
      toggleHoverEffect(categoryElement, hasilSections[index]);
      categoryElement.style.backgroundColor = "rgb(27, 56, 103)";
      categoryElement.style.color = "#fcf6f5ff";
      categoryElement.style.boxShadow =
        "0px 0px 3.2px 3.2px rgba(27, 56, 103, 0.7)";
    }
  });
});
