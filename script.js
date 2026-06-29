/* ===========================
   MOMO'S WEBSITE JAVASCRIPT
   =========================== */

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click animation to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a simple alert with the gallery item description
        const description = this.querySelector('p').textContent;
        alert('📸 ' + description + '\n\nComing soon: Full photo gallery!');
    });
});

// Add hover effect to blog posts with a little animation
document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
    });
});

// Change page title based on scroll position (fun easter egg!)
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const blogSection = document.getElementById('blog');
    const gallerySection = document.getElementById('gallery');
    const funSection = document.getElementById('fun');
    
    // Determine which section is in view and update page title
    if (scrollPosition < aboutSection.offsetTop) {
        document.title = '🐱 Momo - Welcome!';
    } else if (scrollPosition < blogSection.offsetTop) {
        document.title = '🐱 Momo - About Me';
    } else if (scrollPosition < gallerySection.offsetTop) {
        document.title = '🐱 Momo - Blog';
    } else if (scrollPosition < funSection.offsetTop) {
        document.title = '🐱 Momo - Gallery';
    } else {
        document.title = '🐱 Momo - Fun Stuff';
    }
});

// Add a welcome message in console (for fun!)
console.log('%cWelcome to Momo\'s Website! 🐱', 'color: #FFB6D9; font-size: 20px; font-weight: bold;');
console.log('%cMomo is a 1-year-old Ragdoll with stunning blue eyes and a fluffy coat!', 'color: #87CEEB; font-size: 14px;');
console.log('%cFeel free to explore and enjoy Momo\'s world! 💕', 'color: #DDA0DD; font-size: 14px;');

// Optional: Add a function to allow updating blog posts (for weekly updates)
function addNewBlogPost(date, title, content, tags) {
    const blogPostsContainer = document.querySelector('.blog-posts');
    
    // Create a new blog post element
    const newPost = document.createElement('article');
    newPost.className = 'blog-post';
    newPost.innerHTML = `
        <div class="blog-date">${date}</div>
        <h3>${title}</h3>
        <p>${content}</p>
        <span class="blog-tag">${tags}</span>
    `;
    
    // Add it to the beginning of the blog section
    blogPostsContainer.insertBefore(newPost, blogPostsContainer.firstChild);
    
    console.log('✨ New blog post added: ' + title);
}

// Example: Uncomment below to add a new post programmatically
// addNewBlogPost('June 29, 2026', 'My Website Launch!', 'I just launched my new website! It took some time, but it\'s finally live. Welcome, friends and fans! 🎉', '#newwebsite #excited');
