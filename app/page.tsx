'use client'

import { useState } from 'react'

const images = {
  traditionJeongja: '/images/traditionJeongja.webp',
  traditionGat: '/images/traditionGat.webp',
  traditionHogeon: '/images/traditionHogeon.webp',
  craftProcess: '/images/craftProcess.webp',
  craftDetail: '/images/craftDetail.webp',
  craftWorn: '/images/craftWorn.webp',
  craftMain: '/images/craftMain.webp',
  hero: '/images/hero.webp',
  detailOne: '/images/detailOne.webp',
  detailTwo: '/images/detailTwo.webp',
  candidateOne: '/images/candidateOne.webp',
  movementPortrait: '/images/movementPortrait.webp',
  movementDetail: '/images/movementDetail.webp',
  materialColor: '/images/materialColor.webp',
  materialStraw: '/images/materialStraw.webp',
  pinkHat: '/images/pinkHat.webp',
  purpleHat: '/images/purpleHat.webp',
  whiteHat: '/images/whiteHat.webp',
}

const copy = {
  ko: {
    heroTitle: <>머리 위에서 하늘로<br />확장되는 자유로움</>,
    heroLabel: 'COLLECTION • EXHIBITION • RETAIL PARTNERSHIPS',
    secondEyebrow: '장식의 리듬',
    secondTitle: <>장식의 리듬</>,
    secondBody: '깃털의 움직임, 섬세한 장식, 조형적인 실루엣. 마멜다는 소재와 형태의 균형을 통해 한 점마다 고유한 표정을 만듭니다.',
    contact: '문의',
    language: '언어',
  },
  en: {
    heroTitle: <>Freedom unfolding<br />from the head to the sky.</>,
    heroLabel: 'COLLECTION • EXHIBITION • RETAIL PARTNERSHIPS',
    secondEyebrow: 'Expressive detail',
    secondTitle: <>Expressive detail</>,
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
        <figcaption className="hero-artwork-caption">
            <span className="artwork-name">화관 Hwagwan, 2024</span>
            <span>{language === 'ko' ? '실크 자카드, 천연 자개, 진주, 크리스탈, 와이어' : 'Silk jacquard, mother-of-pearl, pearls, crystals and wire'}</span>
            <span>25 × 25 × 45 cm</span>
          </figcaption>
        </figure>
      </section>

      <section className="detail-section" aria-label={language === 'ko' ? '화관 세부' : 'Hwagwan details'}>
        <div className="detail-heading">
          <span className="section-index">02 <i aria-hidden="true" /></span>
          
          
          <p className="detail-caption">{language === 'ko' ? '화관 · 세부' : 'Hwagwan · Details'}</p>
        </div>
        <div className="detail-gallery">
          <img src={images.detailTwo} alt="후보 2에 펼쳐진 흰색 꽃 장식 디테일" loading="lazy" />
          <img src={images.detailOne} alt="후보 2 하단의 금빛 꽃과 진주 장식 디테일" loading="lazy" />
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
          
          <h2 id="hat-collection-title">{language === 'ko' ? '장식의 언어' : 'The language of adornment'}</h2>
          <p className="romantic-context">{language === 'ko' ? '(공연 / 영화 등)' : '(Performance / Film and more)'}</p>
          <p className="hat-collection-body">{language === 'ko' ? '빛을 머금은 소재, 겹쳐지는 꽃잎과 투명한 베일. 풍성한 장식 안에서도 소재와 색의 조화를 섬세하게 조율합니다.' : 'Layered petals and translucent veiling reveal a careful balance of colour, texture and volume.'}</p>
        </div>
        <div className="hat-collection-grid">
          <figure><img src={images.pinkHat} alt="분홍색 넓은 챙과 깃털, 꽃 장식이 있는 모자" loading="lazy" /></figure>
          <figure><img src={images.purpleHat} alt="라벤더색 미니 톱햇과 자주색 깃털 장식" loading="lazy" /></figure>
          <figure><img src={images.whiteHat} alt="아이보리색 챙과 회청색 장미, 깃털 장식이 있는 모자" loading="lazy" /></figure>
        </div>
      </section>

      <section id="craft" className="craft-section" aria-labelledby="craft-title">
        <div className="craft-intro">
          <span className="section-index">06 <i aria-hidden="true" /></span>
          <h2 id="craft-title">{language === 'ko' ? <>섬세함으로 엮은<br />주얼리 헤드피스</> : <>Jewellery headpieces<br />woven with delicacy.</>}</h2>
        </div>
        <div className="craft-composition">
          <figure className="craft-main"><img src={images.craftMain} alt="금빛 선이 여러 방향으로 펼쳐지는 헤드피스 완성작" loading="lazy" /></figure>
          <figure className="craft-worn"><img src={images.craftWorn} alt="머리 주변으로 확장되는 금빛 헤드피스의 착용 연출" loading="lazy" /></figure>
        </div>
        <figure className="craft-detail"><img src={images.craftDetail} alt="이삭 형태로 엮인 금빛 금속사 장식의 세부" loading="lazy" /></figure>
        <div className="craft-process-row">
          <div className="craft-process-copy">
            <p>{language === 'ko' ? '메탈사의 짜임과 섬세한 와이어 작업으로 완성한 크리스탈 헤드피스' : 'Crystal headpieces crafted through metallic-thread weaving and delicate wirework.'}</p>
            <p className="craft-material-note">{language === 'ko' ? '(오스트리아산 정품 스와로브스키 크리스탈 100% 사용)' : '(All crystals used are 100% genuine Swarovski crystals from Austria.)'}</p>
          </div>
          <figure className="craft-process"><img src={images.craftProcess} alt="손으로 크리스탈과 와이어를 다루는 제작과정" loading="lazy" /></figure>
        </div>
      </section>

      <section id="tradition" className="tradition-section" aria-labelledby="tradition-title">
        <div className="tradition-intro">
          <span className="section-index">07 <i aria-hidden="true" /></span>
          <p className="eyebrow">{language === 'ko' ? '전통 머리쓰개 연구' : 'Research into traditional Korean headwear'}</p>
          <h2 id="tradition-title">{language === 'ko' ? '2027, 설렘을 담은 새로운 컬렉션을 기대해 주세요.' : 'Look forward to an inspiring new collection in 2027.'}</h2>
          <p className="tradition-body">{language === 'ko' ? '마멜다의 다양한 작품 세계에 전통 머리쓰개 연구 경험을 더해, 새로운 무드의 감각적인 헤드피스를 준비합니다.' : 'Drawing on MAMELDA’s diverse creative practice and research into traditional Korean headwear, we are preparing distinctive headpieces with a fresh aesthetic.'}</p>
        </div>
        <div className="tradition-research" role="group" aria-label={language === 'ko' ? '전통 머리쓰개 연구 자료 — 2027 신작 이미지가 아닙니다' : 'Traditional headwear research references, not images of the 2027 collection'}>
          <figure className="tradition-hogeon"><img src={images.traditionHogeon} alt="호건 연구 자료" loading="lazy" /></figure>
          <figure className="tradition-gat"><img src={images.traditionGat} alt="갓의 제작과정을 보여주는 연구 자료" loading="lazy" /></figure>
          <figure className="tradition-jeongja"><img src={images.traditionJeongja} alt="박물관 유물과 작가 제작물을 구분하여 비교하는 정자관 연구 자료" loading="lazy" /></figure>
          </div>
      </section>
      
      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-intro">
          <span className="section-index">08 <i aria-hidden="true" /></span>
          <p className="eyebrow">ABOUT MAMELDA</p>
          <h2 id="about-title">{language === 'ko' ? "작가 소개 및 주요 경력" : "ABOUT MAMELDA"}</h2>
          <p className="artist-name">별님</p>
          <p>{language === 'ko' ? "마멜다 대표 · 헤드피스 & 모자 디자이너" : "Founder of MAMELDA · Artist & Milliner"}</p>
          <p>{language === 'ko' ? "공예와 패션, 전통과 현대를 오가며 섬세한 조형미와 자유로운 상상력으로 머리 위의 공간에 흥미로운 형태와 감각을 펼쳐냅니다." : "Moving between craft and fashion, tradition and modernity, the artist brings intriguing forms and sensations to the space above the head through delicate sculptural beauty and free imagination."}</p>
        </div>
        <div className="career-grid">
          <div className="career-group">
            <h3>{language === 'ko' ? "주요 경력" : "SELECTED EXPERIENCE"}</h3>
            <p>{language === 'ko' ? "일본 제국호텔 임페리얼 아케이드 입점 경력" : "Retail presence at Imperial Arcade, Imperial Hotel, Japan"}</p>
            <p>{language === 'ko' ? "신세계백화점 및 현대백화점 입점·팝업 경력" : "Retail presence and pop-ups at Shinsegae and Hyundai Department Stores"}</p>
            <p>{language === 'ko' ? "2015 이탈리아 밀라노 엑스포 한국관 입점" : "Retail presence at the Korea Pavilion, Expo Milano 2015, Italy"}</p>
          </div>
          <div className="career-group">
            <h3>{language === 'ko' ? "패션쇼 협업" : "RUNWAY COLLABORATIONS"}</h3>
            <p>{language === 'ko' ? "2025 광복 80주년 기념 패션쇼 · 남산한옥마을 — 한아람한복 협업" : "80th Liberation Anniversary Fashion Show, Namsangol Hanok Village"}</p>
            <p>{language === 'ko' ? "2025 부활절 퍼레이드 패션쇼 · 광화문광장 — 호낭화한복 협업" : "Easter Parade Fashion Show, Gwanghwamun Square"}</p>
          </div>
          <div className="career-group">
            <h3>{language === 'ko' ? "전시 경력" : "EXHIBITIONS"}</h3>
            <p>{language === 'ko' ? "개인전 3회 · 그룹전 20회 이상" : "Three solo exhibitions and more than twenty group exhibitions"}</p>
            <p>{language === 'ko' ? "제1회 — 한국현대의상박물관, 서울 종로" : "1st — Korea Museum of Modern Costume, Jongno, Seoul"}</p>
            <p>{language === 'ko' ? "제2회 — 한국뉴욕주립대학교 현대의상박물관, 인천 송도" : "2nd — SUNY Korea Museum of Modern Costume, Songdo, Incheon"}</p>
            <p>{language === 'ko' ? "제3회 — 갤러리 이즈, 서울 인사동" : "3rd — Gallery IS, Insadong, Seoul"}</p>
          </div>
          <div className="career-group">
            <h3>{language === 'ko' ? "학력 및 강의 경력" : "EDUCATION & TEACHING"}</h3>
            <p>{language === 'ko' ? "홍익대학교 일반대학원 디자인공예학과 박사과정 수료" : "Doctoral coursework completed in Design and Crafts, Graduate School, Hongik University"}</p>
            <p>{language === 'ko' ? "대구가톨릭대학교 패션디자인학과 강의" : "Teaching experience, Department of Fashion Design, Daegu Catholic University"}</p>
            <p>{language === 'ko' ? "「패션소품개발 워크숍」 — 모자 디자인·제작" : "“Fashion Accessories Development Workshop” — Hat Design and Making"}</p>
          </div>
        </div>
        <details className="exhibition-detail">
          <summary>{language === 'ko' ? "모자와 헤드피스로 드레스 룩을 완성하다" : "Completing the dress look with hats and headpieces."}</summary>
          <p>{language === 'ko' ? "2021 / 제2회 개인전 · 한국뉴욕주립대학교 현대의상박물관" : "Second solo exhibition · SUNY Korea Museum of Modern Costume"}</p>
          <p>{language === 'ko' ? "처음부터 하나의 작업인 듯, 드레스와 완벽한 조화를 연출합니다." : "As if conceived together, each headpiece harmonises seamlessly with its dress."}</p>
          <p>{language === 'ko' ? "박물관의 제안으로 소장 드레스의 소재와 색, 실루엣에 맞춰 모자와 헤드피스를 직접 디자인·제작했습니다." : "At the museum’s invitation, hats and headpieces were designed and handcrafted to complement the materials, colours and silhouettes of its dresses."}</p>
          <p>{language === 'ko' ? "(개인전: 3개월)" : "(Solo exhibition: three months.)"}</p>
        </details>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <span className="section-index">09 <i aria-hidden="true" /></span>
        <h2 id="contact-title">{language === 'ko' ? "공간 전시 · 브랜드 협업 제안" : "EXHIBITIONS & BRAND COLLABORATIONS"}</h2>
        <div className="contact-body">
          <p>{language === 'ko' ? "호텔·백화점·문화공간 및 한국 문화행사 초청 전시" : "Exhibition proposals for hotels, department stores, cultural venues and Korean cultural events."}</p>
          <p>{language === 'ko' ? "조명 진열장과 함께하는 화관 전시를 제안합니다." : "Hwagwan is presented with its illuminated display case;"}</p>
          <p>{language === 'ko' ? "마멜다 입점·팝업과 연계한 전시 구성도 협의할 수 있습니다." : "displays linked to MAMELDA retail partnerships and pop-ups can also be arranged."}</p>
        </div>
        <p className="contact-services">{language === 'ko' ? "컬렉션 셀렉션 · 입점 · 시즌 팝업 · 공간 전시" : "Collection selections · Retail · Seasonal pop-ups · Exhibition collaborations"}</p>
        
        {/* 메인 이메일 */}
        <a className="email-cta" href="mailto:themamelda@naver.com">themamelda@naver.com ↗</a>
        
        {/* 인스타그램 링크 (인스타 로고 포함) */}
        <p>
          <a href="https://www.instagram.com/byeolnim.studio/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="100%" stopColor="#285AEB" />
              </radialGradient>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
              <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill="#fff" />
            </svg>
            Instagram · @byeolnim.studio ↗
          </a>
        </p>

        {/* 카카오톡 문의하기 링크 (카카오 로고 포함) */}
        <p>
          <a href="https://open.kakao.com/o/sXS2L3Si" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <rect width="24" height="24" rx="6" fill="#FEE500" />
              <path d="M12 5c-4.418 0-8 2.76-8 6.165 0 2.22 1.48 4.162 3.73 5.252-.164.605-.595 2.19-.682 2.532-.108.423.155.417.327.303.136-.09 2.164-1.47 3.037-2.066.52.076 1.05.116 1.588.116 4.418 0 8-2.76 8-6.165S16.418 5 12 5z" fill="#000000" />
            </svg>
            카카오로 문의하기 ↗
          </a>
        </p>
      </section>

      {/* 최하단 푸터 */}
      <footer className="site-footer">
        <a href="#top" className="footer-wordmark">MAMELDA</a>
        <small>© 2026 MAMELDA. All rights reserved.</small>
      </footer>
    </main>
  )
}
