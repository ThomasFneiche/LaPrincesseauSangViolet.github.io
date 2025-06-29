const allPages = document.querySelectorAll("#pages .book-page");
let currentIndex = 0;

function updatePage() {
  const container = document.getElementById("pageContent");
  const currentPage = allPages[currentIndex];

  container.innerHTML = currentPage.innerHTML;

  // Ajoute ou enlève la classe 'cover' selon le type de page
  if (currentPage.classList.contains("cover")) {
    container.classList.add("cover");
  } else {
    container.classList.remove("cover");
  }
}

function nextPage() {
  if (currentIndex < allPages.length - 1) {
    currentIndex++;
    updatePage();
  }
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
    updatePage();
  }
}

updatePage();
