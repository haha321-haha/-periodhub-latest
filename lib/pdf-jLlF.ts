/**
 * PDF预览内容配置
 * Period Hub PDF Preview Content Configuration
 */

export interface PreviewContent {
  /** PDF资源ID */
  id: string;
  /** 预览标题 */
  title: {
    zh: string;
    en: string;
  };
  /** 核心要点 */
  keyPoints: {
    zh: string[];
    en: string[];
  };
  /** 适用场景 */
  useCase: {
    zh: string;
    en: string;
  };
  /** 预计使用时间 */
  estimatedTime: {
    zh: string;
    en: string;
  };
  /** 预览内容（30-50%的关键信息） */
  previewSections: {
    zh: PreviewSection[];
    en: PreviewSection[];
  };
  /** 完整版包含的额外内容 */
  fullVersionIncludes: {
    zh: string[];
    en: string[];
  };
}

export interface PreviewSection {
  /** 章节标题 */
  title: string;
  /** 章节内容 */
  content: string[];
  /** 是否为重点章节 */
  isHighlight?: boolean;
}

/**
 * 5个核心PDF资源的预览内容配置
 */
export const PREVIEW_CONTENT: PreviewContent[] = [
  // 1. 疼痛追踪表
  {
    id: 'pain-tracking-form',
    title: {
      zh: '疼痛追踪表',
      en: 'Pain Tracking Form'
    },
    keyPoints: {
      zh: [
        '准确记录疼痛强度和时间',
        '识别疼痛模式和触发因素',
        '为医生诊断提供重要数据',
        '制定个性化治疗方案'
      ],
      en: [
        'Accurately record pain intensity and timing',
        'Identify pain patterns and triggers',
        'Provide important data for medical diagnosis',
        'Develop personalized treatment plans'
      ]
    },
    useCase: {
      zh: '适合需要系统记录疼痛情况，准备就医或寻求专业建议的用户',
      en: 'Suitable for users who need to systematically record pain conditions for medical consultation'
    },
    estimatedTime: {
      zh: '每次记录2-3分钟，建议连续追踪3个月经周期',
      en: '2-3 minutes per record, recommended tracking for 3 menstrual cycles'
    },
    previewSections: {
      zh: [
        {
          title: '疼痛强度评分标准',
          content: [
            '0分：无疼痛',
            '1-3分：轻度疼痛，不影响日常活动',
            '4-6分：中度疼痛，影响部分日常活动',
            '7-10分：重度疼痛，严重影响生活质量'
          ],
          isHighlight: true
        },
        {
          title: '记录要点',
          content: [
            '疼痛开始时间和持续时长',
            '疼痛位置和性质描述',
            '伴随症状（恶心、头痛等）',
            '使用的缓解方法和效果'
          ]
        },
        {
          title: '医生沟通要点',
          content: [
            '整理3个月的疼痛数据趋势',
            '标注异常疼痛的具体情况',
            '记录尝试过的治疗方法'
          ]
        }
      ],
      en: [
        {
          title: 'Pain Intensity Rating Scale',
          content: [
            '0: No pain',
            '1-3: Mild pain, does not affect daily activities',
            '4-6: Moderate pain, affects some daily activities',
            '7-10: Severe pain, seriously affects quality of life'
          ],
          isHighlight: true
        },
        {
          title: 'Recording Key Points',
          content: [
            'Pain onset time and duration',
            'Pain location and nature description',
            'Accompanying symptoms (nausea, headache, etc.)',
            'Relief methods used and their effectiveness'
          ]
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '详细的疼痛评估量表',
        '症状记录模板',
        '医生沟通指导',
        '数据分析图表模板',
        '治疗效果追踪表'
      ],
      en: [
        'Detailed pain assessment scale',
        'Symptom recording templates',
        'Doctor communication guidance',
        'Data analysis chart templates',
        'Treatment effectiveness tracking'
      ]
    }
  },

  // 2. 校园应急清单
  {
    id: 'campus-emergency-checklist',
    title: {
      zh: '校园应急清单',
      en: 'Campus Emergency Checklist'
    },
    keyPoints: {
      zh: [
        '学校环境下的应急处理方案',
        '必备物品清单和存放建议',
        '与老师和同学的沟通技巧',
        '紧急情况下的求助流程'
      ],
      en: [
        'Emergency response plan for school environment',
        'Essential items checklist and storage suggestions',
        'Communication skills with teachers and classmates',
        'Help-seeking process in emergencies'
      ]
    },
    useCase: {
      zh: '适合在校学生，特别是初次经历经期或经期不规律的学生',
      en: 'Suitable for students, especially those experiencing their first period or irregular cycles'
    },
    estimatedTime: {
      zh: '准备时间15分钟，应急处理5分钟内',
      en: '15 minutes preparation time, emergency response within 5 minutes'
    },
    previewSections: {
      zh: [
        {
          title: '应急包必备物品',
          content: [
            '卫生巾/棉条（2-3片备用）',
            '湿纸巾和干纸巾',
            '一次性内裤或备用内裤',
            '小包装止痛药（如布洛芬）',
            '密封袋（处理用过的物品）'
          ],
          isHighlight: true
        },
        {
          title: '紧急情况处理步骤',
          content: [
            '1. 保持冷静，寻找最近的洗手间',
            '2. 使用应急包中的物品进行处理',
            '3. 如需帮助，联系信任的老师或同学',
            '4. 记录情况，为下次做好准备'
          ]
        }
      ],
      en: [
        {
          title: 'Emergency Kit Essentials',
          content: [
            'Sanitary pads/tampons (2-3 backup)',
            'Wet wipes and dry tissues',
            'Disposable or spare underwear',
            'Small pack pain relievers (like ibuprofen)',
            'Sealed bags (for used items)'
          ],
          isHighlight: true
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '详细的应急包组装指南',
        '不同场景的应对策略',
        '与学校护士的沟通模板',
        '家长通知模板',
        '长期管理建议'
      ],
      en: [
        'Detailed emergency kit assembly guide',
        'Response strategies for different scenarios',
        'Communication templates with school nurse',
        'Parent notification templates',
        'Long-term management advice'
      ]
    }
  },

  // 3. 经期营养计划
  {
    id: 'menstrual-cycle-nutrition-plan',
    title: {
      zh: '经期营养计划',
      en: 'Menstrual Cycle Nutrition Plan'
    },
    keyPoints: {
      zh: [
        '科学的经期营养指导方案',
        '缓解经期症状的食物选择',
        '不同经期阶段的营养需求',
        '实用的饮食计划和食谱'
      ],
      en: [
        'Scientific menstrual nutrition guidance',
        'Food choices to relieve menstrual symptoms',
        'Nutritional needs for different menstrual phases',
        'Practical meal plans and recipes'
      ]
    },
    useCase: {
      zh: '适合希望通过饮食改善经期不适，建立健康饮食习惯的用户',
      en: 'Suitable for users who want to improve menstrual discomfort through diet and establish healthy eating habits'
    },
    estimatedTime: {
      zh: '制定计划30分钟，日常执行每餐5-10分钟',
      en: '30 minutes to create plan, 5-10 minutes per meal for daily execution'
    },
    previewSections: {
      zh: [
        {
          title: '经期营养核心原则',
          content: [
            '增加铁质摄入：红肉、菠菜、豆类',
            '补充镁元素：坚果、全谷物、深绿色蔬菜',
            '摄入优质蛋白：鱼类、蛋类、豆制品',
            '避免高糖高盐食物，减少炎症反应'
          ],
          isHighlight: true
        },
        {
          title: '缓解疼痛的食物',
          content: [
            '生姜：天然抗炎，缓解疼痛',
            '鱼类：富含Omega-3，减少炎症',
            '樱桃：天然褪黑素，改善睡眠',
            '黑巧克力：释放内啡肽，改善情绪'
          ]
        }
      ],
      en: [
        {
          title: 'Core Nutrition Principles',
          content: [
            'Increase iron intake: red meat, spinach, legumes',
            'Supplement magnesium: nuts, whole grains, dark leafy greens',
            'Consume quality protein: fish, eggs, soy products',
            'Avoid high sugar and salt foods to reduce inflammation'
          ],
          isHighlight: true
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '完整的4周营养计划',
        '50+经期友好食谱',
        '营养素补充指南',
        '购物清单模板',
        '症状改善追踪表'
      ],
      en: [
        'Complete 4-week nutrition plan',
        '50+ period-friendly recipes',
        'Nutritional supplement guide',
        'Shopping list templates',
        'Symptom improvement tracking'
      ]
    }
  },

  // 4. 健康习惯清单
  {
    id: 'healthy-habits-checklist',
    title: {
      zh: '健康习惯清单',
      en: 'Healthy Habits Checklist'
    },
    keyPoints: {
      zh: [
        '建立有益于经期健康的日常习惯',
        '系统性的生活方式改善指导',
        '可追踪的习惯养成计划',
        '长期健康管理策略'
      ],
      en: [
        'Establish daily habits beneficial for menstrual health',
        'Systematic lifestyle improvement guidance',
        'Trackable habit formation plan',
        'Long-term health management strategies'
      ]
    },
    useCase: {
      zh: '适合希望通过改善生活习惯来减少经期不适的用户',
      en: 'Suitable for users who want to reduce menstrual discomfort by improving lifestyle habits'
    },
    estimatedTime: {
      zh: '习惯建立需要21-66天，每日检查5分钟',
      en: '21-66 days to establish habits, 5 minutes daily check-in'
    },
    previewSections: {
      zh: [
        {
          title: '核心健康习惯',
          content: [
            '规律作息：每天同一时间睡觉起床',
            '适量运动：每周150分钟中等强度运动',
            '充足水分：每日8-10杯水',
            '压力管理：冥想、深呼吸、瑜伽'
          ],
          isHighlight: true
        },
        {
          title: '经期特殊护理',
          content: [
            '经期前一周减少咖啡因摄入',
            '增加温热食物，避免生冷',
            '保持腹部和腰部温暖',
            '适当减少高强度运动'
          ]
        }
      ],
      en: [
        {
          title: 'Core Health Habits',
          content: [
            'Regular schedule: sleep and wake at same time daily',
            'Moderate exercise: 150 minutes weekly',
            'Adequate hydration: 8-10 glasses of water daily',
            'Stress management: meditation, deep breathing, yoga'
          ],
          isHighlight: true
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '21天习惯养成计划',
        '每日检查清单',
        '进度追踪工具',
        '习惯堆叠策略',
        '挫折应对指南'
      ],
      en: [
        '21-day habit formation plan',
        'Daily checklist',
        'Progress tracking tools',
        'Habit stacking strategies',
        'Setback recovery guide'
      ]
    }
  },

  // 5. 自然疗法效果评估表
  {
    id: 'natural-therapy-assessment',
    title: {
      zh: '自然疗法效果评估表',
      en: 'Natural Therapy Assessment'
    },
    keyPoints: {
      zh: [
        '系统评估不同自然疗法的个人效果',
        '科学记录疗法使用前后的症状变化',
        '帮助找到最适合自己的治疗组合',
        '提供个性化的疗法调整建议'
      ],
      en: [
        'Systematically assess personal effectiveness of different natural therapies',
        'Scientifically record symptom changes before and after therapy use',
        'Help find the most suitable treatment combination for you',
        'Provide personalized therapy adjustment recommendations'
      ]
    },
    useCase: {
      zh: '适用于正在尝试或计划尝试自然疗法缓解痛经的女性，帮助客观评估疗效',
      en: 'Suitable for women who are trying or planning to try natural therapies for menstrual pain relief, helping to objectively assess effectiveness'
    },
    estimatedTime: {
      zh: '首次填写15分钟，后续跟踪每次5分钟',
      en: 'Initial completion 15 minutes, follow-up tracking 5 minutes each time'
    },
    previewSections: {
      zh: [
        {
          title: '评估表使用指南',
          content: [
            '本评估表旨在帮助您系统性地评估各种自然疗法的个人效果，找到最适合自己的缓解方案。',
            '建议在开始任何新的自然疗法前先记录基线症状，然后定期跟踪变化。',
            '评估周期建议为2-4周，以获得较为准确的效果判断。'
          ],
          isHighlight: true
        },
        {
          title: '基线症状记录',
          content: [
            '疼痛强度：使用1-10分量表记录平时的疼痛程度',
            '疼痛持续时间：记录疼痛通常持续多长时间',
            '伴随症状：如头痛、恶心、情绪变化等',
            '对日常生活的影响程度：工作、学习、社交等方面'
          ]
        },
        {
          title: '自然疗法分类评估',
          content: [
            '物理疗法：热敷、按摩、运动等',
            '草药疗法：中药茶饮、草本补充剂等',
            '饮食调整：抗炎饮食、营养补充等',
            '心理技巧：冥想、呼吸法、瑜伽等'
          ]
        }
      ],
      en: [
        {
          title: 'Assessment Guide',
          content: [
            'This assessment form is designed to help you systematically evaluate the personal effectiveness of various natural therapies and find the most suitable relief solutions for you.',
            'It is recommended to record baseline symptoms before starting any new natural therapy, then regularly track changes.',
            'The assessment cycle is recommended to be 2-4 weeks to obtain relatively accurate effectiveness judgment.'
          ],
          isHighlight: true
        },
        {
          title: 'Baseline Symptom Recording',
          content: [
            'Pain intensity: Use a 1-10 scale to record your usual pain level',
            'Pain duration: Record how long the pain usually lasts',
            'Accompanying symptoms: Such as headaches, nausea, mood changes, etc.',
            'Impact on daily life: Work, study, social activities, etc.'
          ]
        },
        {
          title: 'Natural Therapy Category Assessment',
          content: [
            'Physical therapy: Heat therapy, massage, exercise, etc.',
            'Herbal therapy: TCM teas, herbal supplements, etc.',
            'Dietary adjustments: Anti-inflammatory diet, nutritional supplements, etc.',
            'Psychological techniques: Meditation, breathing methods, yoga, etc.'
          ]
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '详细的疗法效果评分系统',
        '症状变化趋势分析图表',
        '个性化疗法组合建议',
        '副作用和注意事项记录',
        '与医生沟通的专业术语对照',
        '长期跟踪和调整指导'
      ],
      en: [
        'Detailed therapy effectiveness scoring system',
        'Symptom change trend analysis charts',
        'Personalized therapy combination recommendations',
        'Side effects and precautions recording',
        'Professional terminology reference for doctor communication',
        'Long-term tracking and adjustment guidance'
      ]
    }
  },

  // 6. 特定痛经管理指南
  {
    id: 'specific-menstrual-pain-management-guide',
    title: {
      zh: '特定痛经管理指南',
      en: 'Specific Menstrual Pain Management Guide'
    },
    keyPoints: {
      zh: [
        '针对不同类型痛经的个性化方案',
        '原发性和继发性痛经的区别',
        '多种缓解方法的组合使用',
        '何时需要寻求医疗帮助'
      ],
      en: [
        'Personalized solutions for different types of menstrual pain',
        'Distinction between primary and secondary dysmenorrhea',
        'Combined use of multiple relief methods',
        'When to seek medical help'
      ]
    },
    useCase: {
      zh: '适合经历严重痛经或需要个性化管理方案的用户',
      en: 'Suitable for users experiencing severe menstrual pain or needing personalized management plans'
    },
    estimatedTime: {
      zh: '评估15分钟，制定方案30分钟，执行因人而异',
      en: '15 minutes assessment, 30 minutes plan creation, execution varies by individual'
    },
    previewSections: {
      zh: [
        {
          title: '痛经类型识别',
          content: [
            '原发性痛经：无器质性病变，通常青春期开始',
            '继发性痛经：由疾病引起，如子宫内膜异位症',
            '疼痛特征：痉挛性、胀痛、放射痛',
            '伴随症状：恶心、头痛、腹泻等'
          ],
          isHighlight: true
        },
        {
          title: '分级管理策略',
          content: [
            '轻度疼痛：热敷、轻度运动、放松技巧',
            '中度疼痛：非处方止痛药+物理疗法',
            '重度疼痛：处方药物+综合治疗',
            '紧急情况：立即就医的警告信号'
          ]
        }
      ],
      en: [
        {
          title: 'Pain Type Identification',
          content: [
            'Primary dysmenorrhea: no organic disease, usually starts in adolescence',
            'Secondary dysmenorrhea: caused by diseases like endometriosis',
            'Pain characteristics: cramping, aching, radiating pain',
            'Associated symptoms: nausea, headache, diarrhea'
          ],
          isHighlight: true
        }
      ]
    },
    fullVersionIncludes: {
      zh: [
        '详细的痛经评估工具',
        '个性化治疗方案模板',
        '药物使用指导',
        '医生沟通准备清单',
        '长期管理计划'
      ],
      en: [
        'Detailed pain assessment tools',
        'Personalized treatment plan templates',
        'Medication usage guidance',
        'Doctor communication preparation checklist',
        'Long-term management plan'
      ]
    }
  }
];

/**
 * 根据ID获取预览内容
 */
export function getPreviewContentById(id: string): PreviewContent | undefined {
  return PREVIEW_CONTENT.find(content => content.id === id);
}

/**
 * 获取所有可预览的资源ID
 */
export function getPreviewableResourceIds(): string[] {
  return PREVIEW_CONTENT.map(content => content.id);
}
