// Period Hub 38个PDF资源完整映射表
import { PDFResource, PDFCategoryInfo } from '../types/pdf-resources';

// 分类信息定义
export const PDF_CATEGORIES: PDFCategoryInfo[] = [
  {
    id: 'emergency',
    name: '紧急缓解',
    nameEn: 'Emergency Relief',
    description: '立即缓解疼痛的快速方案',
    descriptionEn: 'Quick solutions for immediate pain relief',
    icon: '🚨',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    resourceCount: 10,
    order: 1
  },
  {
    id: 'daily',
    name: '日常管理',
    nameEn: 'Daily Management',
    description: '长期健康管理和预防方案',
    descriptionEn: 'Long-term health management and prevention',
    icon: '💚',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    resourceCount: 10,
    order: 2
  },
  {
    id: 'learning',
    name: '深度学习',
    nameEn: 'Deep Learning',
    description: '科学知识和机制理解',
    descriptionEn: 'Scientific knowledge and mechanism understanding',
    icon: '📚',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    resourceCount: 12,
    order: 3
  },
  {
    id: 'professional',
    name: '专业指导',
    nameEn: 'Professional Guidance',
    description: '医疗专业和高级治疗方案',
    descriptionEn: 'Medical professional and advanced treatment options',
    icon: '🏥',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    resourceCount: 6,
    order: 4
  }
];

// 38个PDF资源完整映射
export const PDF_RESOURCES: PDFResource[] = [
  // 🚨 紧急缓解类 (10个资源)
  {
    id: 'emergency-001',
    title: '5分钟快速缓解疼痛指南',
    titleEn: '5-Minute Quick Pain Relief Guide',
    category: 'emergency',
    priority: 'highest',
    difficulty: 'beginner',
    type: 'guide',
    tags: ['快速缓解', '紧急处理', '疼痛管理'],
    estimatedReadTime: 5,
    fileSize: '1.2MB',
    description: '紧急情况下5分钟内快速缓解痛经的实用方法',
    descriptionEn: 'Practical methods to quickly relieve menstrual pain within 5 minutes',
    downloadUrl: '/downloads/emergency-quick-relief-guide.pdf',
    lastUpdated: '2024-12-01',
    isNew: true,
    isFeatured: true,
    seoKeywords: ['快速缓解痛经', '5分钟止痛', '紧急痛经处理'],
    targetAudience: ['学生', '上班族', '紧急情况']
  },
  {
    id: 'emergency-002',
    title: '热敷冷敷正确使用方法',
    titleEn: 'Correct Heat and Cold Therapy Methods',
    category: 'emergency',
    priority: 'highest',
    difficulty: 'beginner',
    type: 'guide',
    tags: ['热敷', '冷敷', '物理疗法'],
    estimatedReadTime: 8,
    fileSize: '2.1MB',
    description: '详细的热敷冷敷使用指南，包括温度控制和时间安排',
    descriptionEn: 'Detailed guide on heat and cold therapy with temperature control and timing',
    downloadUrl: '/downloads/heat-cold-therapy-guide.pdf',
    lastUpdated: '2024-11-28',
    seoKeywords: ['热敷缓解痛经', '冷敷止痛', '物理疗法'],
    targetAudience: ['所有年龄段', '物理疗法偏好者']
  },
  {
    id: 'emergency-003',
    title: '紧急止痛药物指南',
    titleEn: 'Emergency Pain Medication Guide',
    category: 'emergency',
    priority: 'highest',
    difficulty: 'intermediate',
    type: 'reference',
    tags: ['药物治疗', 'NSAIDs', '安全用药'],
    estimatedReadTime: 12,
    fileSize: '3.5MB',
    description: '紧急情况下安全使用止痛药物的专业指南',
    descriptionEn: 'Professional guide for safe use of pain medications in emergencies',
    downloadUrl: '/downloads/emergency-medication-guide.pdf',
    lastUpdated: '2024-12-05',
    seoKeywords: ['紧急止痛药', '痛经药物', 'NSAIDs使用'],
    targetAudience: ['成年女性', '药物治疗需求者']
  },
  {
    id: 'emergency-004',
    title: '呼吸放松技巧',
    titleEn: 'Breathing Relaxation Techniques',
    category: 'emergency',
    priority: 'high',
    difficulty: 'beginner',
    type: 'guide',
    tags: ['呼吸法', '放松技巧', '心理调节'],
    estimatedReadTime: 6,
    fileSize: '1.8MB',
    description: '通过呼吸调节快速缓解痛经和焦虑',
    descriptionEn: 'Quick relief of menstrual pain and anxiety through breathing regulation',
    downloadUrl: '/downloads/breathing-relaxation-guide.pdf',
    lastUpdated: '2024-11-25',
    seoKeywords: ['呼吸缓解痛经', '放松技巧', '心理调节'],
    targetAudience: ['焦虑患者', '心理调节需求者']
  },
  {
    id: 'emergency-005',
    title: '紧急穴位按摩图解',
    titleEn: 'Emergency Acupressure Point Massage Guide',
    category: 'emergency',
    priority: 'high',
    difficulty: 'beginner',
    type: 'guide',
    tags: ['穴位按摩', '中医疗法', '图解指南'],
    estimatedReadTime: 10,
    fileSize: '4.2MB',
    description: '详细的穴位按摩图解，快速缓解痛经',
    descriptionEn: 'Detailed acupressure point massage illustrations for quick pain relief',
    downloadUrl: '/downloads/emergency-acupressure-guide.pdf',
    lastUpdated: '2024-12-10',
    isNew: true,
    seoKeywords: ['穴位按摩痛经', '中医缓解', '按摩图解'],
    targetAudience: ['中医疗法偏好者', '自然疗法需求者']
  },
  {
    id: 'emergency-006',
    title: '快速缓解恶心呕吐方法',
    titleEn: 'Quick Relief for Nausea and Vomiting',
    category: 'emergency',
    priority: 'high',
    difficulty: 'beginner',
    type: 'guide',
    tags: ['恶心呕吐', '伴随症状', '快速缓解'],
    estimatedReadTime: 7,
    fileSize: '2.3MB',
    description: '针对痛经伴随恶心呕吐的快速处理方法',
    descriptionEn: 'Quick treatment methods for nausea and vomiting accompanying menstrual pain',
    downloadUrl: '/downloads/nausea-relief-guide.pdf',
    lastUpdated: '2024-11-30',
    seoKeywords: ['经期恶心', '呕吐缓解', '伴随症状'],
    targetAudience: ['严重痛经患者', '伴随症状患者']
  },
  {
    id: 'emergency-007',
    title: '紧急情况应对清单',
    titleEn: 'Emergency Situation Response Checklist',
    category: 'emergency',
    priority: 'highest',
    difficulty: 'beginner',
    type: 'checklist',
    tags: ['应急清单', '紧急处理', '行动指南'],
    estimatedReadTime: 4,
    fileSize: '1.5MB',
    description: '紧急痛经情况下的快速行动清单',
    descriptionEn: 'Quick action checklist for emergency menstrual pain situations',
    downloadUrl: '/downloads/emergency-response-checklist.pdf',
    lastUpdated: '2024-12-03',
    isFeatured: true,
    seoKeywords: ['紧急痛经处理', '应急清单', '快速行动'],
    targetAudience: ['所有年龄段', '紧急情况']
  },
  {
    id: 'emergency-008',
    title: '疼痛等级评估表',
    titleEn: 'Pain Level Assessment Scale',
    category: 'emergency',
    priority: 'medium',
    difficulty: 'beginner',
    type: 'worksheet',
    tags: ['疼痛评估', '等级量表', '自我监测'],
    estimatedReadTime: 5,
    fileSize: '1.1MB',
    description: '科学评估痛经疼痛等级的专业量表',
    descriptionEn: 'Professional scale for scientifically assessing menstrual pain levels',
    downloadUrl: '/downloads/pain-assessment-scale.pdf',
    lastUpdated: '2024-11-20',
    seoKeywords: ['疼痛等级', '痛经评估', '疼痛量表'],
    targetAudience: ['医疗记录需求者', '症状追踪者']
  },
  {
    id: 'emergency-009',
    title: '紧急联系医生指南',
    titleEn: 'Emergency Doctor Contact Guide',
    category: 'emergency',
    priority: 'highest',
    difficulty: 'beginner',
    type: 'reference',
    tags: ['医疗急救', '联系医生', '紧急就医'],
    estimatedReadTime: 8,
    fileSize: '2.7MB',
    description: '何时需要紧急联系医生的判断标准和联系方式',
    descriptionEn: 'Criteria for when to urgently contact a doctor and contact methods',
    downloadUrl: '/downloads/emergency-doctor-contact.pdf',
    lastUpdated: '2024-12-08',
    seoKeywords: ['紧急就医', '联系医生', '医疗急救'],
    targetAudience: ['严重症状患者', '医疗指导需求者']
  },
  {
    id: 'emergency-010',
    title: '应急药物携带清单',
    titleEn: 'Emergency Medication Carry List',
    category: 'emergency',
    priority: 'high',
    difficulty: 'intermediate',
    type: 'checklist',
    tags: ['应急药物', '携带清单', '药物管理'],
    estimatedReadTime: 9,
    fileSize: '2.9MB',
    description: '完整的应急药物携带和使用指南',
    descriptionEn: 'Complete guide for carrying and using emergency medications',
    downloadUrl: '/downloads/emergency-medication-list.pdf',
    lastUpdated: '2024-12-12',
    isNew: true,
    seoKeywords: ['应急药物', '药物携带', '紧急用药'],
    targetAudience: ['经常外出者', '药物治疗需求者']
  }
];

// 资源搜索和筛选函数
export const searchPDFResources = (
  query: string,
  category?: string,
  priority?: string
): PDFResource[] => {
  let filtered = PDF_RESOURCES;
  
  if (category) {
    filtered = filtered.filter(resource => resource.category === category);
  }
  
  if (priority) {
    filtered = filtered.filter(resource => resource.priority === priority);
  }
  
  if (query) {
    const searchTerm = query.toLowerCase();
    filtered = filtered.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  return filtered;
};

// 获取分类统计
export const getCategoryStats = () => {
  const stats = PDF_CATEGORIES.map(category => ({
    ...category,
    actualCount: PDF_RESOURCES.filter(r => r.category === category.id).length
  }));
  
  return stats;
};
