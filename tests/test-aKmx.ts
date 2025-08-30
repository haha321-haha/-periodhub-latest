import { ConstitutionType, ConstitutionAnswer } from '../types/constitution';

// 痛经专项穴位建议
export interface MenstrualPainAcupoint {
  name: string;
  description: string;
}

// 文章推荐接口
export interface RecommendedArticle {
  title: string;
  description: string;
  category: string;
  link: string;
}

// 基于体质类型的痛经穴位建议
export const menstrualPainAcupoints: Record<string, Record<ConstitutionType, MenstrualPainAcupoint[]>> = {
  zh: {
    balanced: [
      { name: '三阴交', description: '调理气血，缓解轻微经期不适' },
      { name: '血海', description: '活血调经，维持经期平衡' }
    ],
    qi_deficiency: [
      { name: '气海', description: '补益元气，缓解疲劳型痛经' },
      { name: '足三里', description: '健脾益气，改善体质虚弱' },
      { name: '关元', description: '温补肾阳，增强体质' }
    ],
    yang_deficiency: [
      { name: '关元', description: '温阳散寒，缓解冷痛' },
      { name: '神阙', description: '温中散寒，改善宫寒症状' },
      { name: '肾俞', description: '补肾壮阳，温暖下焦' }
    ],
    yin_deficiency: [
      { name: '太溪', description: '滋阴补肾，缓解燥热症状' },
      { name: '三阴交', description: '滋阴养血，调理月经' },
      { name: '照海', description: '滋肾阴，清虚热' }
    ],
    phlegm_dampness: [
      { name: '丰隆', description: '化痰除湿，缓解腹胀' },
      { name: '阴陵泉', description: '健脾利湿，消除水肿' },
      { name: '中脘', description: '健脾和胃，化湿消胀' }
    ],
    damp_heat: [
      { name: '阴陵泉', description: '清热利湿，缓解湿热症状' },
      { name: '曲池', description: '清热解毒，凉血止痛' },
      { name: '太冲', description: '疏肝清热，调理情绪' }
    ],
    blood_stasis: [
      { name: '血海', description: '活血化瘀，缓解刺痛' },
      { name: '膈俞', description: '活血化瘀，通络止痛' },
      { name: '次髎', description: '活血通络，缓解盆腔瘀血' }
    ],
    qi_stagnation: [
      { name: '太冲', description: '疏肝理气，缓解绞痛' },
      { name: '期门', description: '疏肝解郁，调理情绪' },
      { name: '行间', description: '疏肝泄热，缓解烦躁' }
    ],
    special_diathesis: [
      { name: '百会', description: '调节神经，缓解过敏症状' },
      { name: '风池', description: '疏风解表，调节免疫' },
      { name: '合谷', description: '调气止痛，增强抵抗力' }
    ]
  },
  en: {
    balanced: [
      { name: 'Sanyinjiao (SP6)', description: 'Regulates qi and blood, relieves mild menstrual discomfort' },
      { name: 'Xuehai (SP10)', description: 'Activates blood circulation, maintains menstrual balance' }
    ],
    qi_deficiency: [
      { name: 'Qihai (CV6)', description: 'Tonifies primordial qi, relieves fatigue-type dysmenorrhea' },
      { name: 'Zusanli (ST36)', description: 'Strengthens spleen and qi, improves weak constitution' },
      { name: 'Guanyuan (CV4)', description: 'Warms and tonifies kidney yang, strengthens constitution' }
    ],
    yang_deficiency: [
      { name: 'Guanyuan (CV4)', description: 'Warms yang and disperses cold, relieves cold pain' },
      { name: 'Shenque (CV8)', description: 'Warms the center and disperses cold, improves uterine cold' },
      { name: 'Shenshu (BL23)', description: 'Tonifies kidney and strengthens yang, warms lower jiao' }
    ],
    yin_deficiency: [
      { name: 'Taixi (KI3)', description: 'Nourishes yin and tonifies kidney, relieves heat symptoms' },
      { name: 'Sanyinjiao (SP6)', description: 'Nourishes yin and blood, regulates menstruation' },
      { name: 'Zhaohai (KI6)', description: 'Nourishes kidney yin, clears deficiency heat' }
    ],
    phlegm_dampness: [
      { name: 'Fenglong (ST40)', description: 'Transforms phlegm and eliminates dampness, relieves bloating' },
      { name: 'Yinlingquan (SP9)', description: 'Strengthens spleen and drains dampness, reduces edema' },
      { name: 'Zhongwan (CV12)', description: 'Strengthens spleen and stomach, transforms dampness' }
    ],
    damp_heat: [
      { name: 'Yinlingquan (SP9)', description: 'Clears heat and drains dampness, relieves damp-heat symptoms' },
      { name: 'Quchi (LI11)', description: 'Clears heat and detoxifies, cools blood and stops pain' },
      { name: 'Taichong (LR3)', description: 'Soothes liver and clears heat, regulates emotions' }
    ],
    blood_stasis: [
      { name: 'Xuehai (SP10)', description: 'Activates blood and resolves stasis, relieves stabbing pain' },
      { name: 'Geshu (BL17)', description: 'Activates blood and resolves stasis, unblocks meridians' },
      { name: 'Ciliao (BL32)', description: 'Activates blood and unblocks meridians, relieves pelvic stasis' }
    ],
    qi_stagnation: [
      { name: 'Taichong (LR3)', description: 'Soothes liver and regulates qi, relieves cramping pain' },
      { name: 'Qimen (LR14)', description: 'Soothes liver and relieves depression, regulates emotions' },
      { name: 'Xingjian (LR2)', description: 'Soothes liver and drains heat, relieves irritability' }
    ],
    special_diathesis: [
      { name: 'Baihui (GV20)', description: 'Regulates nervous system, relieves allergic symptoms' },
      { name: 'Fengchi (GB20)', description: 'Expels wind and releases exterior, regulates immunity' },
      { name: 'Hegu (LI4)', description: 'Regulates qi and stops pain, strengthens resistance' }
    ]
  }
};

// 基于体质类型的生活方式建议
export const menstrualPainLifestyleTips: Record<string, Record<ConstitutionType, string[]>> = {
  zh: {
    balanced: [
      '保持规律的作息时间',
      '适量运动，如散步、瑜伽',
      '经期注意保暖，避免受凉',
      '保持心情愉快，避免过度紧张'
    ],
    qi_deficiency: [
      '充足睡眠，避免熬夜',
      '选择温和的运动，避免剧烈活动',
      '经期多休息，减少体力消耗',
      '注意营养补充，多吃补气食物'
    ],
    yang_deficiency: [
      '注意保暖，特别是腹部和腰部',
      '避免生冷食物，多喝温开水',
      '适当进行温和的有氧运动',
      '经期可用热水袋敷腹部'
    ],
    yin_deficiency: [
      '避免熬夜，保证充足睡眠',
      '减少辛辣刺激性食物',
      '多吃滋阴润燥的食物',
      '保持情绪稳定，避免急躁'
    ],
    phlegm_dampness: [
      '控制体重，避免过度肥胖',
      '减少甜腻食物的摄入',
      '增加有氧运动，促进代谢',
      '保持环境干燥，避免潮湿'
    ],
    damp_heat: [
      '饮食清淡，避免油腻食物',
      '多吃清热利湿的食物',
      '保持心情舒畅，避免急躁',
      '注意个人卫生，保持清洁'
    ],
    blood_stasis: [
      '适当运动，促进血液循环',
      '避免久坐不动',
      '经期可进行轻柔按摩',
      '保持情绪稳定，避免生气'
    ],
    qi_stagnation: [
      '学会情绪管理，保持心情舒畅',
      '适当进行舒缓运动，如瑜伽',
      '避免压力过大，学会放松',
      '可以听音乐、冥想来缓解压力'
    ],
    special_diathesis: [
      '避免接触过敏原',
      '增强体质，提高免疫力',
      '注意环境卫生，减少刺激',
      '必要时寻求专业医疗建议'
    ]
  },
  en: {
    balanced: [
      'Maintain regular sleep schedule',
      'Moderate exercise like walking and yoga',
      'Keep warm during menstruation, avoid cold',
      'Stay positive and avoid excessive stress'
    ],
    qi_deficiency: [
      'Get adequate sleep, avoid staying up late',
      'Choose gentle exercises, avoid intense activities',
      'Rest more during menstruation, reduce physical exertion',
      'Focus on nutrition, eat qi-tonifying foods'
    ],
    yang_deficiency: [
      'Keep warm, especially abdomen and lower back',
      'Avoid cold foods, drink warm water',
      'Engage in gentle aerobic exercises',
      'Use heating pad on abdomen during menstruation'
    ],
    yin_deficiency: [
      'Avoid staying up late, ensure adequate sleep',
      'Reduce spicy and irritating foods',
      'Eat yin-nourishing and moistening foods',
      'Maintain emotional stability, avoid irritability'
    ],
    phlegm_dampness: [
      'Control weight, avoid excessive obesity',
      'Reduce intake of sweet and greasy foods',
      'Increase aerobic exercise to boost metabolism',
      'Keep environment dry, avoid humidity'
    ],
    damp_heat: [
      'Eat light diet, avoid greasy foods',
      'Eat heat-clearing and dampness-draining foods',
      'Stay calm and avoid irritability',
      'Maintain personal hygiene and cleanliness'
    ],
    blood_stasis: [
      'Exercise appropriately to promote blood circulation',
      'Avoid prolonged sitting',
      'Gentle massage during menstruation',
      'Maintain emotional stability, avoid anger'
    ],
    qi_stagnation: [
      'Learn emotional management, stay cheerful',
      'Engage in soothing exercises like yoga',
      'Avoid excessive stress, learn to relax',
      'Listen to music or meditate to relieve stress'
    ],
    special_diathesis: [
      'Avoid contact with allergens',
      'Strengthen constitution and boost immunity',
      'Pay attention to environmental hygiene, reduce irritation',
      'Seek professional medical advice when necessary'
    ]
  }
};

// 基于体质和症状的文章推荐
export const getRecommendedArticles = (
  constitutionType: ConstitutionType,
  answers: ConstitutionAnswer[],
  locale: string
): RecommendedArticle[] => {
  const baseArticles: Record<string, RecommendedArticle[]> = {
    zh: [
      {
        title: '痛经的自然与物理疗法综合指南：15种科学验证的缓解方法',
        description: '详细介绍热敷、按摩、瑜伽等自然疗法，以及穴位按摩的具体操作方法，帮助您自然缓解痛经。',
        category: '自然疗法',
        link: '/zh/articles/natural-physical-therapy-comprehensive-guide'
      },
      {
        title: '痛经药物治疗专业指南：NSAIDs安全用药与剂量计算',
        description: '专业的痛经药物治疗指南，包括布洛芬、萘普生等NSAIDs的安全用药方法和剂量计算。',
        category: '药物治疗',
        link: '/zh/articles/nsaid-menstrual-pain-professional-guide'
      }
    ],
    en: [
      {
        title: 'Comprehensive Guide to Natural and Physical Therapies for Menstrual Pain',
        description: 'Detailed introduction to natural therapies such as heat therapy, massage, yoga, and specific acupoint massage techniques to naturally relieve menstrual pain.',
        category: 'Natural Therapy',
        link: '/en/articles/natural-physical-therapy-comprehensive-guide'
      },
      {
        title: 'Professional Guide to Menstrual Pain Medication: Safe Use of NSAIDs and Dosage Calculation',
        description: 'Professional guide to menstrual pain medication, including safe use and dosage calculation of NSAIDs like ibuprofen and naproxen.',
        category: 'Medical Treatment',
        link: '/en/articles/nsaid-menstrual-pain-professional-guide'
      }
    ]
  };

  // 基于体质类型添加特定文章推荐
  const constitutionSpecificArticles: Record<string, Partial<Record<ConstitutionType, RecommendedArticle[]>>> = {
    zh: {
      qi_deficiency: [
        {
          title: '气虚体质痛经调理：补气养血的中医方案',
          description: '针对气虚体质的痛经特点，提供补气养血的中医调理方案，包括食疗、穴位按摩等。',
          category: '体质调理',
          link: '/zh/interactive-tools/constitution-test'
        }
      ],
      yang_deficiency: [
        {
          title: '阳虚体质痛经调理：温阳散寒的调理方法',
          description: '专门针对阳虚体质的痛经调理，重点介绍温阳散寒的方法和注意事项。',
          category: '体质调理',
          link: '/zh/interactive-tools/constitution-test'
        }
      ],
      blood_stasis: [
        {
          title: '血瘀体质痛经调理：活血化瘀的有效方法',
          description: '针对血瘀体质的痛经特点，提供活血化瘀的调理方案和生活指导。',
          category: '体质调理',
          link: '/zh/interactive-tools/constitution-test'
        }
      ]
    },
    en: {
      qi_deficiency: [
        {
          title: 'Qi Deficiency Constitution Menstrual Pain Management: TCM Solutions for Qi and Blood Tonification',
          description: 'Targeted TCM solutions for qi deficiency constitution menstrual pain, including dietary therapy and acupoint massage.',
          category: 'Constitution Care',
          link: '/en/interactive-tools/constitution-test'
        }
      ],
      yang_deficiency: [
        {
          title: 'Yang Deficiency Constitution Menstrual Pain Management: Warming Yang and Dispersing Cold',
          description: 'Specialized care for yang deficiency constitution menstrual pain, focusing on warming yang and dispersing cold methods.',
          category: 'Constitution Care',
          link: '/en/interactive-tools/constitution-test'
        }
      ],
      blood_stasis: [
        {
          title: 'Blood Stasis Constitution Menstrual Pain Management: Effective Blood Circulation Methods',
          description: 'Targeted solutions for blood stasis constitution menstrual pain, providing blood circulation and stasis resolution guidance.',
          category: 'Constitution Care',
          link: '/en/interactive-tools/constitution-test'
        }
      ]
    }
  };

  const articles = [...(baseArticles[locale] || baseArticles.zh)];
  
  // 添加体质特定的文章
  const constitutionArticles = constitutionSpecificArticles[locale]?.[constitutionType];
  if (constitutionArticles) {
    articles.push(...constitutionArticles);
  }

  return articles.slice(0, 3); // 返回最多3篇文章
};

// 社交沟通模板
export interface CommunicationTemplate {
  scenario: string;
  templates: {
    title: string;
    content: string;
    tone: 'casual' | 'formal' | 'intimate';
  }[];
}

export const communicationTemplates: Record<string, CommunicationTemplate[]> = {
  zh: [
    {
      scenario: '与伴侣沟通',
      templates: [
        {
          title: '温和告知',
          content: '亲爱的，我今天经期疼痛比较严重，可能需要多休息一下。如果我看起来不太舒服，请不要担心，这是正常的生理反应。',
          tone: 'intimate'
        },
        {
          title: '寻求理解',
          content: '我现在有些痛经，可能情绪会有些波动，不是因为你做错了什么。能给我一些时间和空间吗？',
          tone: 'intimate'
        },
        {
          title: '请求帮助',
          content: '我现在肚子很痛，能帮我准备一杯热水吗？或者陪我安静地待一会儿就好。',
          tone: 'intimate'
        }
      ]
    },
    {
      scenario: '与朋友沟通',
      templates: [
        {
          title: '约会改期',
          content: '不好意思，我今天身体不太舒服（经期疼痛），可能没办法保持最佳状态。我们能改到下次吗？',
          tone: 'casual'
        },
        {
          title: '聚会参与',
          content: '我会参加聚会，但可能需要早点回家休息。如果我看起来有点疲惫，请理解一下～',
          tone: 'casual'
        },
        {
          title: '寻求支持',
          content: '姐妹，我现在痛经痛得厉害，你有什么好的缓解方法吗？或者就是想找人聊聊。',
          tone: 'casual'
        }
      ]
    },
    {
      scenario: '与同事/领导沟通',
      templates: [
        {
          title: '请假申请',
          content: '您好，我今天身体不适，可能需要请假半天/一天。我会尽快处理紧急工作，其他事务明天补上。',
          tone: 'formal'
        },
        {
          title: '工作调整',
          content: '不好意思，我今天身体有些不适，可能工作效率会受影响。如果有紧急事务，请优先安排。',
          tone: 'formal'
        },
        {
          title: '会议参与',
          content: '我可能需要在会议中途短暂离开一下，不是对会议内容不感兴趣，而是身体原因。',
          tone: 'formal'
        }
      ]
    }
  ],
  en: [
    {
      scenario: 'Communicating with Partner',
      templates: [
        {
          title: 'Gentle Notification',
          content: 'Honey, I\'m experiencing severe menstrual cramps today and might need some extra rest. If I seem uncomfortable, please don\'t worry - it\'s a normal physiological response.',
          tone: 'intimate'
        },
        {
          title: 'Seeking Understanding',
          content: 'I\'m having period pain right now and my emotions might be a bit up and down. It\'s not because you did anything wrong. Could you give me some time and space?',
          tone: 'intimate'
        },
        {
          title: 'Asking for Help',
          content: 'I\'m having really bad cramps right now. Could you help me get some hot water? Or just stay with me quietly for a while.',
          tone: 'intimate'
        }
      ]
    },
    {
      scenario: 'Communicating with Friends',
      templates: [
        {
          title: 'Rescheduling Dates',
          content: 'Sorry, I\'m not feeling well today (period pain) and might not be at my best. Could we reschedule for another time?',
          tone: 'casual'
        },
        {
          title: 'Party Participation',
          content: 'I\'ll join the party, but I might need to head home early to rest. Please understand if I seem a bit tired~',
          tone: 'casual'
        },
        {
          title: 'Seeking Support',
          content: 'Girl, I\'m having terrible period cramps right now. Do you have any good relief methods? Or I just want someone to talk to.',
          tone: 'casual'
        }
      ]
    },
    {
      scenario: 'Communicating with Colleagues/Boss',
      templates: [
        {
          title: 'Leave Request',
          content: 'Hello, I\'m not feeling well today and may need to take half a day/full day off. I\'ll handle urgent work as soon as possible and catch up on other tasks tomorrow.',
          tone: 'formal'
        },
        {
          title: 'Work Adjustment',
          content: 'Sorry, I\'m feeling a bit unwell today and my work efficiency might be affected. Please prioritize urgent matters if any.',
          tone: 'formal'
        },
        {
          title: 'Meeting Participation',
          content: 'I might need to step out briefly during the meeting. It\'s not because I\'m not interested in the content, but due to health reasons.',
          tone: 'formal'
        }
      ]
    }
  ]
};
