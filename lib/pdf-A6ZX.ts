/**
 * PDF资源统一配置
 * Period Hub PDF Resources Configuration
 */

import { PDFResource, PDFCategoryInfo, PDFStats } from '@/types/pdf';
import { calculatePDFStats } from '@/utils/pdfHelpers';

/**
 * PDF分类信息配置
 */
export const PDF_CATEGORIES: PDFCategoryInfo[] = [
  {
    id: 'management-tools',
    titleKey: 'downloadsPage.categories.managementTools.title',
    descriptionKey: 'downloadsPage.categories.managementTools.description',
    icon: '📊',
    order: 1
  },
  {
    id: 'health-management',
    titleKey: 'downloadsPage.categories.healthManagement.title',
    descriptionKey: 'downloadsPage.categories.healthManagement.description',
    icon: '🏥',
    order: 2
  },
  {
    id: 'communication-guidance',
    titleKey: 'downloadsPage.categories.communicationGuidance.title',
    descriptionKey: 'downloadsPage.categories.communicationGuidance.description',
    icon: '🎓',
    order: 3
  }
];

/**
 * PDF资源配置
 */
export const PDF_RESOURCES: PDFResource[] = [
  // 管理工具类 (4个)
  {
    id: 'pain-tracking-form',
    icon: '📊',
    filename: 'pain-tracking-form.pdf',
    titleKey: 'downloadsPage.resources.painTrackingForm.title',
    descriptionKey: 'downloadsPage.resources.painTrackingForm.description',
    category: 'management-tools',
    featured: true,
    fileSize: 764,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'natural-therapy-assessment',
    icon: '🌿',
    filename: 'natural-therapy-assessment.pdf',
    titleKey: 'resources.naturalTherapyAssessment.title',
    descriptionKey: 'resources.naturalTherapyAssessment.description',
    category: 'management-tools',
    featured: false,
    fileSize: 1200,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'healthy-habits-checklist',
    icon: '✅',
    filename: 'healthy-habits-checklist.pdf',
    titleKey: 'resources.healthyHabitsChecklist.title',
    descriptionKey: 'resources.healthyHabitsChecklist.description',
    category: 'management-tools',
    featured: false,
    fileSize: 702,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'specific-menstrual-pain-management-guide',
    icon: '📋',
    filename: 'specific-menstrual-pain-management-guide.pdf',
    titleKey: 'resources.specificMenstrualPainManagementGuide.title',
    descriptionKey: 'resources.specificMenstrualPainManagementGuide.description',
    category: 'management-tools',
    featured: false,
    fileSize: 820,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },

  // 健康管理类 (4个)
  {
    id: 'menstrual-cycle-nutrition-plan',
    icon: '🥗',
    filename: 'menstrual-cycle-nutrition-plan.pdf',
    titleKey: 'resources.menstrualCycleNutritionPlan.title',
    descriptionKey: 'resources.menstrualCycleNutritionPlan.description',
    category: 'health-management',
    featured: true,
    fileSize: 1400,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'magnesium-gut-health-guide',
    icon: '💊',
    filename: 'magnesium-gut-health-menstrual-pain-guide.pdf',
    titleKey: 'resources.magnesiumGutHealthGuide.title',
    descriptionKey: 'resources.magnesiumGutHealthGuide.description',
    category: 'health-management',
    featured: false,
    fileSize: 1000,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'menstrual-pain-complications-management',
    icon: '⚠️',
    filename: 'menstrual-pain-complications-management.pdf',
    titleKey: 'resources.menstrualPainComplicationsManagement.title',
    descriptionKey: 'resources.menstrualPainComplicationsManagement.description',
    category: 'health-management',
    featured: false,
    fileSize: 888,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'zhan-zhuang-baduanjin-illustrated-guide',
    icon: '🧘‍♀️',
    filename: 'zhan-zhuang-baduanjin-illustrated-guide.pdf',
    titleKey: 'resources.zhanZhuangBaduanjinIllustratedGuide.title',
    descriptionKey: 'resources.zhanZhuangBaduanjinIllustratedGuide.description',
    category: 'health-management',
    featured: false,
    fileSize: 867,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },

  // 沟通指导类 (4个)
  {
    id: 'campus-emergency-checklist',
    icon: '🏫',
    filename: 'campus-emergency-checklist.pdf',
    titleKey: 'resources.campusEmergencyChecklist.title',
    descriptionKey: 'resources.campusEmergencyChecklist.description',
    category: 'communication-guidance',
    featured: true,
    fileSize: 548,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'parent-communication-guide',
    icon: '👨‍👩‍👧‍👦',
    filename: 'parent-communication-guide.pdf',
    titleKey: 'resources.parentCommunicationGuide.title',
    descriptionKey: 'resources.parentCommunicationGuide.description',
    category: 'communication-guidance',
    featured: false,
    fileSize: 642,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'teacher-collaboration-handbook',
    icon: '👨‍🏫',
    filename: 'teacher-collaboration-handbook.pdf',
    titleKey: 'resources.teacherCollaborationHandbook.title',
    descriptionKey: 'resources.teacherCollaborationHandbook.description',
    category: 'communication-guidance',
    featured: false,
    fileSize: 679,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  },
  {
    id: 'teacher-health-manual',
    icon: '👩‍⚕️',
    filename: 'teacher-health-manual.pdf',
    titleKey: 'resources.teacherHealthManual.title',
    descriptionKey: 'resources.teacherHealthManual.description',
    category: 'communication-guidance',
    featured: false,
    fileSize: 711,
    createdAt: '2024-12-19',
    updatedAt: '2024-12-19'
  }
];

/**
 * 获取所有PDF资源
 */
export function getAllPDFResources(): PDFResource[] {
  return PDF_RESOURCES;
}

/**
 * 根据分类获取PDF资源
 */
export function getPDFResourcesByCategory(category: string): PDFResource[] {
  return PDF_RESOURCES.filter(resource => resource.category === category);
}

/**
 * 根据ID获取PDF资源
 */
export function getPDFResourceById(id: string): PDFResource | undefined {
  return PDF_RESOURCES.find(resource => resource.id === id);
}

/**
 * 获取特色PDF资源
 */
export function getFeaturedPDFResources(): PDFResource[] {
  return PDF_RESOURCES.filter(resource => resource.featured);
}

/**
 * 获取PDF统计信息
 */
export function getResourceStats(): PDFStats {
  return calculatePDFStats(PDF_RESOURCES);
}

/**
 * 获取分类信息
 */
export function getCategoryInfo(categoryId: string): PDFCategoryInfo | undefined {
  return PDF_CATEGORIES.find(category => category.id === categoryId);
}

/**
 * 获取所有分类信息
 */
export function getAllCategories(): PDFCategoryInfo[] {
  return PDF_CATEGORIES.sort((a, b) => a.order - b.order);
}
