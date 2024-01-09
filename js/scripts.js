<script>
  // Your list of cafes (from Flask) should be available as the `cafes` variable

  const tableBody = document.getElementById("table-body");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const pageSpan = document.getElementById("page-num");

  const itemsPerPage = 10; // Number of items per page
  let currentPage = 1;

  function updateTable() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cafesToDisplay = cafes.slice(startIndex, endIndex);

    tableBody.innerHTML = ""; // Clear the table

    cafesToDisplay.forEach((cafe) => {
      // Create and append table rows for cafes here
    });

    pageSpan.textContent = `Page ${currentPage}`;
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateTable();
    }
  });

  nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(cafes.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updateTable();
    }
  });

  updateTable(); // Initial table setup
</script>
