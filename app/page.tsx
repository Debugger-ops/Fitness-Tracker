// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import './page.css';  // Regular CSS import

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
                {/* Using local image to avoid domain configuration issues */}
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
      
      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
}
