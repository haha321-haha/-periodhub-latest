// UI管理模块
import DataManager from './data.js';

const UI = {
    // DOM元素缓存
    elements: {},
    
    // 当前选中的周期ID
    currentCycleId: null,
    
    // 初始化UI
    init() {
        this.cacheElements();
        this.bindEvents();
        this.initCurrentCycle();
    },
    
    // 缓存DOM元素
    cacheElements() {
        this.elements = {
            timeline: document.getElementById('timeline'),
            recommendations: document.getElementById('recommendations'),
            addRecordBtn: document.getElementById('addRecordBtn'),
            cycleSelectorBtn: document.getElementById('cycleSelectorBtn'),
            cycleSelector: document.getElementById('cycleSelector'),
            addRecordModal: document.getElementById('addRecordModal'),
            modalContent: document.getElementById('modalContent'),
            closeModalBtn: document.getElementById('closeModalBtn'),
            cancelRecordBtn: document.getElementById('cancelRecordBtn'),
            recordForm: document.getElementById('recordForm'),
            painLevelSlider: document.getElementById('painLevel'),
            painLevelValue: document.getElementById('painLevelValue'),
            cycleTitle: document.getElementById('cycleTitle'),
            cycleSelectorList: document.getElementById('cycleSelectorList'),
            errorContainer: document.getElementById('errorContainer'),
            loadingIndicator: document.getElementById('loadingIndicator')
        };
    },
    
    // 绑定事件
    bindEvents() {
        // 添加记录按钮
        this.elements.addRecordBtn.addEventListener('click', () => this.openModal());
        
        // 关闭模态框按钮
        this.elements.closeModalBtn.addEventListener('click', () => this.closeModal());
        this.elements.cancelRecordBtn.addEventListener('click', () => this.closeModal());
        
        // 周期选择器
        this.elements.cycleSelectorBtn.addEventListener('click', () => {
            this.elements.cycleSelector.classList.toggle('hidden');
        });
        
        // 点击其他地方关闭周期选择器
        document.addEventListener('click', (e) => {
            if (!this.elements.cycleSelectorBtn.contains(e.target) && 
                !this.elements.cycleSelector.contains(e.target)) {
                this.elements.cycleSelector.classList.add('hidden');
            }
        });
        
        // 疼痛级别滑块
        this.elements.painLevelSlider.addEventListener('input', (e) => {
            this.elements.painLevelValue.textContent = e.target.value;
        });
        
        // 表单提交
        this.elements.recordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });
        
        // 键盘事件 - ESC关闭模态框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.elements.addRecordModal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    },
    
    // 初始化当前周期
    initCurrentCycle() {
        try {
            this.showLoading();
            
            // 获取所有周期数据
            const allCycles = DataManager.getAllData();
            
            // 如果没有数据，创建示例数据
            if (allCycles.length === 0) {
                this.createSampleData();
                return;
            }
            
            // 默认选择最新的周期
            this.currentCycleId = allCycles[0].id;
            this.renderCycleSelector(allCycles);
            this.loadCycleData(this.currentCycleId);
        } catch (error) {
            this.showError('初始化数据时出错: ' + error.message);
        } finally {
            this.hideLoading();
        }
    },
    
    // 创建示例数据
    createSampleData() {
        const sampleCycle = {
            id: Date.now().toString(),
            startDate: '2023-10-01',
            endDate: '2023-10-07',
            name: '2023年10月',
            records: [
                {
                    id: '1',
                    day: 1,
                    date: "2023-10-01",
                    painLevel: 5,
                    symptoms: ["剧烈绞痛", "恶心", "疲劳"],
                    notes: "疼痛严重，需要卧床休息",
                    flow: "heavy"
                },
                {
                    id: '2',
                    day: 2,
                    date: "2023-10-02",
                    painLevel: 4,
                    symptoms: ["剧烈绞痛", "腹胀"],
                    notes: "疼痛减轻但仍影响工作",
                    flow: "heavy"
                },
                {
                    id: '3',
                    day: 3,
                    date: "2023-10-03",
                    painLevel: 3,
                    symptoms: ["剧烈绞痛", "腰酸"],
                    notes: "可以正常活动但仍有不适",
                    flow: "moderate"
                },
                {
                    id: '4',
                    day: 4,
                    date: "2023-10-04",
                    painLevel: 2,
                    symptoms: ["轻微不适", "疲劳"],
                    notes: "基本恢复正常",
                    flow: "moderate"
                },
                {
                    id: '5',
                    day: 5,
                    date: "2023-10-05",
                    painLevel: 1,
                    symptoms: [],
                    notes: "几乎无不适感",
                    flow: "light"
                },
                {
                    id: '6',
                    day: 6,
                    date: "2023-10-06",
                    painLevel: 0,
                    symptoms: [],
                    notes: "",
                    flow: "spotting"
                },
                {
                    id: '7',
                    day: 7,
                    date: "2023-10-07",
                    painLevel: 0,
                    symptoms: [],
                    notes: "",
                    flow: "spotting"
                }
            ]
        };
        
        DataManager.saveCycleData(sampleCycle);
        this.currentCycleId = sampleCycle.id;
        this.renderCycleSelector([sampleCycle]);
        this.loadCycleData(this.currentCycleId);
    },
    
    // 加载周期数据
    loadCycleData(cycleId) {
        try {
            this.showLoading();
            
            const cycleData = DataManager.getCycleData(cycleId);
            if (!cycleData) {
                this.showError('找不到指定的周期数据');
                return;
            }
            
            this.currentCycleId = cycleId;
            this.elements.cycleTitle.textContent = `当前周期: ${cycleData.startDate} - ${cycleData.endDate}`;
            
            this.renderTimeline(cycleData.records);
            this.renderRecommendations(cycleData.records);
            this.renderCharts(cycleData.records);
        } catch (error) {
            this.showError('加载周期数据时出错: ' + error.message);
        } finally {
            this.hideLoading();
        }
    },
    
    // 渲染周期选择器
    renderCycleSelector(cycles) {
        this.elements.cycleSelectorList.innerHTML = '';
        
        cycles.forEach(cycle => {
            const li = document.createElement('li');
            li.className = 'px-4 py-2 hover:bg-gray-100 cursor-pointer';
            li.textContent = cycle.name;
            li.dataset.cycleId = cycle.id;
            
            li.addEventListener('click', () => {
                this.loadCycleData(cycle.id);
                this.elements.cycleSelector.classList.add('hidden');
            });
            
            this.elements.cycleSelectorList.appendChild(li);
        });
    },
    
    // 渲染时间轴
    renderTimeline(records) {
        this.elements.timeline.innerHTML = '';
        
        records.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'timeline-item bg-white border border-gray-100 p-4 flex flex-col';
            dayElement.dataset.recordId = day.id;
            
            // 确定流量指示器样式
            let flowIcon = '';
            let flowColor = '';
            let flowBgColor = '';
            switch(day.flow) {
                case 'heavy':
                    flowIcon = 'fa-tint';
                    flowColor = 'text-red-600';
                    flowBgColor = 'bg-red-100';
                    break;
                case 'moderate':
                    flowIcon = 'fa-tint';
                    flowColor = 'text-pink-500';
                    flowBgColor = 'bg-pink-100';
                    break;
                case 'light':
                    flowIcon = 'fa-tint';
                    flowColor = 'text-blue-400';
                    flowBgColor = 'bg-blue-100';
                    break;
                case 'spotting':
                    flowIcon = 'fa-dot-circle';
                    flowColor = 'text-gray-400';
                    flowBgColor = 'bg-gray-100';
                    break;
            }
            
            // 创建疼痛级别指示器
            let painIndicators = '';
            for (let i = 1; i <= 5; i++) {
                const isActive = i <= day.painLevel;
                painIndicators += `
                    <i class="fas fa-face-frown ${isActive ? 'text-pink-600' : 'text-gray-300'} emoji-scale ${isActive ? 'active' : ''}" 
                       aria-hidden="${!isActive}"></i>
                `;
            }
            
            // 创建症状标签
            let symptomsTags = '';
            if (day.symptoms && day.symptoms.length > 0) {
                day.symptoms.forEach(symptom => {
                    symptomsTags += `
                        <span class="symptom-tag">${symptom}</span>
                    `;
                });
            }
            
            // 生成针对该日的缓解建议
            let dayRecommendations = '';
            if (day.symptoms && day.symptoms.length > 0) {
                day.symptoms.forEach(symptom => {
                    const remedies = DataManager.remedies[symptom];
                    if (remedies) {
                        remedies.forEach(remedy => {
                            dayRecommendations += `
                                <div class="mb-2">
                                    <div class="font-medium text-pink-700"><i class="fas ${remedy.icon} mr-1"></i> ${remedy.name}</div>
                                    <p class="text-gray-600 text-sm">${remedy.description}</p>
                                </div>
                            `;
                        });
                    }
                });
            } else if (day.painLevel > 0) {
                dayRecommendations = `
                    <div class="mb-2">
                        <div class="font-medium text-pink-700"><i class="fas fa-heartbeat mr-1"></i> 一般建议</div>
                        <p class="text-gray-600 text-sm">保持充足睡眠，饮用温水，避免生冷食物</p>
                    </div>
                `;
            }
            
            dayElement.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <span class="font-bold text-lg ${day.painLevel >= 4 ? 'text-pink-700' : day.painLevel >= 2 ? 'text-pink-500' : 'text-gray-700'}">
                        第${day.day}天
                    </span>
                    <span class="text-xs text-gray-500">${day.date}</span>
                </div>
                
                <div class="flex items-center justify-center my-3 text-2xl space-x-1" role="img" aria-label="疼痛级别: ${day.painLevel}分（满分5分）">
                    ${painIndicators}
                </div>
                
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs text-gray-500">疼痛强度</span>
                    <span class="text-xs font-medium ${day.painLevel >= 4 ? 'text-pink-700' : day.painLevel >= 2 ? 'text-pink-500' : 'text-gray-700'}">
                        ${day.painLevel}/5
                    </span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-2 mb-3" role="progressbar" aria-valuenow="${day.painLevel}" aria-valuemin="0" aria-valuemax="5">
                    <div class="pain-bar bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" style="width: ${day.painLevel * 20}%"></div>
                </div>
                
                <div class="flow-indicator ${flowBgColor}" aria-label="月经量: ${day.flow}">
                    <i class="fas ${flowIcon} ${flowColor}"></i>
                </div>
                
                <div class="text-xs mb-3 mt-2" aria-label="症状: ${day.symptoms ? day.symptoms.join(', ') : '无'}">
                    ${symptomsTags || '<span class="text-gray-400 text-xs">无记录症状</span>'}
                </div>
                
                ${day.notes ? `<div class="text-xs text-gray-600 italic mt-auto">"${day.notes}"</div>` : ''}
                
                ${dayRecommendations ? `
                    <div class="recommendation-tooltip">
                        <div class="font-medium text-pink-700 mb-2">缓解建议</div>
                        ${dayRecommendations}
                    </div>
                ` : ''}
                
                <button class="mt-3 text-xs text-pink-600 hover:text-pink-800 text-left edit-record-btn" data-record-id="${day.id}">
                    <i class="fas fa-edit mr-1"></i> 编辑
                </button>
            `;
            
            // 添加编辑按钮事件
            const editBtn = dayElement.querySelector('.edit-record-btn');
            editBtn.addEventListener('click', () => this.openEditModal(day.id));
            
            this.elements.timeline.appendChild(dayElement);
        });
    },
    
    // 渲染个性化建议
    renderRecommendations(records) {
        this.elements.recommendations.innerHTML = '';
        
        // 收集所有症状及其出现频率
        const symptomFrequency = {};
        records.forEach(day => {
            if (day.symptoms && day.symptoms.length > 0) {
                day.symptoms.forEach(symptom => {
                    symptomFrequency[symptom] = (symptomFrequency[symptom] || 0) + 1;
                });
            }
        });
        
        // 按频率排序症状
        const sortedSymptoms = Object.keys(symptomFrequency).sort((a, b) => {
            return symptomFrequency[b] - symptomFrequency[a];
        });
        
        // 为最常见的症状生成建议
        let recommendationsAdded = 0;
        sortedSymptoms.slice(0, 3).forEach(symptom => {
            const remedies = DataManager.remedies[symptom];
            if (remedies) {
                remedies.forEach((remedy, index) => {
                    if (index < 2 && recommendationsAdded < 3) { // 每个症状只显示前两个建议，总共最多3个
                        const recommendationCard = document.createElement('div');
                        recommendationCard.className = 'bg-white rounded-lg border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow';
                        
                        recommendationCard.innerHTML = `
                            <div class="flex items-start">
                                <div class="p-3 bg-pink-100 rounded-full text-pink-600 mr-4">
                                    <i class="fas ${remedy.icon} text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-800">${remedy.name}</h4>
                                    <p class="text-gray-600 text-sm mt-1">${remedy.description}</p>
                                    <div class="mt-3">
                                        <button class="text-xs text-pink-600 hover:text-pink-800">
                                            <i class="fas fa-play-circle mr-1"></i> 查看教程
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                        
                        this.elements.recommendations.appendChild(recommendationCard);
                        recommendationsAdded++;
                    }
                });
            }
        });
        
        // 添加一般建议
        const generalTips = document.createElement('div');
        generalTips.className = 'bg-white rounded-lg border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow';
        
        generalTips.innerHTML = `
            <div class="flex items-start">
                <div class="p-3 bg-purple-100 rounded-full text-purple-600 mr-4">
                    <i class="fas fa-leaf text-xl"></i>
                </div>
                <div>
                    <h4 class="font-medium text-gray-800">一般经期健康建议</h4>
                    <ul class="text-gray-600 text-sm mt-1 space-y-1">
                        <li class="flex items-start">
                            <i class="fa fa-check-circle text-purple-600 mt-1 mr-2"></i>
                            <span>保持规律作息，保证充足睡眠</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check-circle text-purple-600 mt-1 mr-2"></i>
                            <span>避免生冷食物，多喝温水和温茶</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check-circle text-purple-600 mt-1 mr-2"></i>
                            <span>适量轻度运动，如散步或瑜伽</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check-circle text-purple-600 mt-1 mr-2"></i>
                            <span>保持心情舒畅，避免过度压力</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
        
        this.elements.recommendations.appendChild(generalTips);
    },
    
    // 渲染图表
    renderCharts(records) {
        // 清除旧图表
        if (window.painChart) window.painChart.destroy();
        if (window.symptomsChart) window.symptomsChart.destroy();
        
        // 疼痛强度趋势图
        const painCtx = document.getElementById('painChart').getContext('2d');
        window.painChart = new Chart(painCtx, {
            type: 'line',
            data: {
                labels: records.map(day => `第${day.day}天`),
                datasets: [{
                    label: '疼痛强度',
                    data: records.map(day => day.painLevel),
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    borderColor: 'rgba(236, 72, 153, 1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: 'rgba(236, 72, 153, 1)',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        },
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#333',
                        bodyColor: '#666',
                        borderColor: 'rgba(236, 72, 153, 0.2)',
                        borderWidth: 1,
                        padding: 12,
                        boxPadding: 6,
                        usePointStyle: true,
                        callbacks: {
                            label: function(context) {
                                return `疼痛强度: ${context.parsed.y}/5`;
                            }
                        }
                    }
                }
            }
        });
        
        // 症状分布图
        const symptomsCtx = document.getElementById('symptomsChart').getContext('2d');
        
        // 收集所有症状及其出现频率
        const symptomFrequency = {};
        records.forEach(day => {
            if (day.symptoms && day.symptoms.length > 0) {
                day.symptoms.forEach(symptom => {
                    symptomFrequency[symptom] = (symptomFrequency[symptom] || 0) + 1;
                });
            }
        });
        
        const symptoms = Object.keys(symptomFrequency);
        const counts = Object.values(symptomFrequency);
        
        window.symptomsChart = new Chart(symptomsCtx, {
            type: 'doughnut',
            data: {
                labels: symptoms,
                datasets: [{
                    data: counts,
                    backgroundColor: [
                        'rgba(236, 72, 153, 0.8)',
                        'rgba(236, 72, 153, 0.6)',
                        'rgba(236, 72, 153, 0.4)',
                        'rgba(236, 72, 153, 0.3)',
                        'rgba(236, 72, 153, 0.2)'
                    ],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#333',
                        bodyColor: '#666',
                        borderColor: 'rgba(236, 72, 153, 0.2)',
                        borderWidth: 1,
                        padding: 12,
                        boxPadding: 6,
                        usePointStyle: true,
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${value} 天 (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    },
    
    // 打开添加记录模态框
    openModal() {
        this.elements.addRecordModal.classList.remove('hidden');
        setTimeout(() => {
            this.elements.modalContent.classList.remove('scale-95', 'opacity-0');
            this.elements.modalContent.classList.add('scale-100', 'opacity-100');
        }, 10);
        
        // 设置默认日期为今天
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        document.getElementById('recordDate').value = formattedDate;
        
        // 设置默认疼痛级别
        this.elements.painLevelSlider.value = 3;
        this.elements.painLevelValue.textContent = '3';
        
