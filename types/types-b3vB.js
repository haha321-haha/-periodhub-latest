// UI管理模块
import DataManager from './data.js';

const UIManager = {
    // DOM元素缓存
    elements: {
        timeline: null,
        painChart: null,
        symptomsChart: null,
        addButton: null,
        modal: null
    },

    // Chart.js实例
    charts: {
        pain: null,
        symptoms: null
    },

    // 初始化UI
    init() {
        this.cacheElements();
        this.bindEvents();
        this.initCharts();
        this.render();
    },

    // 缓存DOM元素
    cacheElements() {
        this.elements.timeline = document.getElementById('timeline');
        this.elements.painChart = document.getElementById('painChart');
        this.elements.symptomsChart = document.getElementById('symptomsChart');
        this.elements.addButton = document.querySelector('.add-record-btn');
        this.elements.modal = document.getElementById('recordModal');
    },

    // 绑定事件
    bindEvents() {
        // 添加记录按钮
        this.elements.addButton?.addEventListener('click', () => this.showModal());

        // 编辑按钮事件委托
        this.elements.timeline?.addEventListener('click', (e) => {
            const editBtn = e.target.closest('.edit-record-btn');
            if (editBtn) {
                const recordId = editBtn.dataset.recordId;
                this.showModal(recordId);
            }
        });

        // 表单提交
        document.getElementById('recordForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(e.target);
        });

        // 模态框关闭
        document.querySelector('.modal-close')?.addEventListener('click', () => {
            this.hideModal();
        });

        // 键盘事件
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hideModal();
        });
    },

    // 初始化图表
    initCharts() {
        if (this.elements.painChart) {
            this.charts.pain = new Chart(this.elements.painChart.getContext('2d'), {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: '疼痛强度',
                        data: [],
                        backgroundColor: 'rgba(236, 72, 153, 0.2)',
                        borderColor: 'rgba(236, 72, 153, 1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 5,
                            ticks: { stepSize: 1 }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: (context) => `疼痛强度: ${context.parsed.y}/5`
                            }
                        }
                    }
                }
            });
        }

        if (this.elements.symptomsChart) {
            this.charts.symptoms = new Chart(this.elements.symptomsChart.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: [],
                    datasets: [{
                        data: [],
                        backgroundColor: [
                            'rgba(236, 72, 153, 0.7)',
                            'rgba(244, 114, 182, 0.7)',
                            'rgba(249, 168, 212, 0.7)',
                            'rgba(251, 207, 232, 0.7)',
                            'rgba(254, 240, 248, 0.7)'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'right' }
                    }
                }
            });
        }
    },

    // 渲染时间轴
    renderTimeline(data) {
        if (!this.elements.timeline) return;

        this.elements.timeline.innerHTML = data.map(day => this.createTimelineItem(day)).join('');
    },

    // 创建时间轴项
    createTimelineItem(day) {
        const flowIcons = {
            heavy: { icon: 'fas fa-tint text-red-600', bg: 'bg-red-100' },
            moderate: { icon: 'fas fa-tint text-pink-500', bg: 'bg-pink-100' },
            light: { icon: 'fas fa-tint text-blue-400', bg: 'bg-blue-100' },
            spotting: { icon: 'fas fa-tint text-gray-400', bg: 'bg-gray-100' }
        };

        const flow = flowIcons[day.flow] || flowIcons.spotting;
        const painColor = day.painLevel >= 4 ? 'text-pink-700' : 
                         day.painLevel >= 2 ? 'text-pink-500' : 'text-gray-700';

        return `
            <div class="timeline-item bg-white rounded-lg border border-gray-200 p-4 flex flex-col" 
                 data-record-id="${day.id}"
                 role="article"
                 aria-label="第${day.day}天记录">
                <div class="flex justify-between items-start mb-2">
                    <span class="font-bold text-lg ${painColor}">第${day.day}天</span>
                    <span class="text-xs text-gray-500">${day.date}</span>
                </div>
                
                <div class="flex items-center justify-center my-3 text-2xl space-x-1" role="img" aria-label="疼痛等级：${day.painLevel}级">
                    ${Array.from({length: 5}, (_, i) => `
                        <i class="fas fa-face-frown emoji-scale ${i < day.painLevel ? 'active text-pink-600' : ''}"
                           aria-hidden="true"></i>
                    `).join('')}
                </div>
                
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs text-gray-500">疼痛强度</span>
                    <span class="text-xs font-medium ${painColor}">${day.painLevel}/5</span>
                </div>
                
                <div class="w-full bg-gray-200 rounded-full h-2 mb-3" role="progressbar" 
                     aria-valuenow="${day.painLevel}" aria-valuemin="0" aria-valuemax="5">
                    <div class="pain-bar bg-pink-500 h-2 rounded-full" 
                         style="width: ${day.painLevel * 20}%"></div>
                </div>
                
                <div class="flex justify-center mb-3">
                    <span class="${flow.bg} rounded-full p-2">
                        <i class="${flow.icon}" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div class="text-xs mb-3" role="list" aria-label="症状列表">
                    ${day.symptoms.map(symptom => `
                        <span class="symptom-tag inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-1 mb-1" role="listitem">
                            ${symptom}
                        </span>
                    `).join('') || '<span class="text-gray-400">无记录症状</span>'}
                </div>
                
                ${day.notes ? `
                    <div class="text-xs text-gray-600 italic mt-auto" role="note">
                        "${day.notes}"
                    </div>
                ` : ''}
                
                <button class="edit-record-btn mt-3 text-xs text-pink-600 hover:text-pink-800 text-left"
                        data-record-id="${day.id}"
                        aria-label="编辑第${day.day}天记录">
                    <i class="fas fa-edit mr-1" aria-hidden="true"></i> 编辑
                </button>
            </div>
        `;
    },

    // 更新图表
    updateCharts(data) {
        // 更新疼痛强度图表
        if (this.charts.pain) {
            this.charts.pain.data.labels = data.map(day => `第${day.day}天`);
            this.charts.pain.data.datasets[0].data = data.map(day => day.painLevel);
            this.charts.pain.update();
        }

        // 更新症状分布图表
        if (this.charts.symptoms) {
            const symptoms = new Map();
            data.forEach(day => {
                day.symptoms.forEach(symptom => {
                    symptoms.set(symptom, (symptoms.get(symptom) || 0) + 1);
                });
            });

            this.charts.symptoms.data.labels = Array.from(symptoms.keys());
            this.charts.symptoms.data.datasets[0].data = Array.from(symptoms.values());
            this.charts.symptoms.update();
        }
    },

    // 显示模态框
    showModal(recordId = null) {
        if (!this.elements.modal) return;

        const form = document.getElementById('recordForm');
        if (recordId && form) {
            const record = DataManager.getRecord(recordId);
            if (record) {
                // 填充表单数据
                Object.entries(record).forEach(([key, value]) => {
                    const input = form.elements[key];
                    if (input) {
                        if (input.type === 'checkbox') {
                            input.checked = value;
                        } else {
                            input.value = value;
                        }
                    }
                });
            }
        }

        this.elements.modal.classList.remove('hidden');
        this.elements.modal.classList.add('flex');
        
        // 焦点管理
        const firstInput = this.elements.modal.querySelector('input, select, textarea');
        if (firstInput) firstInput.focus();
    },

    // 隐藏模态框
    hideModal() {
        if (!this.elements.modal) return;

        this.elements.modal.classList.add('hidden');
        this.elements.modal.classList.remove('flex');
        
        // 重置表单
        document.getElementById('recordForm')?.reset();
    },

    // 处理表单提交
    async handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            const success = await DataManager.addRecord(data);
            if (success) {
                this.hideModal();
                this.render(); // 重新渲染UI
                this.showToast('记录已保存');
            } else {
                this.showToast('保存失败，请重试', 'error');
            }
        } catch (error) {
            console.error('Error saving record:', error);
            this.showToast('发生错误，请重试', 'error');
        }
    },

    // 显示提示消息
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg text-white ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } transition-opacity duration-300`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // 自动消失
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // 渲染整个UI
    render() {
        const data = DataManager.getAllData();
        this.renderTimeline(data);
        this.updateCharts(data);
    }
};

export default UIManager;