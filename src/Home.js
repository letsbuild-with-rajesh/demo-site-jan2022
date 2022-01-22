import './App.css';

function Home() {
    var xStart = null;
    var yStart = null;
    var lastSwipe = Date.now();
    const MIN_WAIT_TIME = 1 * 1000;

    function handleSwipeStart(evt) {
        xStart = evt.touches[0].clientX;
        yStart = evt.touches[0].clientY;
    };

    function handleSwipeEnd(evt) {
        if (!xStart || !yStart || (Date.now() - lastSwipe) <= MIN_WAIT_TIME) {
            return;
        }

        var xEnd = evt.touches[0].clientX;
        var yEnd = evt.touches[0].clientY;

        var xDiff = xStart - xEnd;
        var yDiff = yStart - yEnd;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setCarouselImage("back");
            } else {
                setCarouselImage("back");
            }
        }

        xStart = null;
        yStart = null;
        lastSwipe = Date.now();
    }

    document.addEventListener('touchstart', handleSwipeStart, false);
    document.addEventListener('touchmove', handleSwipeEnd, false);

    var currentCarouselImage = 1;
    const MAX_CAROUSEL_IMAGES = 4;
    function setCarouselImage(move) {
        let imageList = document.querySelectorAll("figure");
        imageList.forEach(element => {
          element.style.display = 'none';
        });

        if (move === "back") {
          currentCarouselImage = ( currentCarouselImage === 1 ) ? MAX_CAROUSEL_IMAGES: currentCarouselImage - 1;
        } else {
          currentCarouselImage = ( currentCarouselImage === MAX_CAROUSEL_IMAGES ) ? 1: currentCarouselImage + 1;
        }

        imageList[currentCarouselImage - 1].style.display = 'inline-block';
    }

    return (
        <div id="home">
            <div id="intro-container" className="section-container">
                <div className="background-intro"></div>
                <div id="intro-content">
                    <h1>Essential Mobile App Landing for Workspaces</h1>
                    <p>A mobile app landing page is important and essential for right amount of information about your product. Start increasing your user base upon the launch of your product</p>
                </div>
                <button>Explore Demos &#8594;</button>
            </div>
            <div id="explore-demos" className="section-container">
                <h2>Explore our demos</h2>
                <p>Explore our landing Page demos on different kind of topics. More Demos are coming soon.</p>
                <div id="demo-carousel">
                    <span className="arrows" onClick={()=>setCarouselImage("back")}>&lt;</span>
                    <figure>
                        <div className="carousel-color-1">Carousel - Website Card</div>
                        <figcaption>Website Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <div className="carousel-color-2">Carousel - App Modern Card</div>
                        <figcaption>App Modern Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <div className="carousel-color-1">Carousel - Website Card</div>
                        <figcaption>Website Landing</figcaption>
                    </figure>
                    <figure style={{ display: 'none' }}>
                        <div className="carousel-color-2">Carousel - App Modern Card</div>
                        <figcaption>App Modern Landing</figcaption>
                    </figure>
                    <span className="arrows" onClick={()=>setCarouselImage("front")}>&gt;</span>
                </div>
            </div>
            <hr width="70%" />
            <div id="business-section" className="section-container">
                <h2>Start your business journey with Demo site</h2>
                <p>Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                <div id="business-journey">
                    <div>
                        <div className="journey-globe">&#9729;</div>
                        <h2>Move Your Business Online</h2>
                        <p>Create a business, whether you’ve got a fresh idea or are looking for a new way to make money.</p>
                    </div>
                    <div>
                        <div className="journey-demo">&#9742;</div>
                        <h2>Switch to Demo site</h2>
                        <p>Bring your business to Demo site, no matter which ecommerce platform you’re currently using.</p>
                    </div>
                    <div>
                        <div className="journey-benefits">&#9786;</div>
                        <h2>Enjoy ur benefits</h2>
                        <p>Get set up with the help of a trusted freelancer or agency from the Shopify Experts Marketplace.</p>
                    </div>
                </div>
            </div>
            <hr width="70%" />
            <div id="clients" className="section-container">
                <h2>What Clients say about our product</h2>
                <div>
                    <div className="clients-card">
                        <div>
                            <div className="users">User</div>
                            <h2>Allen Jones</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="clients-card">
                        <div>
                            <div className="users">User</div>
                            <h2>Allen Jones</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div id="newsletter" className="section-container">
                <div id="newsletter-content">
                    <h1>Subscribe our newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore</p>
                </div>
                <div id="email-container">
                    <input type="email" placeholder="Email Address" />
                    <button>Get Access</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
