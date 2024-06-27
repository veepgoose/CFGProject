document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadNavbar();
    loadWelcome();
    loadTiles();
    loadFooter();
    loadContactForm();
});

function loadHeader() {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = `
            <div class="container-fluid p-0">
                <div class="position-relative">
                    <img src="../images/InFoilHeader.png" alt="InFoil Header" class="img-fluid w-100" />
                    <img src="../images/InFoilLogoOrange.png" alt="InFoil Logo" class="position-absolute top-0 start-0 m-3" style="width: 400px;" />
                </div>
            </div>
        `;
    }
}

function loadNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="aboutUs.html">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="productDesigns.html">Product Designs</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

function loadWelcome() {
    const welcome = document.getElementById('welcome');
    if (welcome) {
        welcome.innerHTML = `
            <div class="container py-5">
                <h1 class="display-4 mb- text-white">WELCOME TO INFOIL</h1>
                <h2 class="h3 mb-4">REDEFINING INNOVATION IN METAL SOLUTIONS</h2>
                <p class="lead">At InFoil, we're more than just manufacturers—we're pioneers of innovation. With a relentless dedication to quality and sustainability, we craft cutting-edge products that set new industry standards. From metal foil to strip, our materials merge ingenuity with functionality, meeting the diverse needs of industries worldwide. Whether it's Induction Loop Systems or bespoke solutions, our team's expertise ensures swift service and tailored excellence. Welcome to the future of metal solutions—welcome to InFoil.</p>
            </div>
        `;
    }
}

function loadTiles() {
    const tiles = document.getElementById('tiles');
    if (tiles) {
        tiles.innerHTML = `
            <div class="container mb-5">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    <div class="col">
                        <div class="tile">
                            <img src="../images/CopperTile.png" class="img-fluid w-100" alt="Tile 1">
                            <div class="tile-content d-flex align-items-center justify-content-center">
                                <div class="tile-hover text-center text-white p-3">
                                    <h5 class="card-title">INNOVATING QUALITY SOLUTIONS</h5>
                                    <p class="card-text">At InFoil, innovation isn't just a concept; it's our guiding principle. We're dedicated to crafting cutting-edge, high-quality products that redefine industry standards. But it doesn't stop there. Sustainability is at the core of what we do—all our products are recyclable, reflecting our commitment to a greener future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="tile">
                            <img src="../images/CopperTile.png" class="img-fluid w-100" alt="Tile 2">
                            <div class="tile-content d-flex align-items-center justify-content-center">
                                <div class="tile-hover text-center text-white p-3">
                                    <h5 class="card-title">WHERE INGENUITY MEETS FUNCTIONALITY</h5>
                                    <p class="card-text">The InFoil lineup features a diverse range of materials, including metal foil and strip, enveloped in various insulating films. Through our meticulous laminating process, we ensure seamless integration with common dielectrics and metal substrates, meeting the rigorous demands of industries spanning from electronics to automotive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="tile">
                            <img src="../images/CopperTile.png" class="img-fluid w-100" alt="Tile 3">
                            <div class="tile-content d-flex align-items-center justify-content-center">
                                <div class="tile-hover text-center text-white p-3">
                                    <h5 class="card-title">APPLICATIONS ACROSS INDUSTRIES</h5>
                                    <p class="card-text">While InFoil is synonymous with Induction Loop Systems for individuals with hearing disabilities, our reach extends far beyond. From transformers to shielding solutions, and from medical devices to automotive components, our products serve as the backbone of innovation across multiple sectors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="tile">
                            <img src="../images/CopperTile.png" class="img-fluid w-100" alt="Tile 4">
                            <div class="tile-content d-flex align-items-center justify-content-center">
                                <div class="tile-hover text-center text-white p-3">
                                    <h5 class="card-title">TAILORED SOLUTIONS, SWIFT SERVICE</h5>
                                    <p class="card-text">InFoil doesn't just offer standard sizes; we provide bespoke solutions tailored to your exact specifications. Need a custom size, configuration, or expert advice? Our team is here to assist you every step of the way, ensuring prompt service and unparalleled attention to detail.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}


function loadFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <footer class="bg-dark text-white py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <img src="../images/InFoilLogoOrange.png" alt="InFoil Logo" class="img-fluid mb-3" style="max-width: 200px;" />
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0 text-center">
                            <img src="../images/ISCVE-Logo.png" alt="ISCVE Logo" class="img-fluid mb-2" style="max-width: 100px;" />
                            <p class="mb-0">We are a supporting member of the ISCE</p>
                            <p>(Institute of Sound, Communication & Visual Engineers)</p>
                        </div>
                        <div class="col-md-4 text-md-end">
                            <p>Call Us: <a href="tel:+44 (0) 7792 498617" class="text-white">+44 (0) 7792 498617</a></p>
                            <p>Email Us: <a href="mailto:info@infoil.co.uk" class="text-white">info@infoil.co.uk</a></p>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col text-center">
                            <p class="mb-0">&copy; ${new Date().getFullYear()} Insulated Foil Specialist Ltd. All rights reserved. Website designed and developed by <a href="https://pixelpopstudios.com" target="_blank" rel="noopener noreferrer" class="text-white">Pixel Pop Studios</a>.</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

function loadContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.innerHTML = `
        <div class="container py-5">
            <form id="contact-form" class="text-white p-4 rounded" style="background-color: #1e445c;">
                <div class="mb-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" id="name" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="subject" class="form-label">Subject:</label>
                    <input type="text" id="subject" class="form-control" required />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message:</label>
                    <textarea id="message" class="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
        `;

        document.getElementById('contact-form').addEventListener('submit', handleSubmit);
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Message:', message);
    
    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    alert('Form submitted successfully!');
}
