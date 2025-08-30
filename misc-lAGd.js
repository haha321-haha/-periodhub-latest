// UI管理模块 - 更新版本
import DataManager from './data.js';
import * as Utils from './utils.js';

const UIManager = {
    // 初始化方法
    init() {
        this.cacheElements();
        this.initDatePickers(); // 新增日期选择器初始化
        this.bindEvents();
        this.initCharts();
        this.render();
    },

    // 初始化日期选择器
    initDatePickers() {
        // 设置默认日期为今天
        const today = Utils.formatDate(new Date());
        
        // 初始化记录表单日期选择器
        const recordDateInput = document.getElementById('recordDate');
        if (recordDateInput) {
            recordDateInput.value = today;
            recordDateInput.max = today; // 禁止选择未来日期
            
            recordDateInput.addEventListener('change', (e) => {
                const selectedDate = new Date(e.target.value);
                const today = new Date();
                
                if (selectedDate > today) {
                    this.showToast('不能选择未来的日期', 'error');
                    e.target.value = today.toISOString().split('T')[0];
                }
            });
        }

        // 初始化周期表单日期选择器
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
                    this.showToast('结束日期不能早于开始日期', 'error');
                    e.target.value = cycleStartInput.value;
                }
            });
        }
    },

    // 其他现有方法保持不变...
    // ...
};

export default UIManager;