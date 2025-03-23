import Link from 'next/link';
import Image from 'next/image';
import './page.css';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContainer">
          <div className="heroContent">
            <div className="heroTextContent">
              <h1 className="heroTitle">
                Track Your Fitness Journey
              </h1>
              <p className="heroDescription">
                Log your workouts, monitor progress, and achieve your fitness goals with our comprehensive tracking solution.
              </p>
              <div className="heroButtons">
                <Link href="/dashboard" className="primaryButton">
                  Get Started
                </Link>
                <Link href="/history" className="secondaryButton">
                  View History
                </Link>
              </div>
            </div>
            <div className="heroImageContainer">
              <div className="heroImageWrapper">
                <Image
                  src="https://img.freepik.com/free-vector/blue-geometric-woman-running-illustration_1284-52845.jpg?t=st=1742724772~exp=1742728372~hmac=5d210774e87c698f1f3dedb1ddcf956a8fddc14e9ef1c3763f7f3b90acacfc9f&w=826"
                  alt="Fitness Tracking"
                  width={500}
                  height={500}
                  className="heroImage"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="featuresSection">
        <div className="sectionContainer">
          <h2 className="sectionTitle">Key Features</h2>
          <p className="sectionSubtitle">Everything you need to succeed on your fitness journey</p>
          
          <div className="featuresGrid">
            <div className="featureCard">
              <div className="featureIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="featureTitle">Workout Logging</h3>
              <p className="featureDescription">
                Easily record exercises, sets, reps, and weights with our intuitive interface.
              </p>
            </div>
            
            <div className="featureCard">
              <div className="featureIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="featureTitle">Progress Tracking</h3>
              <p className="featureDescription">
                Monitor your improvements over time with detailed statistics and charts.
              </p>
            </div>
            
            <div className="featureCard">
              <div className="featureIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="featureTitle">Secure Storage</h3>
              <p className="featureDescription">
                Your workout data is securely stored locally, ensuring your privacy.
              </p>
            </div>
            
            <div className="featureCard">
              <div className="featureIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="featureTitle">Multi-device Access</h3>
              <p className="featureDescription">
                Access your fitness data from any device with a responsive interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="howItWorksSection">
        <div className="sectionContainer">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSubtitle">Simple steps to fitness success</p>
          
          <div className="stepsContainer">
            <div className="step">
              <div className="stepNumber">1</div>
              <h3 className="stepTitle">Create Workouts</h3>
              <p className="stepDescription">
                Add your exercises with detailed information about sets, reps, and weights.
              </p>
            </div>
            
            <div className="stepDivider"></div>
            
            <div className="step">
              <div className="stepNumber">2</div>
              <h3 className="stepTitle">Track Progress</h3>
              <p className="stepDescription">
                Monitor your performance and see your improvements over time.
              </p>
            </div>
            
            <div className="stepDivider"></div>
            
            <div className="step">
              <div className="stepNumber">3</div>
              <h3 className="stepTitle">Achieve Goals</h3>
              <p className="stepDescription">
                Use insights to optimize your training and reach your fitness targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonialsSection">
        <div className="sectionContainer">
          <h2 className="sectionTitle">What Our Users Say</h2>
          <p className="sectionSubtitle">Success stories from our community</p>
          
          <div className="testimonialsGrid">
            <div className="testimonialCard">
              <div className="quoteMark">"</div>
              <p className="testimonialText">
                This app has transformed my workout routine. I can easily track my progress and see how far I've come.
              </p>
              <div className="testimonialAuthor">
                <div className="authorAvatar">
                  <span>JS</span>
                </div>
                <div className="authorInfo">
                  <h4 className="authorName">Jamie S.</h4>
                  <p className="authorTitle">Fitness Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="testimonialCard">
              <div className="quoteMark">"</div>
              <p className="testimonialText">
                As a personal trainer, I recommend this app to all my clients. It's simple yet comprehensive.
              </p>
              <div className="testimonialAuthor">
                <div className="authorAvatar">
                  <span>MT</span>
                </div>
                <div className="authorInfo">
                  <h4 className="authorName">Mike T.</h4>
                  <p className="authorTitle">Certified Trainer</p>
                </div>
              </div>
            </div>
            
            <div className="testimonialCard">
              <div className="quoteMark">"</div>
              <p className="testimonialText">
                I love how I can see my workout history and track my improvements over time. Highly recommended!
              </p>
              <div className="testimonialAuthor">
                <div className="authorAvatar">
                  <span>AJ</span>
                </div>
                <div className="authorInfo">
                  <h4 className="authorName">Alex J.</h4>
                  <p className="authorTitle">Marathon Runner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ctaSection">
        <div className="ctaContainer">
          <h2 className="ctaTitle">Ready to start your fitness journey?</h2>
          <p className="ctaDescription">
            Join thousands of users who have transformed their fitness with our tracking tools.
          </p>
          <Link href="/dashboard" className="ctaButton">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerLogo">
            <h3>Fitness Tracker</h3>
          </div>
          <div className="footerLinks">
            <div className="footerLinkGroup">
              <h4>Product</h4>
              <ul>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/history">History</Link></li>
                <li><Link href="#">Features</Link></li>
              </ul>
            </div>
            <div className="footerLinkGroup">
              <h4>Resources</h4>
              <ul>
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">Guides</Link></li>
                <li><Link href="#">Blog</Link></li>
              </ul>
            </div>
            <div className="footerLinkGroup">
              <h4>Company</h4>
              <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>© {new Date().getFullYear()} Fitness Tracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
