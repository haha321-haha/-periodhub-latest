// 主应用程序模块
import DataManager from './data.js';
import UIManager from './ui.js';
import * as Utils from './utils.js';
import { sampleData } from './sample-data.js';

class PeriodTrackerApp {
    constructor() {
        this.currentCycleId = null;
        this.isInitialized = false;
    }

    // 初始化应用
    async init() {
        try {
            // 显示加载状态
            this.showLoadingState();
            
            // 检查浏览器支持
            const support = Utils.checkBrowserSupport();
            if (!support.supported) {
                console.warn('Browser may not fully support all features', support.features);
            }

            // 初始化数据
            await this.initializeData();
            
            // 初始化UI
            UIManager.init();
            
            // 绑定全局事件
            this.bindGlobalEvents();
            
            // 加载当前周期
            this.loadCurrentCycle();
            
            this.isInitialized = true;
            console.log('Period Tracker App initialized successfully');
        } catch (error) {
            console.error('Failed to initialize app:', error);
            this.showErrorState('应用程序初始化失败，请刷新页面重试');
        }
    }

    // 显示加载状态
    showLoadingState() {
        const timeline = document.getElementById('timeline');
        if (timeline) {
            timeline.innerHTML = `
                <div class="text-center py-8 col-span-full text-gray-500">
                    <i class="fas fa-spinner fa-spin text-2xl mb-2"></i>
                    <p>加载中...</p>
                </div>
            `;
        }
    }

    // 显示错误状态
    showErrorState(message) {
        const timeline = document.getElementById('timeline');
        if (timeline) {
            timeline.innerHTML = `
                <div class="text-center py-8 col-span-full text-red-500">
                    <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>
                    <p>${message}</p>
                    <button onclick="window.location.reload()" 
                            class="mt-2 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                        重新加载
                    </button>
                </div>
            `;
        }
    }

    // 初始化数据
    async initializeData() {
        const allData = DataManager.getAllData();
        
        // 如果没有数据，加载示例数据
        if (allData.length === 0) {
            try {
                await DataManager.saveCycleData(sampleData);
                console.log('Sample data loaded');
            } catch (error) {
                console.error('Failed to load sample data:', error);
                throw new Error('无法加载示例数据');
            }
        }
    }

    // 绑定全局事件
    bindGlobalEvents() {
        // 周期选择器变更
        document.getElementById('cycleSelector')?.addEventListener('change', (e) => {
            this.currentCycleId = e.target.value;
            this.loadCurrentCycle();
        });

        // 导出数据按钮
        document.getElementById('exportDataBtn')?.addEventListener('click', () => {
            const allData = DataManager.getAllData();
            Utils.exportToJson(allData, 'period-tracker-data.json');
            UIManager.showToast('数据已导出');
        });

        // 导入数据按钮
        document.getElementById('importDataBtn')?.addEventListener('click', () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'application/json';
            fileInput.onchange = async (e) => {
                try {
                    const file = e.target.files[0];
                    if (!file) return;
                    
                    const data = await Utils.importFromJson(file);
                    
                    // 验证导入的数据
                    if (!Array.isArray(data)) {
                        throw new Error('无效的数据格式');
                    }
                    
                    // 保存导入的数据
                    localStorage.setItem(DataManager.STORAGE_KEY, JSON.stringify(data));
                    
                    // 重新加载应用
                    window.location.reload();
                } catch (error) {
                    console.error('Import failed:', error);
                    UIManager.showToast('导入失败: ' + error.message, 'error');
                }
            };
            fileInput.click();
        });

        // 添加新周期按钮
        document.getElementById('addCycleBtn')?.addEventListener('click', () => {
            this.showAddCycleModal();
        });

        // 初始化日期选择器
        this.initDatePickers();

        // 响应式设计 - 窗口大小变化时重新渲染图表
        const debouncedResize = Utils.debounce(() => {
            if (this.isInitialized) {
                UIManager.updateCharts(DataManager.getCycleData(this.currentCycleId)?.records || []);
            }
        }, 250);
        
        window.addEventListener('resize', debouncedResize);
    }

    // 初始化日期选择器
    initDatePickers() {
        // 设置默认日期为今天
        const today = Utils.formatDate(new Date());
        
        // 记录表单日期选择器
        const recordDateInput = document.getElementById('recordDate');
        if (recordDateInput) {
            recordDateInput.value = today;
            recordDateInput.max = today; // 禁止选择未来日期
            
            recordDateInput.addEventListener('change', (e) => {
                const selectedDate = new Date(e.target.value);
                const today = new Date();
                
                if (selectedDate > today) {
                    UIManager.showToast('不能选择未来的日期', 'error');
                    e.target.value = today;
                }
            });
        }

        // 周期表单日期选择器
        const cycleStartInput = document.getElementById('cycleStartDate');
        const cycleEndInput = document.getElementById('cycleEndDate');
        
        if (cycleStartInput && cycleEndInput) {
            cycleStartInput.value = today;
            cycleEndInput.value = today;
            cycleStartInput.max = today;
            cycleEndInput.max = today;
            
            // 确保结束日期不早于开始日期
            cycleStartInput.addEventListener('change', (e) => {
                if (new Date(e.target.value) > new Date(cycleEndInput.value)) {
                    cycleEndInput.value = e.target.value;
                }
            });
            
            cycleEndInput.addEventListener('change', (e) => {
                if (new Date(e.target.value) < new Date(cycleStartInput.value)) {
                    UIManager.showToast('结束日期不能早于开始日期', 'error');
                    e.target.value = cycleStartInput.value;
                }
            });
        }
    }

    // 加载当前周期
    loadCurrentCycle() {
        const allData = DataManager.getAllData();
        
        // 如果没有指定周期ID，使用最新的周期
        if (!this.currentCycleId && allData.length > 0) {
            this.currentCycleId = allData[allData.length - 1].id;
        }
        
        // 更新周期选择器
        this.updateCycleSelector(allData);
        
        // 获取当前周期数据
        const currentCycle = DataManager.getCycleData(this.currentCycleId);
        
        if (currentCycle) {
            // 更新周期标题
            this.updateCycleTitle(currentCycle);
            
            // 渲染UI
            UIManager.renderTimeline(currentCycle.records);
            UIManager.updateCharts(currentCycle.records);
            
            // 更新推荐区域
            this.updateRecommendations(currentCycle.records);
        } else {
            // 没有找到周期数据
            UIManager.renderTimeline([]);
            UIManager.updateCharts([]);
            this.updateCycleTitle(null);
        }
    }

    // 更新周期选择器
    updateCycleSelector(allData) {
        const selector = document.getElementById('cycleSelector');
        if (!selector) return;
        
        // 清空现有选项
        selector.innerHTML = '';
        
        // 添加所有周期选项
        allData.forEach(cycle => {
            const option = document.createElement('option');
            option.value = cycle.id;
            option.textContent = `${cycle.startDate} 至 ${cycle.endDate}`;
            selector.appendChild(option);
        });
        
        // 设置当前选中的周期
        if (this.currentCycleId) {
            selector.value = this.currentCycleId;
        }
    }

    // 更新周期标题
    updateCycleTitle(cycle) {
        const titleElement = document.getElementById('cycleTitle');
        if (!titleElement) return;
        
        if (cycle) {
            titleElement.textContent = `当前周期: ${cycle.startDate} - ${cycle.endDate}`;
        } else {
            titleElement.textContent = '没有可用的周期数据';
        }
    }

    // 更新推荐区域
    updateRecommendations(records) {
        const recommendationsContainer = document.getElementById('recommendationsContainer');
        if (!recommendationsContainer) return;
        
        // 收集所有症状
        const allSymptoms = new Set();
        records.forEach(record => {
            record.symptoms.forEach(symptom => allSymptoms.add(symptom));
        });
        
        // 获取推荐
        const recommendations = DataManager.getRecommendations(Array.from(allSymptoms));
        
        // 如果没有推荐，隐藏整个区域
        const recommendationsSection = document.getElementById('recommendationsSection');
        if (recommendations.length === 0) {
            if (recommendationsSection) recommendationsSection.classList.add('hidden');
            return;
        } else {
            if (recommendationsSection) recommendationsSection.classList.remove('hidden');
        }
        
        // 渲染推荐
        recommendationsContainer.innerHTML = recommendations.map(rec => `
            <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-2">
                    <div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">
                        <i class="fas ${rec.icon}" aria-hidden="true"></i>
                    </div>
                    <h3 class="font-medium text-gray-800">${rec.name}</h3>
                </div>
                <p class="text-gray-600 text-sm">${rec.description}</p>
            </div>
        `).join('');
    }

    // 显示添加周期模态框
    showAddCycleModal() {
        const modal = document.getElementById('cycleModal');
        if (!modal) return;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // 设置默认日期为今天
        const today = Utils.formatDate(new Date());
        document.getElementById('cycleStartDate')?.setAttribute('value', today);
        document.getElementById('cycleEndDate')?.setAttribute('value', today);
        
        // 绑定表单提交事件
        const form = document.getElementById('cycleForm');
        const submitHandler = async (e) => {
            e.preventDefault();
            
            const startDate = document.getElementById('cycleStartDate')?.value;
            const endDate = document.getElementById('cycleEndDate')?.value;
            
            if (!startDate || !endDate) {
                UIManager.showToast('请选择开始和结束日期', 'error');
                return;
            }
            
            if (new Date(startDate) > new Date(endDate)) {
                UIManager.showToast('开始日期不能晚于结束日期', 'error');
                return;
            }
            
            // 创建新周期
            const newCycle = {
                id: Utils.generateId(),
                startDate,
                endDate,
                records: []
            };
            
            // 为每一天创建记录
            const dateRange = Utils.getDateRange(startDate, endDate);
            newCycle.records = dateRange.map((date, index) => ({
                id: Utils.generateId(),
                day: index + 1,
                date,
                painLevel: 0,
                symptoms: [],
                notes: '',
                flow: 'spotting'
            }));
            
            // 保存新周期
            const success = await DataManager.saveCycleData(newCycle);
            
            if (success) {
                this.currentCycleId = newCycle.id;
                this.loadCurrentCycle();
                this.hideAddCycleModal();
                UIManager.showToast('新周期已创建');
            } else {
                UIManager.showToast('创建周期失败', 'error');
            }
        };
        
        form?.addEventListener('submit', submitHandler, { once: true });
        
        // 绑定关闭按钮
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn?.addEventListener('click', () => this.hideAddCycleModal());
    }

    // 隐藏添加周期模态框
    hideAddCycleModal() {
        const modal = document.getElementById('cycleModal');
        if (!modal) return;
        
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        
        // 重置表单
        document.getElementById('cycleForm')?.reset();
    }
}

// 创建并导出应用实例
const app = new PeriodTrackerApp();
export default app;

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', async () => {
    try {
        await app.init();
    } catch (error) {
        console.error('App initialization failed:', error);
        app.showErrorState('应用程序初始化失败，请刷新页面重试');
    }
});