// 数据管理模块
const DataManager = {
    // 本地存储键
    STORAGE_KEY: 'period_tracker_data',
    
    // 非药物缓解方案数据库
    remedies: {
        "剧烈绞痛": [
            { name: "热敷疗法", description: "用热水袋或热毛巾敷在下腹部，促进血液循环，缓解肌肉痉挛", icon: "fa-sun" },
            { name: "瑜伽猫牛式", description: "跪在地上，吸气时背部下沉，呼气时背部拱起，重复10次", icon: "fa-child" }
        ],
        "恶心": [
            { name: "薄荷茶", description: "喝一杯温薄荷茶，有助于缓解胃部不适", icon: "fa-leaf" },
            { name: "穴位按压", description: "按压内关穴（手腕横纹上2寸），每次1-2分钟", icon: "fa-hand-pointer" }
        ],
        "疲劳": [
            { name: "镁补充剂", description: "补充镁元素可以缓解疲劳感，建议每天400mg", icon: "fa-pills" },
            { name: "小睡片刻", description: "适当休息，避免过度劳累", icon: "fa-bed" }
        ],
        "腹胀": [
            { name: "茴香籽茶", description: "用茴香籽泡茶喝，有助于减轻胀气", icon: "fa-coffee" },
            { name: "散步", description: "轻微的运动可以促进肠胃蠕动", icon: "fa-walking" }
        ],
        "腰酸": [
            { name: "热敷后腰", description: "用热水袋敷在后腰部位，缓解酸痛", icon: "fa-sun" },
            { name: "婴儿式放松", description: "跪在地上，臀部坐在脚跟上，额头贴地，双臂向前伸展", icon: "fa-child" }
        ],
        "头痛": [
            { name: "薰衣草精油", description: "将薰衣草精油稀释后涂抹在太阳穴，轻轻按摩", icon: "fa-tint" },
            { name: "调整姿势", description: "避免长时间低头或保持同一姿势", icon: "fa-user" }
        ]
    },

    // 获取所有周期数据
    getAllData() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading data:', error);
            return [];
        }
    },

    // 获取特定周期的数据
    getCycleData(cycleId) {
        const allData = this.getAllData();
        return allData.find(cycle => cycle.id === cycleId) || null;
    },

    // 保存周期数据
    saveCycleData(cycleData) {
        try {
            const allData = this.getAllData();
            const index = allData.findIndex(cycle => cycle.id === cycleData.id);
            
            if (index === -1) {
                allData.push(cycleData);
            } else {
                allData[index] = cycleData;
            }
            
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allData));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },

    // 添加新记录
    addRecord(cycleId, record) {
        try {
            const cycle = this.getCycleData(cycleId);
            if (!cycle) return false;

            cycle.records.push({
                id: Date.now().toString(),
                ...record,
                createdAt: new Date().toISOString()
            });

            return this.saveCycleData(cycle);
        } catch (error) {
            console.error('Error adding record:', error);
            return false;
        }
    },

    // 更新记录
    updateRecord(cycleId, recordId, updatedData) {
        try {
            const cycle = this.getCycleData(cycleId);
            if (!cycle) return false;

            const recordIndex = cycle.records.findIndex(r => r.id === recordId);
            if (recordIndex === -1) return false;

            cycle.records[recordIndex] = {
                ...cycle.records[recordIndex],
                ...updatedData,
                updatedAt: new Date().toISOString()
            };

            return this.saveCycleData(cycle);
        } catch (error) {
            console.error('Error updating record:', error);
            return false;
        }
    },

    // 删除记录
    deleteRecord(cycleId, recordId) {
        try {
            const cycle = this.getCycleData(cycleId);
            if (!cycle) return false;

            cycle.records = cycle.records.filter(r => r.id !== recordId);
            return this.saveCycleData(cycle);
        } catch (error) {
            console.error('Error deleting record:', error);
            return false;
        }
    },

    // 获取建议
    getRecommendations(symptoms) {
        const recommendations = [];
        symptoms.forEach(symptom => {
            if (this.remedies[symptom]) {
                recommendations.push(...this.remedies[symptom]);
            }
        });
        return recommendations;
    }
};

export default DataManager;