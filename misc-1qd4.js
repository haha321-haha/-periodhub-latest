// 示例数据模块

export const sampleData = {
    id: "sample-cycle-1",
    startDate: "2023-10-01",
    endDate: "2023-10-07",
    records: [
        {
            id: "day-1",
            day: 1,
            date: "2023-10-01",
            painLevel: 5,
            symptoms: ["剧烈绞痛", "恶心", "疲劳"],
            notes: "疼痛严重，需要卧床休息",
            flow: "heavy"
        },
        {
            id: "day-2",
            day: 2,
            date: "2023-10-02",
            painLevel: 4,
            symptoms: ["绞痛", "腹胀"],
            notes: "疼痛减轻但仍影响工作",
            flow: "moderate"
        },
        {
            id: "day-3",
            day: 3,
            date: "2023-10-03",
            painLevel: 3,
            symptoms: ["轻微疼痛", "腰酸"],
            notes: "可以正常活动但仍有不适",
            flow: "moderate"
        },
        {
            id: "day-4",
            day: 4,
            date: "2023-10-04",
            painLevel: 2,
            symptoms: ["轻微不适"],
            notes: "基本恢复正常",
            flow: "light"
        },
        {
            id: "day-5",
            day: 5,
            date: "2023-10-05",
            painLevel: 1,
            symptoms: [],
            notes: "几乎无不适感",
            flow: "light"
        },
        {
            id: "day-6",
            day: 6,
            date: "2023-10-06",
            painLevel: 0,
            symptoms: [],
            notes: "",
            flow: "spotting"
        },
        {
            id: "day-7",
            day: 7,
            date: "2023-10-07",
            painLevel: 0,
            symptoms: [],
            notes: "",
            flow: "spotting"
        }
    ]
};

// 常用症状列表
export const commonSymptoms = [
    "剧烈绞痛",
    "轻微疼痛",
    "恶心",
    "疲劳",
    "腹胀",
    "腰酸",
    "头痛",
    "乳房胀痛",
    "情绪波动",
    "食欲改变",
    "失眠",
    "腿部不适"
];

// 经期流量选项
export const flowOptions = [
    { value: "heavy", label: "量多", icon: "fas fa-tint text-red-600" },
    { value: "moderate", label: "中等", icon: "fas fa-tint text-pink-500" },
    { value: "light", label: "量少", icon: "fas fa-tint text-blue-400" },
    { value: "spotting", label: "点滴", icon: "fas fa-tint text-gray-400" }
];

// 疼痛等级描述
export const painLevelDescriptions = [
    { level: 0, description: "无痛", emoji: "😊" },
    { level: 1, description: "轻微不适", emoji: "🙂" },
    { level: 2, description: "轻度疼痛", emoji: "😐" },
    { level: 3, description: "中度疼痛", emoji: "😕" },
    { level: 4, description: "严重疼痛", emoji: "😣" },
    { level: 5, description: "剧烈疼痛", emoji: "😫" }
];