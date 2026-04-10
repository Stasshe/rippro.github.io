/** @format */
'use client';

import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IndexArticles from '@/components/IndexArticles';
import { Layout } from '@/components/PageLayout';
import Twitter from '@/components/Twitter';

gsap.registerPlugin(ScrollTrigger);

const storyPanels = [
  {
    kicker: '01 / challenge',
    title: 'Think Deep, Ship Fast',
    copy: '手を動かしながら考え抜く。RiPPro が大事にしているのは、解法の速さだけでなく、発見の美しさです。'
  },
  {
    kicker: '02 / crew',
    title: 'Friends Who Love Problems',
    copy: '初心者から経験者まで、同じテーブルで問題に向き合う文化。わからないを歓迎して、得意を磨きます。'
  },
  {
    kicker: '03 / stage',
    title: 'From Campus To ICPC',
    copy: '学内勉強会から国内外の大会まで。日々の積み重ねを、勝負の舞台へつなげていきます。'
  }
];

const Home: NextPage = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pageRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 58,
        opacity: 0,
        rotate: 4,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.09
      });

      gsap.from('.hero-subcopy', {
        opacity: 0,
        y: 26,
        duration: 0.9,
        delay: 0.32,
        ease: 'power3.out'
      });

      gsap.to('.diagonal-orb', {
        x: 180,
        y: -120,
        rotation: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-root',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        }
      });

      gsap.to('.diagonal-pill', {
        x: -160,
        y: 140,
        rotation: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-root',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.3
        }
      });

      gsap.from('.reveal-card', {
        opacity: 0,
        y: 70,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.reveal-zone',
          start: 'top 75%'
        }
      });

      const panels = gsap.utils.toArray<HTMLElement>('.story-panel');
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal-scene',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => `+=${window.innerWidth * (panels.length - 1)}`
        }
      });
    }, pageRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <Layout
      title="RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="立命館大学情報理工学部プロジェクト団体 RiPPro (Ritsumeikan Programming Project) は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。"
    >
      <div ref={pageRef} className="home-root relative space-y-16 overflow-hidden md:space-y-24">
        <div className="diagonal-orb pointer-events-none absolute -left-24 top-16 h-44 w-44 rounded-full bg-rippro-brand/25 blur-3xl" />
        <div className="diagonal-pill pointer-events-none absolute -right-10 top-[38rem] h-24 w-72 rotate-[-16deg] rounded-full bg-rippro-dark-accent/20 blur-2xl" />

        <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-rippro-light via-[#fff5cc] to-[#dbf8fb] px-6 py-12 md:px-12 md:py-16">
          <p className="section-kicker mb-6 [font-family:var(--font-mono)]">Ritsumeikan Programming Project</p>
          <h1 className="max-w-4xl text-rippro-dark">
            {['Playful,', 'Bold,', 'and', 'Seriously', 'Smart.'].map((word) => (
              <span key={word} className="hero-word mr-[0.25em] inline-block">
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-subcopy mt-6 max-w-2xl text-lg leading-9 text-rippro-dark/85 md:text-xl">
            競技プログラミングを軸に、学びと実戦の距離を限りなく近くする。RiPPro
            は、静かな集中と大きな遊び心を両立させるコミュニティです。
          </p>
          <div className="hero-subcopy mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-rippro-dark/25 bg-white/80 px-4 py-2 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
              ACM-ICPC
            </span>
            <span className="rounded-full border border-rippro-dark/25 bg-rippro-light-accent/30 px-4 py-2 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
              Study Sessions
            </span>
            <span className="rounded-full border border-rippro-dark/25 bg-rippro-brand/25 px-4 py-2 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
              Campus Culture
            </span>
          </div>
        </section>

        <section className="horizontal-scene -mx-4 overflow-hidden md:-mx-10">
          <div className="flex w-[300vw]">
            {storyPanels.map((panel) => (
              <article
                key={panel.kicker}
                className="story-panel flex h-[70vh] w-screen shrink-0 items-center border-y border-rippro-dark/10 bg-rippro-light px-8 py-8 md:px-20"
              >
                <div className="max-w-2xl space-y-6">
                  <p className="section-kicker [font-family:var(--font-mono)]">{panel.kicker}</p>
                  <h2 className="text-rippro-dark">{panel.title}</h2>
                  <p className="text-lg leading-8 text-rippro-dark/80">{panel.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal-zone grid gap-6 md:grid-cols-2">
          <div className="reveal-card section-block space-y-6">
            <p className="section-kicker [font-family:var(--font-mono)]">about</p>
            <IndexArticles />
          </div>
          <div className="reveal-card section-block space-y-6">
            <p className="section-kicker [font-family:var(--font-mono)]">timeline</p>
            <Twitter />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
