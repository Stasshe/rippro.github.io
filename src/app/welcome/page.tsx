/** @format */
'use client';

import Link from 'next/link';
import YouTube from 'react-youtube';
import Discord from '../../components/discord';
import { Layout } from '../../components/PageLayout';

const workshopDate = '2025/4/7(金)';
const coursePlace = 'OIC H234教室';
const courseTime = '16:40〜18:15';

const lectures = [
  {
    title: '第1回講習 入門！プログラミング勉強会 #1',
    date: '4/22(月) 4/23(火)',
    place: '更新予定',
    time: '16:20~17:50'
  },
  { title: '第2回講習 実践！競プロ勉強会 #1', date: '4/24(水) 4/25(木)', place: '更新予定', time: '16:20~17:50' },
  {
    title: '第3回講習 入門！プログラミング勉強会 #2',
    date: '4/29(月) 4/30(火)',
    place: '更新予定',
    time: '16:20~17:50'
  },
  { title: '第4回講習 実践！競プロ勉強会 #2', date: '5/1(水) 5/2(木)', place: '更新予定', time: '16:20~17:50' }
];

const Welcome = () => {
  return (
    <Layout title="新歓情報 - RiPPro(立命館大学情報理工学部プロジェクト団体)" description="新歓用ページ">
      <div className="mx-auto w-full max-w-5xl space-y-10">
        <section className="section-block space-y-6 bg-gradient-to-br from-white via-[#fffaea] to-[#dbf9ff]">
          <p className="section-kicker [font-family:var(--font-mono)]">welcome campaign</p>
          <h2>新歓Discordサーバー</h2>
          <Discord />
        </section>

        <section className="section-block space-y-6">
          <h2>新歓講演会</h2>
          <p>私たちRiPRroの普段の活動内容や配布したビラの問題の解説などを行います！</p>
          <p>どこの学部の方でもでも歓迎するので気軽に参加してください。</p>
          <ul className="space-y-2 pl-0 [font-family:var(--font-mono)] text-sm leading-7 list-none">
            <li>日程 : {workshopDate}</li>
            <li>場所 : {coursePlace}</li>
            <li>時間 : {courseTime}</li>
          </ul>
          <div className="grid items-end gap-4 md:grid-cols-[1fr_auto]">
            <p className="text-sm text-rippro-dark/80">クリックで拡大画像を表示</p>
            <a
              href="RiPPro_Ad.png"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center rounded-[16px] border border-rippro-dark/15 bg-white/90 p-2 transition hover:-translate-y-1"
            >
              <img src="RiPPro_Ad.png" width="230" alt="RiPPro 新歓ビラ" className="rounded-[12px]" />
            </a>
          </div>
        </section>

        <section className="section-block space-y-6">
          <h2>競プロ新歓講習</h2>
          <p>仮入部者に向けてプログラムの書き方や、そのプログラムをどうやって競プロに使うのかをゼロから講習します！</p>
          <p>各回につき2日の日程が用意されていますが、同じ内容をやるのでどちらに参加していただいても大丈夫です!</p>
          <div className="grid gap-4 md:grid-cols-2">
            {lectures.map((lecture) => (
              <article key={lecture.title} className="rounded-[18px] border border-rippro-dark/15 bg-white/90 p-5">
                <h3 className="text-[1.2rem]">{lecture.title}</h3>
                <ul className="mt-3 list-none space-y-1 pl-0 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.08em] text-rippro-dark/80">
                  <li>日程 : {lecture.date}</li>
                  <li>場所 : {lecture.place}</li>
                  <li>時間 : {lecture.time}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block space-y-6">
          <h2>RiPProとは</h2>
          <div className="space-y-3">
            <p>私たち RiPProは競技プログラミングの能力を高めコンテストでの入賞を目指す団体です。</p>
            <p>競技プログラミングって聞いたことありますか？</p>
            <p>競技プログラミングとは、与えられた問題をプログラムを用いて早く正確に解く種目です。</p>
            <p>世界規模での大会が開催されるなどとても活発です。</p>
            <p>
              <a href="http://atcoder.jp/" target="_blank" rel="noopener noreferrer">
                AtCoder
              </a>{' '}
              などでは初心者から熟練者まで幅広く参加できるコンテストが毎週開催されています。
            </p>
          </div>
        </section>

        <section className="section-block space-y-6">
          <h2>パソコンに問題を解かせよう!</h2>
          <div className="space-y-3">
            <p>良いプログラムとはどういうものでしょうか？</p>
            <p>例えばこの動画のお姉さんは一つ一つ必死に数えていますが、もっと効率よく数える方法は無いでしょうか。</p>
            <p>また、その方法をどうやってプログラムに落とし込みますか？</p>
            <p>
              このようなことを考えることはパズルを解くのと同じようにとても楽しいですし、実際のプログラム開発でも役に立ちます。
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-[18px] border border-rippro-dark/15 bg-white/85">
            <YouTube
              videoId="Q4gTV4r0zRs"
              opts={{ width: '100%', height: '100%' }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="space-y-3">
            <p>RiPProの普段の活動ではコンテスト形式でサークル内で競いながら問題を解いていきます。</p>
            <p>
              年に 1~2 回ほどですが、問題を作ったりもしています。 (例:
              <a
                href="https://onlinejudge.u-aizu.ac.jp/beta/room.html#RitsCamp16Day1"
                target="_blank"
                rel="noopener noreferrer"
              >
                立命合宿 2016
              </a>
              ,
              <a
                href="https://onlinejudge.u-aizu.ac.jp/beta/room.html#ACPC2015Day1"
                target="_blank"
                rel="noopener noreferrer"
              >
                会津合宿 2015
              </a>
              )
            </p>
            <p>
              プログラミングの勉強をしたい方、クイズやパズルが好きな方、是非部室に来てください
              <b>情報理工学部生以外も大歓迎です</b>
            </p>
          </div>
        </section>

        <section className="section-block space-y-3">
          <h2>連絡先</h2>
          <p>
            入部希望者または質問等がある方は，<Link href="/contact">お問い合わせ</Link>にアクセスしてください。
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Welcome;
