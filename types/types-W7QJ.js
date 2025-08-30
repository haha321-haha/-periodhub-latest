// 工具函数模块

// 日期格式化
export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// 防抖函数
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// 节流函数
export const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// 表单验证
export const validateForm = (data) => {
    const errors = {};

    // 验证日期
    if (!data.date) {
        errors.date = '请选择日期';
    }

    // 验证疼痛等级
    const painLevel = parseInt(data.painLevel);
    if (isNaN(painLevel) || painLevel < 0 || painLevel > 5) {
        errors.painLevel = '疼痛等级必须在0-5之间';
    }

    // 验证经期流量
    if (!['heavy', 'moderate', 'light', 'spotting'].includes(data.flow)) {
        errors.flow = '请选择有效的经期流量';
    }

    // 验证症状（如果有）
    if (data.symptoms && !Array.isArray(data.symptoms)) {
        errors.symptoms = '症状必须是数组格式';
    }

    // 验证备注长度
    if (data.notes && data.notes.length > 500) {
        errors.notes = '备注不能超过500字';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// 生成唯一ID
export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// 深度克隆对象
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof Object) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
        );
    }
    return obj;
};

// 计算两个日期之间的天数
export const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
};

// 获取日期范围内的所有日期
export const getDateRange = (startDate, endDate) => {
    const dates = [];
    const currentDate = new Date(startDate);
    const end = new Date(endDate);

    while (currentDate <= end) {
        dates.push(formatDate(new Date(currentDate)));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
};

// 检查浏览器支持
export const checkBrowserSupport = () => {
    const features = {
        localStorage: !!window.localStorage,
        indexedDB: !!window.indexedDB,
        serviceWorker: 'serviceWorker' in navigator,
        webGL: (() => {
            try {
                return !!window.WebGLRenderingContext && 
                       !!document.createElement('canvas').getContext('experimental-webgl');
            } catch(e) {
                return false;
            }
        })()
    };

    return {
        supported: Object.values(features).every(Boolean),
        features
    };
};

// 错误处理包装器
export const errorHandler = async (fn, errorMessage = '操作失败') => {
    try {
        return await fn();
    } catch (error) {
        console.error(error);
        throw new Error(errorMessage);
    }
};

// 本地存储包装器
export const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    }
};

// 导出数据为JSON文件
export const exportToJson = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

// 从JSON文件导入数据
export const importFromJson = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                resolve(data);
            } catch (error) {
                reject(new Error('无效的JSON文件'));
            }
        };
        reader.onerror = () => reject(new Error('文件读取失败'));
        reader.readAsText(file);
    });
};