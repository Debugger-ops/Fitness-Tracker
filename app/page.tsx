// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroTextContent}>
              <h1 className={styles.heroTitle}>
                Track Your Fitness Journey
              </h1>
              <p className={styles.heroDescription}>
                Log your workouts, monitor progress, and achieve your fitness goals with our comprehensive tracking solution.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/dashboard" className={styles.primaryButton}>
                  Get Started
                </Link>
                <Link href="/history" className={styles.secondaryButton}>
                  View History
                </Link>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImageWrapper}>
                {/* Replace with a real placeholder service or local image */}
                <Image 
                  src="https://placehold.co/500x500/3b82f6/FFFFFF?text=Fitness+Tracker"
                  alt="Fitness Tracking" 
                  fill
                  style={{objectFit: "contain"}}
                  className={styles.heroImage}
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