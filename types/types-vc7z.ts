import { ConstitutionRecommendations, ConstitutionType } from '../types/constitution';

export const constitutionRecommendations: Record<string, Record<ConstitutionType, ConstitutionRecommendations>> = {
  zh: {
    balanced: {
      acupoints: {
        primaryPoints: [
          {
            name: '足三里',
            location: '膝盖下3寸，胫骨外侧1横指',
            function: '调理脾胃，增强体质',
            method: '顺时针按揉3-5分钟'
          },
          {
            name: '关元',
            location: '肚脐下3寸',
            function: '培元固本，调理气血',
            method: '温和按压2-3分钟'
          }
        ],
        supportingPoints: [
          {
            name: '百会',
            location: '头顶正中',
            function: '提神醒脑，调节情绪',
            method: '轻柔按压1-2分钟'
          }
        ],
        massageTechnique: '温和按摩，以酸胀感为度',
        frequency: '每日1-2次',
        duration: '每次10-15分钟'
      },
      diet: {
        beneficial: ['五谷杂粮', '新鲜蔬果', '优质蛋白', '适量坚果'],
        avoid: ['过度油腻', '过度辛辣', '过度生冷'],
        principles: ['饮食均衡', '定时定量', '细嚼慢咽'],
        sampleMeals: ['小米粥配青菜', '蒸蛋羹', '清炖鸡汤', '时令水果']
      },
      lifestyle: {
        exercise: ['太极拳', '八段锦', '慢跑', '瑜伽'],
        sleep: ['规律作息', '晚上11点前入睡', '保证7-8小时睡眠'],
        emotional: ['保持心情愉快', '适度社交', '培养兴趣爱好'],
        seasonal: ['春季养肝', '夏季养心', '秋季养肺', '冬季养肾']
      },
      moxibustion: {
        points: ['足三里', '关元'],
        timing: '每周2-3次',
        duration: '每穴15-20分钟',
        frequency: '保健为主',
        precautions: ['注意防烫', '孕期禁用', '饭后1小时进行']
      }
    },
    qi_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: '气海',
            location: '肚脐下1.5寸',
            function: '补气益气，增强体力',
            method: '顺时针按揉5-8分钟'
          },
          {
            name: '足三里',
            location: '膝盖下3寸，胫骨外侧1横指',
            function: '健脾益气，增强消化',
            method: '重点按揉5-10分钟'
          },
          {
            name: '脾俞',
            location: '第11胸椎棘突下旁开1.5寸',
            function: '健脾益气，助消化',
            method: '按压配合艾灸效果更佳'
          }
        ],
        supportingPoints: [
          {
            name: '百会',
            location: '头顶正中',
            function: '升阳举陷，提神益气',
            method: '轻柔提拉按压'
          },
          {
            name: '太冲',
            location: '足背第1、2跖骨间',
            function: '疏肝理气，调和气血',
            method: '按压2-3分钟'
          }
        ],
        massageTechnique: '温和持续按压，避免过度用力',
        frequency: '每日2次，早晚各一次',
        duration: '每次15-20分钟'
      },
      diet: {
        beneficial: ['黄芪', '党参', '山药', '大枣', '桂圆', '小米', '南瓜', '胡萝卜'],
        avoid: ['生冷食物', '过度油腻', '难消化食物', '过量生萝卜'],
        principles: ['温补脾胃', '少食多餐', '细嚼慢咽', '避免过饱'],
        sampleMeals: ['黄芪炖鸡汤', '山药小米粥', '红枣桂圆茶', '蒸蛋羹']
      },
      lifestyle: {
        exercise: ['八段锦', '太极拳', '散步', '轻度瑜伽'],
        sleep: ['早睡早起', '午休30分钟', '避免熬夜'],
        emotional: ['保持乐观', '避免过度思虑', '适度放松'],
        seasonal: ['春夏养阳', '秋冬进补', '避免过度劳累']
      },
      moxibustion: {
        points: ['气海', '关元', '足三里', '脾俞'],
        timing: '每日或隔日',
        duration: '每穴20-30分钟',
        frequency: '连续调理2-3个月',
        precautions: ['温度适中', '避免烫伤', '经期减量']
      }
    },
    yang_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: '命门',
            location: '第2腰椎棘突下',
            function: '温补肾阳，强腰健肾',
            method: '温热按压配合艾灸'
          },
          {
            name: '肾俞',
            location: '第2腰椎棘突下旁开1.5寸',
            function: '补肾壮阳，强腰膝',
            method: '双手同时按压'
          },
          {
            name: '关元',
            location: '肚脐下3寸',
            function: '温补下焦，固本培元',
            method: '顺时针按揉配合艾灸'
          }
        ],
        supportingPoints: [
          {
            name: '涌泉',
            location: '足底前1/3凹陷处',
            function: '温补肾阳，引火归元',
            method: '睡前按摩至发热'
          }
        ],
        massageTechnique: '温热按摩，配合艾灸效果更佳',
        frequency: '每日2次',
        duration: '每次20-30分钟'
      },
      diet: {
        beneficial: ['羊肉', '韭菜', '生姜', '肉桂', '核桃', '栗子', '黑豆', '枸杞'],
        avoid: ['生冷食物', '寒性水果', '冰饮', '苦寒药物'],
        principles: ['温补阳气', '忌食生冷', '适当进补', '温热为主'],
        sampleMeals: ['当归生姜羊肉汤', '韭菜炒蛋', '核桃粥', '枸杞茶']
      },
      lifestyle: {
        exercise: ['慢跑', '太极拳', '八段锦', '适度力量训练'],
        sleep: ['保暖睡眠', '避免夜间受凉', '充足睡眠'],
        emotional: ['保持积极心态', '避免过度忧虑'],
        seasonal: ['春夏养阳', '秋冬重点保暖', '避免贪凉']
      },
      moxibustion: {
        points: ['命门', '肾俞', '关元', '足三里'],
        timing: '每日艾灸',
        duration: '每穴30-40分钟',
        frequency: '长期调理',
        precautions: ['注意保暖', '避免受风', '经期谨慎使用']
      }
    },
    yin_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: '太溪',
            location: '内踝后方，跟腱前凹陷处',
            function: '滋阴补肾，清虚热',
            method: '轻柔按揉3-5分钟'
          },
          {
            name: '三阴交',
            location: '内踝上3寸，胫骨内侧缘后方',
            function: '滋阴养血，调经止痛',
            method: '按压至酸胀感'
          },
          {
            name: '肾俞',
            location: '第2腰椎棘突下旁开1.5寸',
            function: '补肾滋阴，强腰膝',
            method: '轻柔按压，避免过重'
          }
        ],
        supportingPoints: [
          {
            name: '神门',
            location: '腕横纹尺侧端，尺侧腕屈肌腱桡侧凹陷处',
            function: '宁心安神，改善睡眠',
            method: '睡前按压2-3分钟'
          }
        ],
        massageTechnique: '轻柔按摩，避免过度刺激',
        frequency: '每日1-2次',
        duration: '每次10-15分钟'
      },
      diet: {
        beneficial: ['银耳', '百合', '枸杞', '黑芝麻', '蜂蜜', '梨', '葡萄', '鸭肉'],
        avoid: ['辛辣食物', '煎炸食品', '温燥食物', '过量咖啡'],
        principles: ['滋阴润燥', '清淡饮食', '多饮水', '少食辛辣'],
        sampleMeals: ['银耳莲子汤', '百合粥', '蜂蜜柠檬水', '清蒸鱼']
      },
      lifestyle: {
        exercise: ['瑜伽', '太极拳', '游泳', '散步'],
        sleep: ['规律作息', '创造安静睡眠环境', '睡前放松'],
        emotional: ['保持心境平和', '学会释放压力', '冥想练习'],
        seasonal: ['秋冬滋阴', '避免过度出汗', '注意补水']
      },
      moxibustion: {
        points: ['太溪', '三阴交'],
        timing: '隔日进行',
        duration: '每穴15-20分钟',
        frequency: '温和调理',
        precautions: ['温度不宜过高', '时间不宜过长', '注意补水']
      }
    },
    phlegm_dampness: {
      acupoints: {
        primaryPoints: [
          {
            name: '丰隆',
            location: '外踝上8寸，胫骨前缘外侧1.5寸',
            function: '化痰除湿，健脾和胃',
            method: '重点按揉5-8分钟'
          },
          {
            name: '阴陵泉',
            location: '胫骨内侧髁下方凹陷处',
            function: '健脾利湿，消肿',
            method: '按压至酸胀感明显'
          },
          {
            name: '中脘',
            location: '肚脐上4寸',
            function: '健脾和胃，化湿消痰',
            method: '顺时针按揉'
          }
        ],
        supportingPoints: [
          {
            name: '天枢',
            location: '肚脐旁开2寸',
            function: '调理肠胃，消除腹胀',
            method: '双侧同时按揉'
          }
        ],
        massageTechnique: '稍重按压，以促进气血运行',
        frequency: '每日2-3次',
        duration: '每次15-20分钟'
      },
      diet: {
        beneficial: ['薏米', '冬瓜', '白萝卜', '陈皮', '山楂', '荷叶', '绿豆'],
        avoid: ['甜腻食物', '油炸食品', '肥肉', '奶制品过量'],
        principles: ['清淡饮食', '少油少盐', '控制甜食', '多食化湿食物'],
        sampleMeals: ['薏米红豆汤', '冬瓜汤', '山楂茶', '清蒸蔬菜']
      },
      lifestyle: {
        exercise: ['快走', '慢跑', '游泳', '有氧运动'],
        sleep: ['避免午睡过长', '保持规律作息'],
        emotional: ['保持积极心态', '避免过度思虑'],
        seasonal: ['春夏祛湿', '秋冬温补', '避免潮湿环境']
      },
      moxibustion: {
        points: ['丰隆', '阴陵泉', '中脘'],
        timing: '每日或隔日',
        duration: '每穴20-25分钟',
        frequency: '坚持调理',
        precautions: ['配合运动', '控制饮食', '保持环境干燥']
      }
    },
    damp_heat: {
      acupoints: {
        primaryPoints: [
          {
            name: '曲池',
            location: '肘横纹外侧端，屈肘时肘横纹头',
            function: '清热解毒，祛湿热',
            method: '按压至酸胀感'
          },
          {
            name: '阴陵泉',
            location: '胫骨内侧髁下方凹陷处',
            function: '清热利湿，健脾',
            method: '重点按揉'
          },
          {
            name: '大椎',
            location: '第7颈椎棘突下',
            function: '清热解表，调节免疫',
            method: '轻柔按压'
          }
        ],
        supportingPoints: [
          {
            name: '合谷',
            location: '手背第1、2掌骨间',
            function: '清热解毒，调理面部',
            method: '按压2-3分钟'
          }
        ],
        massageTechnique: '适中力度，以清热为主',
        frequency: '每日1-2次',
        duration: '每次10-15分钟'
      },
      diet: {
        beneficial: ['绿豆', '苦瓜', '黄瓜', '西瓜', '薏米', '茯苓', '莲子心'],
        avoid: ['辛辣食物', '油炸食品', '烧烤', '酒类', '甜腻食物'],
        principles: ['清热利湿', '清淡饮食', '多饮水', '少食肥甘'],
        sampleMeals: ['绿豆汤', '苦瓜炒蛋', '薏米粥', '莲子心茶']
      },
      lifestyle: {
        exercise: ['游泳', '瑜伽', '太极拳', '避免剧烈运动'],
        sleep: ['保持凉爽睡眠环境', '规律作息'],
        emotional: ['保持心境平和', '避免急躁情绪'],
        seasonal: ['夏季重点清热', '避免暴晒', '保持环境通风']
      },
      moxibustion: {
        points: ['阴陵泉'],
        timing: '谨慎使用',
        duration: '时间较短',
        frequency: '以按摩为主',
        precautions: ['避免过热', '以清热为主', '可用刮痧代替']
      }
    },
    blood_stasis: {
      acupoints: {
        primaryPoints: [
          {
            name: '血海',
            location: '髌骨内上缘上2寸',
            function: '活血化瘀，调经止痛',
            method: '按揉至局部发热'
          },
          {
            name: '三阴交',
            location: '内踝上3寸，胫骨内侧缘后方',
            function: '活血调经，化瘀止痛',
            method: '重点按压'
          },
          {
            name: '膈俞',
            location: '第7胸椎棘突下旁开1.5寸',
            function: '活血化瘀，宽胸理气',
            method: '按压配合艾灸'
          }
        ],
        supportingPoints: [
          {
            name: '太冲',
            location: '足背第1、2跖骨间',
            function: '疏肝理气，活血化瘀',
            method: '按压至酸胀感'
          }
        ],
        massageTechnique: '适度用力，以活血为主',
        frequency: '每日2次',
        duration: '每次15-20分钟'
      },
      diet: {
        beneficial: ['山楂', '红花', '当归', '川芎', '红糖', '黑木耳', '洋葱'],
        avoid: ['生冷食物', '油腻食物', '过咸食物'],
        principles: ['活血化瘀', '温通经络', '适当温补'],
        sampleMeals: ['山楂茶', '当归炖鸡', '黑木耳炒菜', '红糖姜茶']
      },
      lifestyle: {
        exercise: ['慢跑', '太极拳', '瑜伽', '适度有氧运动'],
        sleep: ['保持规律作息', '避免熬夜'],
        emotional: ['保持心情愉快', '避免情绪郁结'],
        seasonal: ['春季疏肝', '注意保暖', '避免受寒']
      },
      moxibustion: {
        points: ['血海', '三阴交', '膈俞'],
        timing: '每日或隔日',
        duration: '每穴20-25分钟',
        frequency: '经期前后重点调理',
        precautions: ['经期谨慎使用', '注意温度', '配合运动']
      }
    },
    qi_stagnation: {
      acupoints: {
        primaryPoints: [
          {
            name: '太冲',
            location: '足背第1、2跖骨间',
            function: '疏肝解郁，调畅气机',
            method: '按压至酸胀感明显'
          },
          {
            name: '期门',
            location: '第6肋间隙，乳头直下',
            function: '疏肝理气，宽胸解郁',
            method: '轻柔按揉'
          },
          {
            name: '神门',
            location: '腕横纹尺侧端',
            function: '宁心安神，调节情绪',
            method: '睡前重点按压'
          }
        ],
        supportingPoints: [
          {
            name: '印堂',
            location: '两眉头连线中点',
            function: '宁心安神，开窍醒脑',
            method: '轻柔按压'
          }
        ],
        massageTechnique: '轻柔舒缓，以疏通为主',
        frequency: '每日2-3次',
        duration: '每次10-15分钟'
      },
      diet: {
        beneficial: ['玫瑰花', '柠檬', '橙子', '佛手', '香橼', '薄荷', '茉莉花'],
        avoid: ['过于油腻', '难消化食物', '过量咖啡因'],
        principles: ['疏肝理气', '清淡饮食', '适量芳香类食物'],
        sampleMeals: ['玫瑰花茶', '柠檬蜂蜜水', '薄荷茶', '清淡蔬菜']
      },
      lifestyle: {
        exercise: ['瑜伽', '太极拳', '散步', '深呼吸练习'],
        sleep: ['规律作息', '睡前放松', '创造安静环境'],
        emotional: ['学会释放压力', '培养兴趣爱好', '适当社交'],
        seasonal: ['春季重点疏肝', '保持心情愉快', '避免情绪波动']
      },
      moxibustion: {
        points: ['太冲', '神门'],
        timing: '情绪不佳时',
        duration: '每穴15-20分钟',
        frequency: '按需调理',
        precautions: ['温和施灸', '配合情绪调节', '避免过度刺激']
      }
    },
    special_diathesis: {
      acupoints: {
        primaryPoints: [
          {
            name: '风池',
            location: '枕骨下，胸锁乳突肌与斜方肌间凹陷处',
            function: '祛风解表，增强抵抗力',
            method: '轻柔按压'
          },
          {
            name: '足三里',
            location: '膝盖下3寸，胫骨外侧1横指',
            function: '调理脾胃，增强体质',
            method: '温和按揉'
          }
        ],
        supportingPoints: [
          {
            name: '迎香',
            location: '鼻翼外缘中点旁',
            function: '通鼻窍，防过敏',
            method: '轻柔按揉'
          }
        ],
        massageTechnique: '温和按摩，避免过度刺激',
        frequency: '每日1次',
        duration: '每次10分钟'
      },
      diet: {
        beneficial: ['益生菌食品', '新鲜蔬果', '优质蛋白', '抗过敏食物'],
        avoid: ['已知过敏原', '添加剂多的食品', '刺激性食物'],
        principles: ['避免过敏原', '增强免疫力', '营养均衡'],
        sampleMeals: ['酸奶', '新鲜水果', '清淡蔬菜', '白肉类']
      },
      lifestyle: {
        exercise: ['适度运动', '避免过敏环境', '增强体质'],
        sleep: ['保持充足睡眠', '避免过敏原'],
        emotional: ['保持积极心态', '学会应对过敏'],
        seasonal: ['根据季节调整', '预防过敏发作']
      },
      moxibustion: {
        points: ['足三里'],
        timing: '谨慎使用',
        duration: '时间较短',
        frequency: '个体化调理',
        precautions: ['避免过敏反应', '个体化方案', '医生指导下进行']
      }
    }
  },
  en: {
    balanced: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Zusanli (ST36)',
            location: '3 cun below the knee, 1 finger-width lateral to the tibia',
            function: 'Regulate spleen and stomach, strengthen constitution',
            method: 'Massage clockwise for 3-5 minutes'
          },
          {
            name: 'Guanyuan (CV4)',
            location: '3 cun below the navel',
            function: 'Strengthen vitality, regulate qi and blood',
            method: 'Gentle pressure for 2-3 minutes'
          }
        ],
        supportingPoints: [
          {
            name: 'Baihui (GV20)',
            location: 'Top center of the head',
            function: 'Refresh mind, regulate emotions',
            method: 'Gentle pressure for 1-2 minutes'
          }
        ],
        massageTechnique: 'Gentle massage until feeling soreness',
        frequency: '1-2 times daily',
        duration: '10-15 minutes each session'
      },
      diet: {
        beneficial: ['Whole grains', 'Fresh vegetables and fruits', 'Quality protein', 'Moderate nuts'],
        avoid: ['Excessive greasy food', 'Excessive spicy food', 'Excessive cold food'],
        principles: ['Balanced diet', 'Regular meals', 'Chew slowly'],
        sampleMeals: ['Millet porridge with vegetables', 'Steamed egg custard', 'Clear chicken soup', 'Seasonal fruits']
      },
      lifestyle: {
        exercise: ['Tai Chi', 'Qigong', 'Jogging', 'Yoga'],
        sleep: ['Regular schedule', 'Sleep before 11 PM', 'Ensure 7-8 hours of sleep'],
        emotional: ['Maintain happy mood', 'Moderate socializing', 'Cultivate hobbies'],
        seasonal: ['Nourish liver in spring', 'Nourish heart in summer', 'Nourish lungs in autumn', 'Nourish kidneys in winter']
      },
      moxibustion: {
        points: ['Zusanli', 'Guanyuan'],
        timing: '2-3 times per week',
        duration: '15-20 minutes per point',
        frequency: 'Mainly for health maintenance',
        precautions: ['Prevent burns', 'Avoid during pregnancy', 'Perform 1 hour after meals']
      }
    },
    qi_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Qihai (CV6)',
            location: '1.5 cun below the navel',
            function: 'Tonify qi, enhance physical strength',
            method: 'Massage clockwise for 5-8 minutes'
          },
          {
            name: 'Zusanli (ST36)',
            location: '3 cun below the knee, 1 finger-width lateral to the tibia',
            function: 'Strengthen spleen and qi, enhance digestion',
            method: 'Focus massage for 5-10 minutes'
          },
          {
            name: 'Pishu (BL20)',
            location: '1.5 cun lateral to the 11th thoracic vertebra',
            function: 'Strengthen spleen and qi, aid digestion',
            method: 'Pressure combined with moxibustion works better'
          }
        ],
        supportingPoints: [
          {
            name: 'Baihui (GV20)',
            location: 'Top center of the head',
            function: 'Lift yang qi, refresh and tonify qi',
            method: 'Gentle lifting pressure'
          },
          {
            name: 'Taichong (LR3)',
            location: 'Between 1st and 2nd metatarsals on foot dorsum',
            function: 'Soothe liver qi, harmonize qi and blood',
            method: 'Press for 2-3 minutes'
          }
        ],
        massageTechnique: 'Gentle sustained pressure, avoid excessive force',
        frequency: '2 times daily, morning and evening',
        duration: '15-20 minutes each session'
      },
      diet: {
        beneficial: ['Astragalus', 'Codonopsis', 'Chinese yam', 'Red dates', 'Longan', 'Millet', 'Pumpkin', 'Carrot'],
        avoid: ['Cold raw foods', 'Excessive greasy food', 'Hard-to-digest foods', 'Excessive raw radish'],
        principles: ['Warm and tonify spleen-stomach', 'Small frequent meals', 'Chew slowly', 'Avoid overeating'],
        sampleMeals: ['Astragalus chicken soup', 'Chinese yam millet porridge', 'Red date longan tea', 'Steamed egg custard']
      },
      lifestyle: {
        exercise: ['Qigong', 'Tai Chi', 'Walking', 'Light yoga'],
        sleep: ['Early to bed and early to rise', '30-minute afternoon nap', 'Avoid staying up late'],
        emotional: ['Stay optimistic', 'Avoid overthinking', 'Moderate relaxation'],
        seasonal: ['Nourish yang in spring-summer', 'Tonify in autumn-winter', 'Avoid overexertion']
      },
      moxibustion: {
        points: ['Qihai', 'Guanyuan', 'Zusanli', 'Pishu'],
        timing: 'Daily or every other day',
        duration: '20-30 minutes per point',
        frequency: 'Continuous treatment for 2-3 months',
        precautions: ['Moderate temperature', 'Avoid burns', 'Reduce during menstruation']
      }
    },
    yang_deficiency: {
      acupoints: {
        primaryPoints: [
          {
            name: 'Mingmen (GV4)',
            location: 'Below the 2nd lumbar vertebra',
            function: 'Warm and tonify kidney yang, strengthen lower back and kidneys',
            method: 'Warm pressure combined with moxibustion'
          },
          {
            name: 'Shenshu (BL23)',
            location: '1.5 cun lateral to the 2nd lumbar vertebra',
            function: 'Tonify kidneys and strengthen yang, strengthen lower back and knees',
            method: 'Press with both hands simultaneously'
          },
          {
            name: 'Guanyuan (CV4)',
            location: '3 cun below the navel',
            function: 'Warm and tonify lower jiao, strengthen foundation',
            method: 'Clockwise massage combined with moxibustion'
          }
        ],
        supportingPoints: [
          {
            name: 'Yongquan (KD1)',
            location: 'Depression in the front 1/3 of the sole',
            function: 'Warm and tonify kidney yang, guide fire back to source',
            method: 'Massage before sleep until warm'
          }
        ],
        massageTechnique: 'Warm massage, better effect when combined with moxibustion',
        frequency: '2 times daily',
        duration: '20-30 minutes each session'
      },
      diet: {
        beneficial: ['Mutton', 'Chinese chives', 'Ginger', 'Cinnamon', 'Walnuts', 'Chestnuts', 'Black beans', 'Goji berries'],
        avoid: ['Cold raw foods', 'Cold-natured fruits', 'Ice drinks', 'Bitter cold medicines'],
        principles: ['Warm and tonify yang qi', 'Avoid cold foods', 'Appropriate tonification', 'Focus on warm foods'],
        sampleMeals: ['Angelica ginger mutton soup', 'Stir-fried eggs with chives', 'Walnut porridge', 'Goji berry tea']
      },
      lifestyle: {
        exercise: ['Jogging', 'Tai Chi', 'Qigong', 'Moderate strength training'],
        sleep: ['Keep warm while sleeping', 'Avoid catching cold at night', 'Adequate sleep'],
        emotional: ['Maintain positive attitude', 'Avoid excessive worry'],
        seasonal: ['Nourish yang in spring-summer', 'Focus on keeping warm in autumn-winter', 'Avoid seeking coolness']
      },
      moxibustion: {
        points: ['Mingmen', 'Shenshu', 'Guanyuan', 'Zusanli'],
        timing: 'Daily moxibustion',
        duration: '30-40 minutes per point',
        frequency: 'Long-term treatment',
        precautions: ['Keep warm', 'Avoid wind exposure', 'Use cautiously during menstruation']
      }
    }
  }
};
