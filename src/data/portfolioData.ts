import { ProfileData, TimelineItem, ProjectItem, SkillCategory } from '../types';

export const PROFILE_DATA: ProfileData = {
  name: 'Choi Bo-ra',
  nameKo: '최보라',
  title: 'R&D Strategy for Secondary Batteries & Chemical Materials',
  titleKo: '이차전지 & 습식 화학 소재 연구 전략가',
  hashtags: ['#Secondary Battery', '#Wet Chemical', '#8y 4m'],
  quote: '"Understanding technology and presenting direction as an R&D strategist"',
  quoteKo: '"기술을 이해하고 방향을 제시하는 연구 전략가"',
  headerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqlSk9cFbU3TY6DSv0RqOhEb4QQTNojS4Vy-MEk3tmnlCK1nderHmM_lukX2i6Ep7Ii4BRfSfBzafi1-9Pior3vCtaBhCjP7fHGqRSrNcnSs_rNaHcR5q5kfehesB5DI4PvE2NMFRHl4V4Tj-ce6-bZ5iIPvDzqR9vIAH_jN3LJbv9DlBzVhtgx4qbO8VjC23AeGaf7bLGii7CNWJ9-QBeCUB4xD9ezxWjEHKwYk7G37Fn5whKf88OmAmdmVnBlcDDKnMoCoOhXHxD',
  heroAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4sWPwY7j4elumRaE0KdRM7R-jxwhXdxIfujllAVPhds1sHgiKjffP7NjqEgsqJBXX0EJr-OGTi2pYarM0bgjDezXvhBrSAg9hXDFwHVdl5H8YrtqCWu7E9dTudq6JL_Zszg7oooG90rzR8npM0ziXv4APvJSAKJqwem-mfRmWCb4A-FvEK93qgaaiQ4u5Lx05OhOXhtg2sMTdthaM4mViidcg4qA2GXc0RPGg1sfryuFVSYftjWi_wUzWscoBFpuRwpwBnvXk4UQq',
  email: 'oneday0529@naver.com',
  phone: '010-0000-0000',
  linkedinUrl: 'https://linkedin.com/in/choi-bo-ra-rnd',
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'jo-kwang',
    period: '2023.11 — 2024.08',
    company: 'Jo Kwang Paint',
    companyKo: '조광페인트',
    role: 'R&D Manager (Materials Dept.)',
    roleKo: 'R&D 매니저 (소재연구팀)',
    department: 'Materials Dept.',
    departmentKo: '소재연구팀',
    isHighlight: true,
    description: [
      'Secondary battery anode binder materials',
      'Advanced coating solution development',
      'Strategic material sourcing for next-gen batteries'
    ],
    descriptionKo: [
      '이차전지 음극 바인더 소재 개발 및 상용화',
      '고성능 코팅 솔루션 및 도막 특성 최적화',
      '차세대 배터리용 전략적 원소재 수급 및 특허 기획'
    ],
    skillsUsed: ['Anode Binder', 'Coating Solution', 'Cyclic Voltammetry'],
    metrics: [
      { label: 'Capacity Retention', value: '92%' },
      { label: 'Thermal Resistance', value: '220°C' }
    ]
  },
  {
    id: 'kumyang',
    period: '2023.11 — 2024.08',
    company: 'Kumyang',
    companyKo: '금양',
    role: 'R&D Project Lead',
    roleKo: 'R&D 프로젝트 리드',
    description: [
      '46 Series cylindrical battery engineering',
      'Production process optimization for large-scale cells'
    ],
    descriptionKo: [
      '46 시리즈 원통형 배터리 설계 및 공정 엔지니어링',
      '대형 원통형 셀 대량 생산 프로세스 수율 최적화'
    ],
    skillsUsed: ['4680 Cells', 'Internal Resistance Reduction', 'Slurry Viscosity'],
    metrics: [
      { label: 'IR Reduction', value: '-12%' }
    ]
  },
  {
    id: 'nepes',
    period: '2016.02 — 2022.08',
    company: 'Nepes',
    companyKo: '네패스',
    role: 'Senior R&D Specialist',
    roleKo: '수석 연구원',
    description: [
      'Organic insulation film development',
      'Wet chemical synthesis for semiconductor packaging'
    ],
    descriptionKo: [
      '유기 절연막 소재 개발 및 감광 특성 향상',
      '반도체 패키징용 습식 합성 제형 및 원료 설계'
    ],
    skillsUsed: ['Wet Chemical', 'Photo-lithography', 'Semiconductor Packaging'],
    metrics: [
      { label: 'Film Sensitivity', value: '+30%' }
    ]
  },
  {
    id: 'pusan-univ',
    period: 'Graduated',
    company: 'Pusan National University',
    companyKo: '부산대학교',
    role: 'M.S. in Chemical Engineering',
    roleKo: '화학공학과 석사 졸업',
    description: [
      'Master of Science thesis on functional polymer binders and surface analysis'
    ],
    descriptionKo: [
      '기능성 고분자 바인더 및 계면 표면 분석 석사 논문'
    ],
    skillsUsed: ['FT-IR', 'XRPD', 'SEM/TEM']
  }
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'Anode Binder Material',
    titleKo: '음극 바인더 소재 개발',
    company: 'Jo Kwang Paint',
    companyKo: '조광페인트',
    year: '2024',
    problem: 'Existing binder solutions showed insufficient stability during high-capacity cycling tests.',
    problemKo: '고용량 수명 특성 시험 중 기존 바인더의 계면 박리 및 박막 균열로 인한 구조적 불안정성 발생.',
    research: 'Analyzed polymer chain structures and interface adhesion via Cyclic Voltammetry.',
    researchKo: 'Cyclic Voltammetry(순환 전압전류법) 및 FTIR 분석을 통한 고분자 사슬 구조와 활물질 간의 접착력 규명.',
    action: 'Developed a novel cross-linked aqueous binder with improved thermal resistance.',
    actionKo: '내열성과 유연성이 향상된 차세대 가교형 수계 바인더 가공 제형 개발.',
    result: 'Reached 92% capacity retention after 500 cycles.',
    resultKo: '500 사이클 평가 기준 92% 용량 유지율 달성 및 내열 온도 220°C 확보.',
    metrics: [
      { label: 'Retention', labelKo: '유지율', value: '+15%', change: 'improved' },
      { label: 'Heat Resist', labelKo: '내열성', value: '220°C', change: 'up to' }
    ],
    fullDetails: {
      overview: 'High-capacity silicon-graphite composite anodes suffer from severe volume expansion during lithiation/delithiation cycles. This project engineered a water-soluble multi-functional cross-linked binder that effectively accommodates silicon volumetric changes while offering superior electrochemical thermal stability.',
      overviewKo: '실리콘-음극 복합재의 팽창을 효과적으로 억제하는 고분자 가교형 수계 바인더를 개발하여, 500 사이클 이상의 고율 충방전 환경에서도 안정적인 전기화학적 성능을 확보했습니다.',
      keyAchievements: [
        'Integrated multi-arm crosslinking agent to prevent electrode swelling',
        'Achieved 15% higher retention compared to commercial SBR/CMC binders',
        'Filed 2 patents for aqueous cross-linked polymer binder formulations'
      ],
      keyAchievementsKo: [
        '다중 가교제를 도입하여 전극 팽창율을 기존 대비 35% 감소',
        '상용 SBR/CMC 바인더 대비 용량 유지율 15% 향상',
        '수계 가교 고분자 바인더 관련 국내/외 특허 2건 출원'
      ],
      technologies: ['Water-soluble Binder', 'Cross-linking Polymer', 'Cyclic Voltammetry', 'Rheology Control']
    }
  },
  {
    id: 'proj-2',
    number: '02',
    title: '46 Series Battery Dev',
    titleKo: '46 시리즈 원통형 배터리 개발',
    company: 'Kumyang',
    companyKo: '금양',
    year: '2023',
    problem: 'Internal resistance buildup in large-format cylindrical cells during rapid discharge.',
    problemKo: '대형 원통형 셀(4680/4695) 고속 방전 시 급격한 발열 및 내부 저항(IR) 상승 문제.',
    research: 'Thermal profiling and electrolyte penetration analysis across tab-less designs.',
    researchKo: 'Tab-less 구조 상에서 열 분산 프로파일 및 전해액 침투 속도 정밀 시뮬레이션 분석.',
    action: 'Optimized tab structure and slurry viscosity for uniform distribution.',
    actionKo: '전극 슬러리 점도 제어 및 집전체 탭 입체 구조 최적화로 활물질 균일 분산 유도.',
    result: 'Successful pilot run with 12% lower IR compared to previous iteration.',
    resultKo: '이전 버전 대비 내부 저항 12% 감소 달성 및 Pilot 라인 양산성 검증 완료.',
    metrics: [
      { label: 'IR Reduction', labelKo: '저항 감소', value: '12%', change: 'lower' },
      { label: 'Form Factor', labelKo: '규격', value: '4680/4695', change: 'standard' }
    ],
    fullDetails: {
      overview: 'Large cylindrical battery cells require optimal internal heat dissipation and uniform electron transport paths. Through tab-less current collection optimization and slurry rheology modification, internal resistance was lowered significantly.',
      overviewKo: '대형 4680/4695 원통형 셀의 내부 발열 문제 극복을 위해 탭리스 모듈 설계 및 슬러리 점도 제어를 진행하여 급속 충방전 수명을 크게 향상시켰습니다.',
      keyAchievements: [
        'Reduced cell internal resistance by 12%',
        'Improved electrolyte wetting speed in dense electrode coils by 25%',
        'Successfully passed high-rate discharge reliability pilot test'
      ],
      keyAchievementsKo: [
        '셀 내부 저항 12% 저감 달성',
        '고밀도 권취체 내 전해액 함침 시간 25% 단축',
        '고속 방전 신뢰성 파일럿 평가 통과'
      ],
      technologies: ['Tab-less Cell Design', 'Slurry Optimization', 'Thermal Profiling', 'Internal Resistance Scaling']
    }
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Organic Insulation Film',
    titleKo: '유기 절연막 감광 소재 개발',
    company: 'Nepes',
    companyKo: '네패스',
    year: '2020',
    problem: 'Photo-lithography yield drop due to poor photosensitive film sensitivity.',
    problemKo: '반도체 패키징 포토 리소그래피 공정 중 낮은 감광 감도로 인한 미세 패턴 결함 및 수율 저하.',
    research: '',
    action: '',
    result: 'Enhanced film sensitivity by 30% through catalyst reformulating.',
    resultKo: '촉매 제형 재설계 및 신규 감광제 도입으로 감광 감도 30% 향상 및 수율 정상화.',
    metrics: [
      { label: 'Sensitivity', labelKo: '감도 향상', value: '+30%', change: 'higher' },
      { label: 'Yield Gain', labelKo: '수율 개선', value: 'High', change: 'stable' }
    ],
    fullDetails: {
      overview: 'Developed advanced photosensitive organic dielectric films for advanced semiconductor packaging (Fan-Out Panel Level Packaging). Redesigned photocatalysts and polyimide precursor formulations to achieve fine pattern resolution with low cure temperature.',
      overviewKo: '첨단 반도체 패키징용 유기 절연막의 노광 감도를 30% 개선하고,低温 경화 조건에서도 우수한 신뢰성을 유지하도록 소재 제형을 최적화했습니다.',
      keyAchievements: [
        'Boosted photo-sensitivity by 30% without film shrinkage',
        'Reduced defect rate in fine pattern micro-vias by 40%',
        'Adopted into high-density semiconductor packaging mass line'
      ],
      keyAchievementsKo: [
        '막 수축 없이 노광 감도를 30% 높임',
        '미세 비아 홀 패턴의 미개봉 결함률 40% 감소',
        '고밀도 패키징 양산 라인 적용 완료'
      ],
      technologies: ['Photosensitive Resin', 'Photo-lithography', 'Wet Chemical Formulation', 'Semiconductor Dielectric']
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'R&D ANALYTICS',
    titleKo: 'R&D 분석 및 특성 평가',
    icon: 'FlaskConical',
    skills: [
      { name: 'FT-IR', level: 'Expert', description: 'Infrared spectroscopy for chemical structure identification' },
      { name: 'SEM / TEM', level: 'Advanced', description: 'Morphology & microstructural electron microscopy' },
      { name: 'Cyclic Voltammetry', level: 'Expert', description: 'Electrochemical redox reactions & voltage stability' },
      { name: 'XRPD', level: 'Advanced', description: 'X-ray powder diffraction for crystalline phase' },
      { name: 'TGA / DSC', level: 'Expert', description: 'Thermal stability, phase transition & degradation analysis' }
    ]
  },
  {
    id: 'materials',
    title: 'MATERIALS & PROCESS',
    titleKo: '소재 가공 및 공정 기술',
    icon: 'Layers',
    skills: [
      { name: 'Cathode/Anode Binder', level: 'Expert', description: 'Aqueous/NMP polymer binder synthesis & tuning' },
      { name: 'Slurry Optimization', level: 'Expert', description: 'Rheology control, dispersion & mixing profiles' },
      { name: 'Coating Process', level: 'Advanced', description: 'Slot-die coating, roll-to-roll uniformity & drying' },
      { name: 'Wet Chemical Dev', level: 'Expert', description: 'Precision chemical synthesis & formulation design' }
    ]
  }
];
