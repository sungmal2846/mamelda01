'use client'

import { useState } from 'react'

const images = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%9B%84%EB%B3%B42-6MJfuVrUIallq2LQ5swFVLwsZBpnGs.jpg',
  detailOne: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%9B%84%EB%B3%B42%20%EC%84%B8%EB%B6%801-XGZTKeZLg2bydeZhg4wlWftyBZRY2r.jpg',
  detailTwo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%9B%84%EB%B3%B42%20%EC%84%B8%EB%B6%802-cOEM1UmkIP5tMtuow0qkbmA1xvssv4.jpg',
  candidateOne: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%9B%84%EB%B3%B41-npBThX2wCsSSgh8buT543xsdInYIMC.jpg',
  movementPortrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9E%91%ED%92%88%20%EC%82%AC%EC%A7%84%20%283%29-EH0uAWiuZ45bDMJkHuUoJPB0MYXnXZ.jpg',
  movementDetail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headpiece-03-qWioUPNcxowqvHuEN566P72oDv37EK.jpg',
  materialColor: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9E%91%ED%92%88%20%EC%82%AC%EC%A7%84%20%2812%29-3dosH3kH9a8eycx40yy9LGYfHrS9Q8.jpg',
  materialStraw: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9E%91%ED%92%88%20%EC%82%AC%EC%A7%84%20%289%29-6Y84MnnMtX89XI4kbV0xP1UJVtcala.jpg',
  pinkHat: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EB%B6%84%ED%99%8D%EC%83%89%20%EA%B9%83%ED%84%B8%20%EB%AA%A8%EC%9E%90-HtfprP7MMBk70ltF9Lf7FRiva8eqpR.png',
  purpleHat: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%EC%9E%91%ED%92%88%20%EC%82%AC%EC%A7%84%20%282%29-QFifs1IM8HdKst0ZUk18KihKbIKGJT.jpg',
  whiteHat: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%ED%99%94%EC%9D%B4%ED%8A%B8%20%EB%AA%A8%EC%9E%90%20%ED%9A%8C%EC%B2%AD%EC%83%89%20%EC%9E%A5%EB%AF%B8%EC%99%80%20%EA%B9%83%ED%84%B8-Pe23kUYT6rOLvjCxhoo4v9Q4IvXGuU.jpg',
}

const copy = {
  ko: {
    heroTitle: <>머리 위에서 하늘로<br />확장되는 자유로움</>,
    heroLabel: 'COLLECTION • EXHIBITION • RETAIL PARTNERSHIPS',
    secondEyebrow: '장식의 리듬',
    secondTitle: <>착용하는 순간,<br />특별함을 더하다</>,
    secondBody: '깃털의 움직임, 섬세한 장식, 조형적인 실루엣. 마멜다는 소재와 형태의 균형을 통해 한 점마다 고유한 표정을 만듭니다.',
    contact: '문의',
    language: '언어',
  },
  en: {
    heroTitle: <>Freedom unfolding<br />from the head to the sky.</>,
    heroLabel: 'COLLECTION • EXHIBITION • RETAIL PARTNERSHIPS',
    secondEyebrow: 'Expressive detail',
    secondTitle: <>A touch of distinction,<br />the moment you wear it.</>,
    secondBody: 'Movement, delicate embellishment and sculptural silhouettes give each piece its own character.',
    contact: 'Contact',
    language: 'Language',
  },
}

export default function Page() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko')
  const t = copy[language]

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MAMELDA home">MAMELDA</a>
        <nav className="header-nav" aria-label="Main navigation">
          <span className="language-label">{t.language}</span>
          <div className="language-switcher" role="group" aria-label="Language switcher">
            <button className={language === 'ko' ? 'active' : ''} onClick={() => setLanguage('ko')} aria-pressed={language === 'ko'}>KR</button>
            <span aria-hidden="true">/</span>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
          </div>
          <a className="contact-link" href="mailto:themamelda@naver.com">{t.contact}</a>
        </nav>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroLabel}</p>
          <h1 id="hero-title">{t.heroTitle}</h1>
          <span className="section-index">01 <i aria-hidden="true" /></span>
        </div>
        <figure className="hero-image-wrap">
          <img src={images.hero} alt="청록색 배경 위에 놓인 흰색 조형 헤드피스" className="hero-image" fetchPriority="high" />
        </figure>
      </section>

      <section className="detail-section" aria-labelledby="detail-title">
        <div className="detail-heading">
          <span className="section-index">02 <i aria-hidden="true" /></span>
          <p className="eyebrow">{language === 'ko' ? '후보 2 · 세부' : 'Candidate 2 · Details'}</p>
          <h2 id="detail-title">{language === 'ko' ? <>섬세한 장식,<br />가까이에서 보다</> : <>Delicate detail,<br />seen up close.</>}</h2>
        </div>
        <div className="detail-gallery">
          <img src={images.detailOne} alt="후보 2 하단의 금빛 꽃과 진주 장식 디테일" loading="lazy" />
          <img src={images.detailTwo} alt="후보 2에 펼쳐진 흰색 꽃 장식 디테일" loading="lazy" />
        </div>
      </section>

      <section className="feature-section" aria-labelledby="feature-title">
        <div className="feature-image-column candidate-one-image">
          <figure className="feature-image-wrap">
            <img src={images.candidateOne} alt="흰색 소재와 금빛 장식이 위로 확장되는 헤드피스" className="feature-image" loading="lazy" />
          </figure>
        </div>
        <div className="feature-copy">
          <span className="section-index">02 <i aria-hidden="true" /></span>
          <p className="eyebrow">{t.secondEyebrow}</p>
          <h2 id="feature-title">{t.secondTitle}</h2>
          <p className="feature-body">{t.secondBody}</p>
        </div>
      </section>

      <section id="feathers-and-movement" className="movement-section" aria-labelledby="movement-title">
        <div className="movement-copy">
          <span className="section-index">03 <i aria-hidden="true" /></span>
          <p className="eyebrow">{language === 'ko' ? '움직임을 담은 실루엣' : 'Sculpting a sense of movement'}</p>
          <h2 id="movement-title">{language === 'ko' ? <>깃털, 선으로<br />그리는 움직임</> : <>Feathers in motion.<br />Lines that come alive.</>}</h2>
          <p className="movement-body">{language === 'ko' ? '가볍게 뻗어 나가는 선과 섬세한 결. 깃털의 방향과 높이, 장식의 밀도가 착용자의 인상을 새롭게 구성합니다.' : 'Direction, height and texture bring a distinctive expression to the wearer.'}</p>
        </div>
        <div className="movement-visuals">
          <figure className="movement-portrait">
            <img src={images.movementPortrait} alt="흰색과 검정색 깃털, 베일이 있는 착장용 헤드피스" loading="lazy" />
          </figure>
          <figure className="movement-detail">
            <img src={images.movementDetail} alt="검정과 회색의 투명한 소재와 긴 깃털 디테일" loading="lazy" />
            <figcaption>{language === 'ko' ? '선과 결의 디테일' : 'Detail of line and texture'}</figcaption>
          </figure>
        </div>
      </section>

      <section className="materials-section" aria-labelledby="materials-title">
        <div className="materials-intro">
          <span className="section-index">04 <i aria-hidden="true" /></span>
          <p className="eyebrow">{language === 'ko' ? '소재와 실루엣' : 'Materials and silhouettes'}</p>
          <h2 id="materials-title">{language === 'ko' ? <>다양한 소재,<br />감각적인 실루엣 제안</> : <>Diverse materials.<br />Distinctive silhouettes.</>}</h2>
          <p className="materials-body">{language === 'ko' ? '투명한 오간자부터 선인장 기반 식물성 가죽 그리고 밀짚까지, 다양한 소재와 수공예 장식을 더해 감각적인 실루엣과 분위기를 완성합니다.' : 'From sheer organza to cactus-based plant-derived leather and straw, diverse materials and handcrafted embellishments create distinctive silhouettes and moods.'}</p>
        </div>
        <div className="materials-images">
          <img className="materials-primary" src={images.materialColor} alt="연두색, 회색, 주황색 패널이 나뉜 조형적인 모자" loading="lazy" />
          <img className="materials-secondary" src={images.materialStraw} alt="밀짚과 검정 레이스, 초록 장식과 깃털이 결합된 모자" loading="lazy" />
        </div>
      </section>

      <section className="hat-collection-section" aria-labelledby="hat-collection-title">
        <div className="hat-collection-intro">
          <span className="section-index">05 <i aria-hidden="true" /></span>
          <p className="eyebrow">{language === 'ko' ? '컬러와 장식' : 'Colour and embellishment'}</p>
          <h2 id="hat-collection-title">{language === 'ko' ? <>색과 장식으로<br />완성되는 한 점</> : <>A singular piece,<br />finished in colour.</>}</h2>
          <p className="hat-collection-body">{language === 'ko' ? '색감과 장식, 깃털의 조합은 하나의 모자를 작은 오브제로 만듭니다. 각기 다른 분위기의 세 가지 실루엣을 만나보세요.' : 'Colour, embellishment and feather combine to turn each hat into a small object. Discover three distinct moods.'}</p>
        </div>
        <div className="hat-collection-grid">
          <figure><img src={images.pinkHat} alt="분홍색 넓은 챙과 깃털, 꽃 장식이 있는 모자" loading="lazy" /></figure>
          <figure><img src={images.purpleHat} alt="라벤더색 미니 톱햇과 자주색 깃털 장식" loading="lazy" /></figure>
          <figure><img src={images.whiteHat} alt="아이보리색 챙과 회청색 장미, 깃털 장식이 있는 모자" loading="lazy" /></figure>
        </div>
      </section>
    </main>
  )
}
