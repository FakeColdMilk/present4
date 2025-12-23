'use client';

import { useState } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import MessageCard from '@/components/MessageCard';
import Confetti from '@/components/Confetti';
import { Toaster } from '@/lib/toast';

export default function Home() {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    setShowConfetti(true);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  const handleRestart = () => {
    setIsGiftOpened(false);
    setShowConfetti(false);
  };

  return (
    <>
      <Head>
        <title>Merry Christmas </title>
        <meta
          name="description"
          content="A special surprise for Xmas - A delightful interactive experience with love letters, music, and memories"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Xmas, love letter, surprise, romantic, interactive"
        />
        <meta name="author" content="Made with 💕" />

        {/* Favicon - Multiple formats for better browser support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="xmas" />
        <meta
          property="og:description"
          content="A special surprise for Xmas - A delightful interactive experience with love letters, music, and memories"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          property="og:url"
          
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="xmas" />
        <meta
          name="twitter:description"
          content="xmas"
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#fff8e7" />
        
      </Head>

      <main className="min-h-screen">
        {!isGiftOpened && (
          <Hero onOpenGift={handleOpenGift} isGiftOpened={isGiftOpened} />
        )}
        {isGiftOpened && (
          <MessageCard isRevealed={isGiftOpened} onRestart={handleRestart} />
        )}
        <Confetti trigger={showConfetti} onComplete={handleConfettiComplete} />


      </main>

      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'var(--primary)',
            color: 'var(--text)',
            borderRadius: '12px',
            padding: '12px 20px',
            fontSize: '14px',
          },
        }}
      />
    </>
  );
}
