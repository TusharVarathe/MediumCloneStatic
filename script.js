// script.js

// Simulated data for featured articles
const featuredArticles = [
    {
      title: "Article 1",
      author: "John Doe",
      date: "August 25, 2023",
    },
    {
      title: "Article 2",
      author: "Jane Smith",
      date: "August 24, 2023",
    },
    // Add more articles here
  ];
  
  // Function to populate featured articles
  function populateFeaturedArticles() {
    const featuredSection = document.querySelector(".featured-section");
  
    featuredArticles.forEach(article => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("featured-article");
  
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>By ${article.author} - ${article.date}</p>
      `;
  
      featuredSection.appendChild(articleElement);
    });
  }
  
  // Call the function to populate featured articles
  populateFeaturedArticles();
  