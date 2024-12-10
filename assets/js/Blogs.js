const baseURL = "https://easylife.runasp.net/api/news";

function createBlogCard(blog) {
    return `
    <div class="col-lg-4 col-md-6" onclick="window.location.href='Blog.html?id=${blog.id}'" data-aos="fade-up">
      <div class="BlogCardCol card">
        <img src="${blog.imageUrl || "assets/images/Nursery Profile.svg"
        }" class="card-img-top" alt="Blog image">
        <div class="card-body">
          <span class="badge bg-secondary">${blog.category || "Blog"}</span>
          <h5 class="card-title mt-2">${blog.title || "No Title Available"}</h5>
          <p class="card-text">${blog.description || "No description available..."
        }</p>
          <p class="card-date text-muted">${new Date(blog.date).toLocaleDateString() || "Unknown Date"
        }</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="social-icons">
              <a href="#" class="text-muted me-2"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-muted me-2"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="text-muted"><i class="fab fa-instagram"></i></a>
            </div>

            <a href="Blog.html?${blog.id?'id='+ blog.id : "#"}" class="btn btn-link text-decoration-none">READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
async function fetchAndRenderBlogs() {
    try {
        const response = await fetch(baseURL);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const blogs = await response.json();

        const container = document.getElementById("blog-cards-container");
        blogs.data.forEach((blog) => {
            container.innerHTML += createBlogCard(blog);
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchAndRenderBlogs);
