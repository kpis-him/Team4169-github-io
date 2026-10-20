<script setup>
window.onload = function () {
  const articlesListElement = document.getElementById("articles-list");
  const markdownContentElement = document.getElementById("markdown-content");
  const backBtn = document.getElementById("back-btn");
  const hiddenstuff = document.getElementById("hidden-content");
  const title = document.getElementById("title");
  function fetchMarkdownAndConvert(filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((markdown) => {
        const html = marked(markdown);
        markdownContentElement.innerHTML = html;
      })
      .catch((error) =>
        console.error("Error fetching or converting Markdown:", error)
      );
  }
  // Attach click event listeners to each link
  articlesListElement.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const filePath = event.target.getAttribute("href");
      articlesListElement.classList.add("hidden");
      hiddenstuff.classList.remove("hidden");
      title.classList.add("hidden");
      fetchMarkdownAndConvert(filePath);
    }
  });

  backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    articlesListElement.classList.remove("hidden");
    hiddenstuff.classList.add("hidden");
    title.classList.remove("hidden");
  });

  function fetchMarkdownAndConvert(filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((markdown) => {
        const html = marked.parse(markdown);
        markdownContentElement.innerHTML = html;
        console.log(html);
      })
      .catch((error) =>
        console.error("Error fetching or converting Markdown:", error)
      );
  }
};
</script>

<template>
  <div
    id="hidden-content"
    class="markdown-content hidden bg-slate-900 px-10 mt-24 mb-8 article-custom"
  >
    <button
      id="back-btn"
      class="justify-left focus:outline-none bg-white text-gray-900 rounded-sm w-32 h-10 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition duration-500 ease-in-out mb-6 mt-6"
    >
      &larr; &nbsp;&nbsp; Back
    </button>
    <hr />
    <div id="markdown-content" class="mb-20"></div>
  </div>

  <main>
    <h2 id="title" class="mt-32 font-extrabold text-white text-5xl text-center">
      Articles
    </h2>
    <div id="articles-list" class="mt-20 grid-cols-4 grid grid-custom">
      <div class="rounded-sm bg-teal-950 p-5 w-72 m-10">
        <h2 class="font-extrabold text-white text-lg">Home</h2>
        <br />
        <p class="font-semibold text-white text-sm">
          A brief explanation about this page :D
        </p>
        <br />
        <a id="read-button" href="/articles/HOME.md"> Read Article </a>
      </div>

      <div class="rounded-sm bg-teal-950 p-5 w-72 m-10">
        <h2 class="font-extrabold text-white text-lg">
          Behind Programmatic.org
        </h2>
        <br />
        <p class="font-semibold text-white text-sm">
          An article detailing the creation and development of Programmatic.org
        </p>
        <br />
        <a id="read-button" href="/articles/programmatic.md"> Read Article </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  font-family: monospace;
  margin-bottom: 0.9rem;
  letter-spacing: 1px;
  color: white;
  font-size: 2rem;
}

#read-button {
  color: #868e96;
  font-size: 1.2rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.5;
  transition: 0.3s;
}

#read-button:hover {
  color: #ffffff;
}

.markdown-content li {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #ffffffd6;
  margin-bottom: 0.3rem;
  font-weight: 400;
}

.markdown-content p {
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #f5f5f5;
  margin-bottom: 1rem;
  font-weight: 400;
}

.markdown-content {
  padding: 1rem, 1rem, 1rem, 1rem;
}

a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  line-height: 1.5;
  transition: 0.3s;
}

a:hover {
  color: #ffffff;
}

.article-custom {
  margin-left: 15rem;
  margin-right: 15rem;
}

/* media 1250px */
@media (max-width: 1320px) {
  .grid-custom {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .article-custom {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}

/* media 800px */
@media (max-width: 1100px) {
  .grid-custom {
    grid-template-columns: repeat(1, 1fr) !important;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
  }

  .article-custom {
    margin-left: 4rem;
    margin-right: 4rem;
  }
}

/* media 800px */
@media (max-width: 800px) {
  .article-custom {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3,
  .markdown-content h4,
  .markdown-content h5,
  .markdown-content h6 {
    font-size: 1.8rem;
  }
}

/* media 600px */
@media (max-width: 600px) {
  .article-custom {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
