const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');

// Fetch blog data from the API
fetch(`https://easylife.runasp.net/api/news/${blogId}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const blogDetail = document.getElementById('blog-detail');
    blogDetail.innerHTML = `
      <div class="container">
                <span class="badge bg-secondary">Blog</span>
                <div class="row" id="blog-card-details">
                    <div class="col-lg-12">
                        <div class="SingleBlogImageContainer CenterFlex">
                            <img src="${data.data[0].imageUrl}" class="" alt="Blog image">
                        </div>
                    </div>
                    <div class="col-lg-12 mt-2 SingleBlogTextContainer">
                        <h3 class="SingleBlogTitle">
                            ${data.data[0].title || 'Untiteld'}
                        </h3>
                        <span class="card-date text-muted p-4">January 02, 2020</span>
                        <p>
                            ${data.data[0].description}
                        </p>
                    </div>
                    <div class="col-lg-12">
                        <hr>
                    </div>
                    <div class="col-lg-12 ShareSingleBlogPage">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="social-icons">
                                <span>Share:</span>
                                <a href="#" class="text-muted me-2"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="text-muted me-2"><i class="fab fa-linkedin"></i></a>
                                <a href="#" class="text-muted"><i class="fab fa-instagram"></i></a>
                            </div>
                            <a href="Blogs.html" class="text-decoration-none"> <i class="fa-solid fa-chevron-left"></i> Back to Blogs</a>
                        </div>
                    </div>
                </div>

            </div>
    `;
  })
  .catch(error => {
    console.error('Error fetching blog data:', error);
    document.getElementById('blog-detail').innerHTML = '<p>Failed to load blog data.</p>';
  });